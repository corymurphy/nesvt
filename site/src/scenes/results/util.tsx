/**
 * 
    Pulled mapRow and parseTable from https://gist.github.com/WickyNilliams/9252235 and modified for our use.
 */

/**
 * generates factory functions to convert table rows to objects,
 * based on the titles in the table's <thead>
 * @param  {Array<String>} headings the values of the table's <thead>
 * @return {(row: HTMLTableRowElement) => Object} a function that takes a table row and spits out an object
 */
function mapRow(headings: any) {
  return function mapRowToObject({ cells }: { cells: any }) {
    return [...cells].reduce(function (result, cell, i) {
      const input = cell.querySelector("input,select");
      var value;

      if (input) {
        value = input.type === "checkbox" ? input.checked : input.value;
      } else {
        value = cell.innerText;
      }

      // this if statements exists solely for if there are extra rows without headings (because that crashes the app)
      // the drivers that have extra rows will not show up in the results, but it doesn't crash so that's cool
      if (headings[i]) {
        return Object.assign(result, {
          [headings[i].replace(" ", "")]: value,
        });
      }
    }, {});
  };
}

/**
 * given a table, generate an array of objects.
 * each object corresponds to a row in the table.
 * each object's key/value pairs correspond to a column's heading and the row's value for that column
 *
 * @param  {HTMLTableElement} table the table to convert
 * @return {Array<Object>}       array of objects representing each row in the table
 */
export const parseTable = (table: any) => {
  var headings = [...table.tBodies[0].rows[0].cells].map((heading) =>
    heading.innerText.replace(/\s/g, "")
  );

  return [...table.tBodies[0].rows].map(mapRow(headings));
};

function getConeHits(entry: any) {
  if (entry.includes("dnf")) {
    return 0;
  }

  if (entry.includes("+")) {
    return parseInt(entry.split("+")[1]);
  } else {
    return 0;
  }
}

function getTime(entry: any) {
  if (entry.includes("+")) {
    return entry.split("+")[0];
  } else {
    return entry;
  }
}

function buildRun(number: number, timeValue: string) {
  const run = {
    number: number,
    time: getTime(timeValue)
      .replace(/(\r\n|\n|\r)/gm, "")
      .trim(),
    dnf: timeValue.includes("dnf"),
    cones: getConeHits(timeValue),
    raw: timeValue,
    display: "",
  };

  run.display = displayRun(run);

  return run;
}

function buildRuns(records: any) {
  var runs = [];

  for (let i = 0; i < Object.keys(records).length; i++) {
    var key = Object.keys(records)[i];

    if (key.includes("Run")) {
      var number = parseInt(key.replace("Run", "").replace("..", ""));
      var runValue = records[key];

      var run = buildRun(number, runValue);
      if (run.time != "") {
        runs.push(run);
      }
    }
  }

  return runs;
}

function parseRuns(records: any, extended: any) {
  return [...buildRuns(records), ...buildRuns(extended)];
}

function parsePosition(pos: any) {
  if (pos.includes("T")) {
    return parseInt(pos.replace("T", ""));
  } else {
    return parseInt(pos);
  }
}

function isTrophy(pos: any) {
  return pos.includes("T");
}

function getNextRow(data: any, i: any) {
  if (i + 1 < data.length) {
    return data[i + 1];
  } else {
    return null;
  }
}

const getClassFullName = (shortName: any) => {
  switch (shortName) {
    case "er":
      return "Experienced Race";
    case "es":
      return "Experienced Street";
    case "int":
      return "Intermediate";
    case "n":
      return "Novice";
    case "pony":
      return "Pony Car";
    case "fwd":
      return "Wrong-Wheel Drive";
    case "cst":
      return "Corvette Street";
    case "crt":
      return "Corvette Race";
    case "mzst":
      return "Zoom Zoom";
    case "hardo":
      return "PAX Nerds";
    default:
      return shortName;
  }
};

export const parseResults = (data: any) => {
  // TODO: add type
  let results: { class: any; drivers: any } = {
    class: {},
    drivers: [],
  };

  // start at 1 to because it's the table header, and because
  // why not use the actual table head directive?
  for (let i = 1; i < data.length; i++) {
    var row = data[i];
    // this if statement exists solely in case there are a bunch of rows without headers (which crashes the app)
    // drivers with extra rows will not show up in the results because of this check. but the app doesn't crash!
    if (!row) {
      continue;
    }

    // because we're dealing with silly nonsense, the next row contains
    // additional runs, but there is no indication it's included with this row.
    var next_row = getNextRow(data, i);

    // skip if table line break
    // imagine how much less stupid this code would be if
    // they used web concepts from the last 20 years?

    if (!("Driver" in row)) {
      continue;
    }

    const indexedClasses = ["hardo"];

    var normalizedRuns = parseRuns(row, next_row);

    const indexedClass = indexedClasses.find((idxClass) =>
      row.Class.startsWith(idxClass)
    );
    const subClass =
      indexedClass !== undefined ? row.Class.replace(indexedClass, "") : "";

    let fastest = null;

    const fastestRunInfo = fastestRun(normalizedRuns);
    let runDisplay = "";

    if (indexedClass !== undefined) {
      fastest = row.Total.split("/")[0].trim();
      fastestRunInfo.time = fastest;
    } else {
      fastest = actualTime(fastestRunInfo);
    }

    runDisplay = displayRun(fastestRunInfo);

    var result = {
      name: row.Driver,
      number: row["#"],
      class: indexedClass ?? row.Class,
      subClass: subClass,
      car: row.CarModel,
      runs: normalizedRuns,
      trophy: isTrophy(row["Pos."]),
      position: parsePosition(row["Pos."]),
      fastestRunInfo: fastestRunInfo,
      runDisplay: runDisplay,
      fastest: fastest,
    };

    // TODO: refactor
    if (results.class.hasOwnProperty(result.class)) {
      results.class[result.class].count = results.class[result.class].count + 1;
    } else {
      results.class[result.class] = {
        count: 1,
        name: getClassFullName(result.class),
        alias: result.class,
      };
    }

    // these are extra runs, skip for now
    if (next_row) {
      i++;
    }

    results.drivers.push(result);
  }
  return results;
};

export const displayRun = (run: any) => {
  if (run.time === 999.999) {
    return "dns";
  }

  if (run.dnf) {
    return `${run.time}+dnf`;
  }

  if (run.cones > 0) {
    return `${run.time}+${run.cones}`;
  }

  return `${run.time}`;
};

export const actualTime = (run: any) => {
  var penalty = 2.0;

  if (run.dnf) {
    return 999.999;
  }

  if (run.cones > 0) {
    return parseFloat(run.time) + run.cones * penalty;
  }

  return parseFloat(run.time);
};

export const countRuns = (runs: any) => {
  return runs.filter((run: any) => {
    return run.time !== null && run.time !== "";
  }).length;
};

export const latestRun = (runs: any) => {
  runs = runs.filter((run: any) => {
    return run.time !== null && run.time !== "";
  });

  if (runs.length === 0) {
    return "dns";
  }
  return displayRun(runs[runs.length - 1]);
};

export const fastestRun = (runs: any) => {
  var fastest = { time: 999.999, dnf: false, cones: 0 };
  runs.forEach((run: any, index: any, runs: any) => {
    if (actualTime(run) < actualTime(fastest) && !run.dnf) {
      fastest = run;
    }
  });
  return fastest;
};

export const initDoc = (body: any) => {
  return new DOMParser().parseFromString(body, "text/html");
};

export const parseResultsFromHtml = (data: any) => {
  var doc = initDoc(data);
  const table = doc.querySelectorAll("table")[2];

  return parseResults(parseTable(table));
};

export const sortByCarNumber = (a: any, b: any) => {
  if (parseInt(a.number) < parseInt(b.number)) {
    return -1;
  }

  if (parseInt(a.number) > parseInt(b.number)) {
    return 1;
  }

  return 0;
};

export const sortByFastest = (a: any, b: any) => {
  if (a.fastest < b.fastest) {
    return -1;
  }

  if (a.fastest > b.fastest) {
    return 1;
  }

  return 0;
};

// eslint-disable-next-line
const fetchData = async () => {
  const res = await fetch("results_sample.html");
  const data = await res.text();
  // console.log(results)
  return parseResultsFromHtml(data);
};

// exec a func on component render
// [results, setResults] = useState(() => {
//   console.log('run func')
//   return 4
// })

// useEffect(() => {
//     fetch('url')
//       .then(response => response.json())
//       .then(json => console.log(json))
// // eslint-disable-next-line
// }, [results])

// useEffect(() => {
//     const getData = async() => {
//         const data = await fetchData()
//         setResults(data)
//     }
//     getData();
// // eslint-disable-next-line
// }, results)

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
function mapRow(headings) {
    return function mapRowToObject({ cells }) {
        return [...cells].reduce(function(result, cell, i) {
            const input = cell.querySelector("input,select");
            var value;

            if (input) {
                value = input.type === "checkbox" ? input.checked : input.value;
            } else {
                value = cell.innerText;
            }

            return Object.assign(result, {
                [headings[i].replace(" ", "")]: value
            });
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
function parseTable(table) {
    var headings = [...table.tBodies[0].rows[0].cells].map(
        heading => heading.innerText
    );

    return [...table.tBodies[0].rows].map(mapRow(headings));
}

function getConeHits(entry) {

    if (entry.includes("dnf")) {
        return 0
    }

    if (entry.includes("+")) {
        return parseInt(entry.split("+")[1]);
    } else {
        return 0;
    }
}

function getTime(entry) {
    if (entry.includes("+")) {
        return entry.split("+")[0]
    } else {
        return entry
    }
}

function parseRuns(records, extended) {

    runs = []

    for (let i = 0; i < Object.keys(records).length; i++) {

        key = Object.keys(records)[i]

        if (key.includes("Run")) {
            number = parseInt(key.replace("Run", "").replace("..", ""))
            runs.push({
                "number": number,
                "time": getTime(records[key]),
                "dnf": records[key].includes("dnf"),
                "cones": getConeHits(records[key]),
                "raw": records[key]
            })
        }
    }

    for (let i = 0; i < Object.keys(extended).length; i++) {

        key = Object.keys(extended)[i]

        if (key.includes("Run")) {
            number = parseInt(key.replace("Run", "").replace("..", ""))
            runs.push({
                "number": number + 10,
                "time": getTime(extended[key]),
                "dnf": extended[key].includes("dnf"),
                "cones": getConeHits(extended[key]),
                "raw": extended[key]
            })
        }
    }

    return runs
}

function parsePosition(pos) {
    if (pos.includes("T")) {
        return parseInt(pos.replace("T", ""));
    } else {
        return parseInt(pos);
    }
}

function isTrophy(pos) {
    return pos.includes("T")
}

function getNextRow(data, i) {
    if (i + 1 < data.length) {
        return data[i + 1]
    } else {
        return null
    }
}

function parseResults(data) {

    var results = [];

    // start at 1 to because it's the table header, and because
    // why not use the actual table head directive?
    for (let i = 1; i < data.length; i++) {

        row = data[i];

        // because we're dealing with silly nonsense, the next row contains
        // additional runs, but there is no indication it's included with this row.
        next_row = getNextRow(data, i)

        // skip if table line break
        // imagine how much less stupid this code would be if
        // they used web concepts from the last 20 years?
        if (!('Driver' in row)) {
            continue;
        }

        result = {
            "name": row.Driver,
            "class": row.Class,
            "car": row.CarModel,
            "runs": parseRuns(row, next_row),
            "trophy": isTrophy(row["Pos."]),
            "position": parsePosition(row["Pos."])
        }

        // these are extra runs, skip for now
        if (next_row) {
            i++
        }

        results.push(result)
    }
    return results;
}

function initDoc(body) {
    return (new DOMParser).parseFromString(body, 'text/html');
}

function retrieveResults() {
    var req = new XMLHttpRequest();
    req.open("GET", "results_sample.html", false); // TODO: run this async and allow for configurable resource.
    req.send();
    return req.response;
}

var resultsHtml = retrieveResults();
var doc = initDoc(resultsHtml);
var table = doc.querySelectorAll("table")[3]
var results = parseResults(parseTable(table));

console.log(results);
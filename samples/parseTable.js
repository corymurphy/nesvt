/**
 * @license
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Nick Williams
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
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
    // table.tBodies[0].rows[0]
    var headings = [...table.tBodies[0].rows[0].cells].map(
        heading => heading.innerText
    );

    return [...table.tBodies[0].rows].map(mapRow(headings));
}

var table = document.querySelectorAll("table")[3]


var output = document.querySelector("pre");
var raw_data = parseTable(table);


results = []

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

for (let i = 0; i < raw_data.length; i++) {

    if (!('Driver' in raw_data[i])) {
        continue;
    }

    result = {
        "name": raw_data[i].Driver,
        "class": raw_data[i].Class,
        "car": raw_data[i].CarModel,
        "runs": parseRuns(raw_data[i], raw_data[i + 1])
    }

    if (raw_data[i + 1].Driver == 0) {
        // these are extra runs, skip for now
        i++
    }

    results.push(result)

}

console.log(results);
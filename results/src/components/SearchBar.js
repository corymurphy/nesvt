import { useState } from "react";

const SearchBar = (props) => {

    const [enteredDriver, setEnteredDriver] = useState("");
    const [autoCompleteArray, setAutoCompleteArray] = useState([]);

    function searchButtonHandler(event) {
        event.preventDefault();
        props.onSearchForDriver(enteredDriver);
        setEnteredDriver("");
        document.querySelector("#driversearchform").value = "";
    }

    function driverSearchHandler(event) {
        let currentInput = event.target.value;
        let inputCharLength = currentInput.length;
        let autoCompleteValues = [];
        // sorry about this
        let drivers = props.drivers.map((driver) => driver.name).sort();
        autoCompleteValues.push(...drivers.filter(
            driver => driver.slice(0, inputCharLength).toLowerCase() === currentInput.toLowerCase()));
        autoCompleteValues.push(...drivers.filter(
            driver => driver.slice(
                driver.indexOf(" ") + 1, driver.indexOf(" ") + 1 + inputCharLength).toLowerCase() ===
                currentInput.toLowerCase()));

        // checks that input exists, then checks if the input exists in the "drivers" array (aka if it's valid input),
        // and then passes the search along. this prevents errors down the road.
        if (currentInput.length === 0) {
            autoCompleteValues = [];
        } else if (autoCompleteValues.length === 0) {
            setEnteredDriver("");
        } else {
            setEnteredDriver(currentInput);
        }

        setAutoCompleteArray(autoCompleteValues);
    }

    return (
        <form className="d-flex">
            <input
                id="driversearchform"
                autoComplete="off"
                className="form-control me-2"
                list="driverListOptions"
                placeholder="Enter Driver Name..."
                aria-label="Driver Search"
                onChange={driverSearchHandler}>
            </input>
            <datalist id="driverListOptions">
                {autoCompleteArray.map(driver =>
                    <option value={driver} />)}
            </datalist>
            <button
                className="btn btn-light"
                type="submit"
                onClick={searchButtonHandler}>
                Go
            </button>
        </form>
    )
}

export default SearchBar;
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
        setEnteredDriver(currentInput);
        let inputCharLength = currentInput.length;
        let autoCompleteValues = [];

        let drivers = props.drivers.map((driver) => driver.name).sort();
        autoCompleteValues.push(...drivers.filter(
            driver => driver.slice(0, inputCharLength).toLowerCase() === currentInput.toLowerCase()));
        autoCompleteValues.push(...drivers.filter(
            driver => driver.slice(
                driver.indexOf(" ") + 1, driver.indexOf(" ") + 1 + inputCharLength).toLowerCase() ===
                currentInput.toLowerCase()));

        if (currentInput.length === 0) {
            autoCompleteValues = [];
        }

        setAutoCompleteArray(autoCompleteValues);
    }

    return (
        <form class="d-flex">
            <input
                id="driversearchform"
                autocomplete="off"
                class="form-control me-2"
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
                class="btn btn-light"
                type="submit"
                onClick={searchButtonHandler}>
                Go
            </button>
        </form>
    )
}

export default SearchBar;
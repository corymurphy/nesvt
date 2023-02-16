import { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

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

        autoCompleteValues.push(...props.drivers
            .map((driver) => driver.name)
            .filter((name) => {
                return name.toLowerCase().match(currentInput.toLowerCase())
            })
            .sort());

        if (Number(currentInput)) {
            let filtered = props.drivers
                .filter((driver) => {
                    return driver.number.match(currentInput);
                })
                .map(driver => driver.name);

            
            console.log(filtered);
            autoCompleteValues.push(...filtered);
            console.log(autoCompleteValues);

        }
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

    
    const fuseOpts = {
        keys: [
            "name",
            "number"
        ]
    }
      const handleOnSearch = (string, results) => {
        // console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // console.log(result)
      }
    
      const handleOnSelect = (item) => { 
        props.onSearchForDriver(item.name);
        setEnteredDriver("");
        props.navButtonRef.current.click() // forces the navbar to close
      }
    
      const handleOnFocus = () => {
        // console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            <span style={{ display: 'block', textAlign: 'left' }}>number: {item.number}</span>
          </>
        )
      }

      
    return (
        <div style={{ flex: 1, maxWidth: 400  }}>
        <ReactSearchAutocomplete
            items={props.drivers}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            fuseOptions={fuseOpts}
          />
        </div>
    )
}

export default SearchBar;
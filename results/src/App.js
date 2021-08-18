import './App.css';

import { useEffect, useState } from 'react'

import Header from './components/Header'
import DriverClasses from './components/DriverClasses';
import { parseResultsFromHtml } from './util.js';

function App() {

  const [results, setResults] = useState({})

  useEffect(() => {
    fetch('results_sample.html')
      .then(response => response.text())
      .then(data => setResults(parseResultsFromHtml(data)))
  }, [])

  const [currentDriverClass, setCurrentDriverClass] = useState("all");
  const [currentDriver, setCurrentDriver] = useState("");
  const [clearButtonPressed, setClearButtonPressed] = useState(false);

  function selectDriverClassHandler(selectedDriverClass) {
    setCurrentDriverClass(selectedDriverClass);
  }

  function selectDriverHandler(selectedDriver) {
    setCurrentDriver(selectedDriver);
  }

  function clearButtonHandler(clearButtonPressed) {
    setClearButtonPressed(clearButtonPressed);
  }

  return (
    <>
      <Header
        results={results}
        onSelectDriverClass={selectDriverClassHandler}
        onSelectDriver={selectDriverHandler}
        onClearButtonHidden={clearButtonHandler}
      />
      <DriverClasses
        results={results}
        selectedDriverClass={currentDriverClass}
        selectedDriver={currentDriver}
        clearButtonPressed={clearButtonPressed}
      />
    </>
  );
}

export default App;

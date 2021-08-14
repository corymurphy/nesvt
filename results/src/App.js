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

  function selectDriverClassHandler(selectedDriverClass) {
    setCurrentDriverClass(selectedDriverClass);
  }

  return (
    <>
      <Header
        results={results}
        onSelectDriverClass={selectDriverClassHandler}
      />
      <DriverClasses
        results={results}
        selectedDriverClass={currentDriverClass}
      />
    </>
  );
}

export default App;

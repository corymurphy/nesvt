import './Results.css';

import { useEffect, useState } from 'react'

import Header from './components/Header'
import ResultsSorter from './components/ResultsSorter';
import { parseResultsFromHtml } from './util';

function Results() {

  const [results, setResults] = useState({})

  useEffect(() => {
    fetch('results_sample.html')
      .then(response => response.text())
      .then(data => setResults(parseResultsFromHtml(data)))
    
    const id = setInterval(() =>
      fetch('results_sample.html')
        .then(response => response.text())
        .then(data => setResults(parseResultsFromHtml(data)))
    , 15000)

    return () => clearInterval(id);  
  }, [])

  const [selectedSortBy, setSelectedSortBy] = useState(
    sessionStorage.getItem('sortBy') || 'class'
  );
  const [currentDriverClass, setCurrentDriverClass] = useState(
    sessionStorage.getItem('class') || 'all'
  );
  const [currentDriver, setCurrentDriver] = useState("");
  const [clearButtonPressed, setClearButtonPressed] = useState(false);

  function selectDriverClassHandler(selectedDriverClass: any) {
    setCurrentDriverClass(selectedDriverClass);
  }

  function selectDriverHandler(selectedDriver: any) {
    setCurrentDriver(selectedDriver);
  }

  function clearButtonHandler(clearButtonPressed: any) {
    setClearButtonPressed(clearButtonPressed);
  }

  function selectSortByHandler(selectedSortBy: any) {
    setSelectedSortBy(selectedSortBy);
  }



  return (
    <>
      <Header
        results={results}
        onSelectDriverClass={selectDriverClassHandler}
        onSelectDriver={selectDriverHandler}
        onClearButtonHidden={clearButtonHandler}
        onSelectedSortBy={selectSortByHandler}
        selectedSortBy={selectedSortBy}
        
      />
      <ResultsSorter
        results={results}
        selectedDriverClass={currentDriverClass}
        selectedDriver={currentDriver}
        clearButtonPressed={clearButtonPressed}
        selectedSortBy={selectedSortBy}
      />
    </>
  );
}

export default Results;

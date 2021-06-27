import './App.css';

import { useEffect, useState } from 'react'

import Header from './components/Header'
import DriverClasses from './components/DriverClasses';
import { parseResultsFromHtml } from './util.js';

function App() {

    const [results, setResults] = useState({ })

    useEffect(() => {
      fetch('results_sample.html')
        .then(response => response.text())
        .then(data => setResults(parseResultsFromHtml(data)))
    }, [])

    return (
      <>
        <Header />
        <DriverClasses results={results} />
      </>
    );
}

export default App;

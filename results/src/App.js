import './App.css';

import { useEffect, useState } from 'react'

import Header from './components/Header'
import DriverClasses from './components/DriverClasses';
import { initDoc, parseResults, parseTable } from './util.js';

function App() {

    // eslint-disable-next-line 
    const [results, setResults] = useState({ })

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

    
    useEffect(() => {
        const getData = async() => {
            const data = await fetchData()
            setResults(data)
        }
        getData();
    }, [results])

    useEffect(() => {
        const getData = async() => {
            const data = await fetchData()
            setResults(data)
        }
        getData();
    // eslint-disable-next-line 
    }, results)

    const fetchData = async() => {
      const res = await fetch('results_sample.html');
      const data = await res.text();
      var doc = initDoc(data)
      const table = doc.querySelectorAll("table")[3]
      const results = parseResults(parseTable(table));
      console.log(results)
      return results;
    }

    return (
      <>
        <Header />
        <DriverClasses results={results} />
      </>
    );
}

export default App;

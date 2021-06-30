import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'

import Runs from './Runs'
import { fastestRun, countRuns, latestRun } from '../util'

const Driver = ({driver}) => {

    const [open, setOpen] = useState(false);
    
    return (
        <div class="container-fluid">
            <div class="card w-100 border-success mt-2" >
                <div class="row g-3 align-items-center">
                    <div class="col-1 d-flex justify-content-center">
                        <h4 class="driverPosition">{driver.position}</h4>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <h5 class="card-title">{driver.name}</h5>
                        </div>
                        <div class="row">
                            <p class="card-text">#{driver.number}</p>
                        </div>
                        <div class="row">
                            <p class="card-text">{driver.car}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <p class="card-text">Fastest Run:</p>
                        </div>
                        <div class="row">
                            <p class="card-text"><b>{fastestRun(driver.runs)}</b></p>
                        </div>
                        <div class="row">
                            <p class="card-text">Last Run:</p>
                        </div>
                        <div class="row">
                            <p class="card-text"><b>{latestRun(driver.runs)}</b></p>
                        </div>
                    </div>
                    <div class="col-2 p-2">
                        <div class="row text-center">
                            <p class="card-text">Runs: <b>{countRuns(driver.runs)}</b></p>
                        </div>
                        <div class="row">
                        <Button variant="outline-primary timesButton" class="text-nowrap timesButton" onClick={() => setOpen(!open)} aria-expanded={open}>
                            Show All
                        </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Collapse in={open} variant="px-2">
                <div class="px-2"><Runs runs={driver.runs}/></div>
            </Collapse>
            
        </div>
    )
}

export default Driver

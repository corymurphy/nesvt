import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'

import Driver from "./Driver"

const DriverClass = (props) => {

    const getDriversInClass = (classAlias, drivers) => {
        return drivers.filter(function (driver) {
            return driver.class === classAlias;
        })
    }

    const [open, setOpen] = useState(false);

    // I want to make a thingy that automatically un-collapses the classes if a specific class or driver is selected
    // and then collapse the classes if the "clear filter" or "show all" buttons are pressed
    // but all my attempts make infinite react render loops???

    // also I want to sort the classes alphabetically

    return (
        <div>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-sm-8">
                        <Button variant="" onClick={() => setOpen(!open)} aria-expanded={open}>
                            <h3>
                                {props.driverClass.name} - {props.driverClass.alias.toUpperCase()}
                            </h3>
                        </Button>
                    </div>

                    <div className="col-sm-4 text-muted align-self-center">
                        <h4>{props.driverClass.count} Drivers</h4>
                    </div>
                </div>
            </div>

            <Collapse in={open}>
                <div>
                    {getDriversInClass(props.driverClass.alias, props.drivers).map((driver) => (
                        <Driver driver={driver} />
                    ))}
                </div>
            </Collapse>

        </div>
    )
}

export default DriverClass

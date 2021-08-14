import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'

import Driver from "./Driver"

const DriverClass = (props) => {

    const getDriversInClass = (classAlias, drivers) => {
        return drivers.filter(function (driver) {
            return driver.class === classAlias;
        })
    }

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div class="container pt-4">
                <div class="row">
                    <div class="col-sm-8">
                        <Button variant="" onClick={() => setOpen(!open)} aria-expanded={open}>
                            <h3>
                                {props.driverClass.name} - {props.driverClass.alias.toUpperCase()}
                            </h3>
                        </Button>
                    </div>

                    <div class="col-sm-4 text-muted align-self-center">
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

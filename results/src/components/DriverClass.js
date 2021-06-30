import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'

import Driver from "./Driver"

const DriverClass = ({driverClass, drivers}) => {

    const getDriversInClass = (classAlias, drivers) => {
        return drivers.filter(function(driver){
            return driver.class === classAlias;
        })
    }

    const [open, setOpen] = useState(false);

    return (
        <>
            <div class="container pt-4">
                <div class="row">
                    <div class="col-sm-8">
                        <Button variant="" onClick={() => setOpen(!open)} aria-expanded={open}><h3>{driverClass.name} - {driverClass.alias}</h3> </Button>
                    </div>
                    
                    <div class="col-sm-4 text-muted align-self-center">
                        <h4>{driverClass.count} Drivers</h4>
                    </div>
                </div>
            </div>

            <Collapse in={open}>
                <div>
                    {getDriversInClass(driverClass.alias, drivers).map((driver) => (
                        <Driver driver={driver} />
                    ))}
                </div>
            </Collapse>
        </>
    )
}

export default DriverClass

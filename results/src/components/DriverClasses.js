
import DriverClass from "./DriverClass"

const DriverClasses = ({results}) => {
    return (
        <>
            { Object.values(results.class).map((item, i) =>
                <DriverClass key={i} driverClass={item} drivers={results.drivers}/>
            )}
        </>
    )
}

export default DriverClasses

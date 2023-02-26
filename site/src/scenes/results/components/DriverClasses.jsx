import DriverClass from "./DriverClass";

const DriverClasses = (props) => {
  // define empty driver array and empty class object to pass along when there's no data
  const nullDriver = [
    {
      name: "No Data",
      number: "N/A",
      class: "null",
      position: 1,
      runs: [],
      trophy: true,
    },
  ];

  const nullClass = {
    count: 0,
    name: "No Data",
    alias: "null",
  };

  // I dont' know if this is dumb approach or not, but the four conditions below are:
  // 1: there is driver data, no filter is selected in the "Class" dropdown on the navbar, no driver is selected in search
  // 2: there is driver data, a filter IS selected in the "Class" dropdown on the navbar, no driver is selected in search
  // 3: there is driver data, a driver IS selected in search
  // 4: there is no driver data (except util.js throws an error when there's no data so this never shows up)

  return (
    <>
      {props.results.hasOwnProperty("class") &&
      props.selectedDriverClass === "all" &&
      !props.selectedDriver ? (
        Object.values(props.results.class).map((item, i) => (
          <DriverClass
            key={i}
            driverClass={item}
            drivers={props.results.drivers}
            selectedDriverClass={props.selectedDriverClass}
            clearButtonPressed={props.clearButtonPressed}
          />
        ))
      ) : props.results.hasOwnProperty("class") && !props.selectedDriver ? (
        <DriverClass
          key={0}
          // key={i}
          driverClass={
            Object.values(props.results.class).filter(
              (driverClass) => driverClass.alias === props.selectedDriverClass
            )[0]
          }
          drivers={props.results.drivers}
          selectedDriverClass={props.selectedDriverClass}
          clearButtonPressed={props.clearButtonPressed}
        />
      ) : // this is dumb but it works
      props.results.hasOwnProperty("class") && props.selectedDriver ? (
        <DriverClass
          key={0}
          // key={i}
          driverClass={
            Object.values(props.results.class).filter(
              (driverClass) =>
                driverClass.alias ===
                Object.values(props.results.drivers).filter(
                  (driver) => driver.name === props.selectedDriver
                )[0].class
            )[0]
          }
          drivers={Object.values(props.results.drivers).filter(
            (driver) => driver.name === props.selectedDriver
          )}
          selectedDriver={props.selectedDriver}
          selectedDriverClass={props.selectedDriverClass}
          clearButtonPressed={props.clearButtonPressed}
        />
      ) : (
        <DriverClass key={0} driverClass={nullClass} drivers={nullDriver} />
      )}
    </>
  );
};

export default DriverClasses;

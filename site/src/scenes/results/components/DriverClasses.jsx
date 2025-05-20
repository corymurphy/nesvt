import DriverClass from "./DriverClass";

const DriverClasses = (props) => {
  const { results, selectedDriverClass, selectedDriver, clearButtonPressed } =
    props;

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

  const sortOrder = [
    "er",
    "es",
    "int",
    "n",
    "pony",
    "fwd",
    "cst",
    "crt",
    "mzst",
    "hardo",
  ];

  // Early return if no class data
  if (!results || !results.class) {
    return (
      <DriverClass key="null" driverClass={nullClass} drivers={nullDriver} />
    );
  }

  // If a driver is selected, show only that driver and their class
  if (selectedDriver) {
    const driver = Object.values(results.drivers || {}).find(
      (d) => d.name === selectedDriver
    );
    const driverClass = driver
      ? Object.values(results.class).find((c) => c.alias === driver.class)
      : nullClass;
    const drivers = driver ? [driver] : nullDriver;
    return (
      <DriverClass
        key={driverClass ? driverClass.alias : "null"}
        driverClass={driverClass || nullClass}
        drivers={drivers}
        selectedDriver={selectedDriver}
        selectedDriverClass={selectedDriverClass}
        clearButtonPressed={clearButtonPressed}
      />
    );
  }

  // If a class filter is selected (not "all"), show only that class
  if (selectedDriverClass && selectedDriverClass !== "all") {
    const driverClass = Object.values(results.class).find(
      (c) => c.alias === selectedDriverClass
    );
    return (
      <DriverClass
        key={driverClass ? driverClass.alias : "null"}
        driverClass={driverClass || nullClass}
        drivers={results.drivers}
        selectedDriverClass={selectedDriverClass}
        clearButtonPressed={clearButtonPressed}
      />
    );
  }

  // Default: render all classes, sorted by sortOrder
  const sortedClasses = Object.values(results.class).sort((a, b) => {
    const aIdx = sortOrder.indexOf(a.alias);
    const bIdx = sortOrder.indexOf(b.alias);
    if (aIdx === -1 && bIdx === -1) return 0;
    if (aIdx === -1) return 1;
    if (bIdx === -1) return -1;
    return aIdx - bIdx;
  });

  return (
    <>
      {sortedClasses.map((driverClass) => (
        <DriverClass
          key={driverClass.alias}
          driverClass={driverClass}
          drivers={results.drivers}
          selectedDriverClass={selectedDriverClass}
          clearButtonPressed={clearButtonPressed}
        />
      ))}
    </>
  );
};

export default DriverClasses;

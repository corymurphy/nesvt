# Motorsport Reg API Notes

```shell

?start=2017-01-01&end=2018-01-01

?start=2022-01-01&end=2024-01-01

curl 'https://api.motorsportreg.com/rest/calendars/organization/F9EADF5D-F9F5-4B6C-4951013B365A2F87/type/autocross.json?archive=true&start=2022-01-01&end=2024-01-01'

curl 'https://api.motorsportreg.com/rest/calendars/organization/F9EADF5D-F9F5-4B6C-4951013B365A2F87.json?archive=true&start=2022-01-01&end=2024-01-01'

curl https://api.motorsportreg.com/rest/calendars/organization/F9EADF5D-F9F5-4B6C-4951013B365A2F87/type/membership.json?archive=true



curl 'https://api.motorsportreg.com/rest/calendars/organization/F9EADF5D-F9F5-4B6C-4951013B365A2F87/type/E45E2796-A916-6BD8-97619EBFDF81E3D6.json?archive=true&start=2022-01-01&end=2024-01-01'

```

```javascript
import { useEffect, useRef } from 'react';
const Log = () => {
    // initiate dataFetch
    const dataFetch = useRef(false)

    useEffect(() => {
        console.log('Running ...')

        // start:: prevent executing useEffect twice
        if (dataFetch.current)
            return
        dataFetch.current = true
        // end:: prevent executing useEffect twice
    }, [])

    return (<p>here</p>)
}

export default Log;
```
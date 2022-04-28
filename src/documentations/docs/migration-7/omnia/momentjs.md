# We removed moment.js and use Day.js instead.

## Migrate to Day.js
Update import moment to dayjs as below.

Before
```ts
import moment from "moment";
```

After changed
```ts
import dayjs from "dayjs";
```

Also remove declare moment statement as below because it removed.
```ts
declare var moment: any;
```

Day.js that have the same apis like moment.js so you can use the like as below.
```ts
dayjs.utc(utcDatetime).local();
dayjs.utc(utcDatetime).tz(mapped.IANA);
```

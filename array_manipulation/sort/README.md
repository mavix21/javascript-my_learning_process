# Array Sort

## Exercises

### 5. Sorting by Month

A list of `MONTHS` is provided. These months are sorted from the beggining of
the year (JAN) to the end of the year (DEC).

We need to sort an array of events by the month they are ocurring in. Let's say
we have the following events:

```javascript
[
    { event: 'dance', month: 'MAR' },
    { event: 'farmers market', month: 'JUN' },
    { event: 'parade', month: 'JAN' }
]
```

The parade is the first event in the year, starting in January. Following that
is the dance in March and the farmers in June.

We need the order of these events to become:

```javascript
[
    { event: 'parade', month: 'JAN' },
    { event: 'dance', month: 'MAR' },
    { event: 'farmers market', month: 'JUN' }
]
```

Given the array of events, sort them by the month that they occur in and return
the sorted array.

Each object in the `events` array will have properties `event` and `month`

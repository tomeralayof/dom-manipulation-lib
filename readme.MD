# Description

library for creating statistics tables and graphs and rander to your html file.

## Installation

click install lorem ipsum, see more details in [npm]()

```bash
npm install install lorem ipsum
```

## Sections

- [table](#table)

# Table

# create table

## Import

Import tables to get the table fancionality

```js
import { tables } from "lorem ipsum";
```

- you can simply create a new table by passing an object with the following data

```js
const data = {
  id: "body",
  tableRows: [
    [
      "Sr. No.",
      "Name",
      "Company",
      "mountly salery",
      "yearly salery",
      "motivation",
    ],
    ["1.", "tomer", "google", 5000, 5000 * 12, 5],
    ["2.", "avi", "cnw", 2000, 2000 * 12, 4],
    ["3.", "shlomi", "teva", 3000, 3000 * 12, 2],
  ],
};

const dataCreated = tables.createTable(data);
```

## parameters

- data - an object including the element id , table data

## Return value

- in case of sucess, the function will render the table to the html file and retrun the data you have passed in.
- in case of failure the function will throw exeption

## License

[MIT](https://choosealicense.com/licenses/mit/)

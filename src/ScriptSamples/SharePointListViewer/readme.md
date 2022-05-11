# SharePoint List Viewer script sample

A simple SharePoint list viewer script sample using Vue's data-iterator. Any colums to fetch and show are configurable and can be sorted on. Supports a few different value types that render differently (string, datetime, link, number) and support proper sorting (10 comes after 9, not after 1, as long as type is "number").

Doesn't use data-table which might've been more straightforward, as passing $vuetify context for the constructor is NOT straightforward.

## Installation

1. Create a script block in Omnia
2. Paste HTML, CSS and JS from the files (JavaScript is in a file ending in .ts because this repository .gitignores .js files)
3. Configure siteId, listId and fields you want to use
4. Disable "show in iFrame" in script block's settings

And you're done!

## Features

- Configurable columns
- Should work with any list and site as long you have access to it and don't try to fetch columns (fields) that are not supported
- Sort based on multi-level object values (field name with multiple dots - like createdBy.user.email)
- Supports display up to 3rd level (like, well - createdBy.user.email)

Feel free to tweak as you see fit, this is just a starting point :)

## Improvements backlog

- !important for CSS is bad. Should/might work without. Your mileage may vary.
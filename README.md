## Goal

Design a form and view detail page. Generally, the most messy part of a front end system is the maintenance of forms.
That's why we want to see your implementation of a simple form.

## Problem

Create a form page for [a country tender](https://en.wikipedia.org/wiki/Request_for_tender) for CRUD operations. See [Data Type](#data-type).
It means user should be able to `create`, `edit`, `delete` and `view` the tenders.

### Backend

There is intentionally no server because day to day, your work will be similar to this such that you will bootstrap UI and
experiment without much support from backend. Thus, expectation is that you should be self-sufficient
to be able to inline your test data, you can use `data.yml` directly and/or modify/extend it.

That being said, there are many open source json API servers for quick prototyping, we would be happy to see
an implementation with one of them or at least discussion about available options and their pros/cons.

### Data Type

- Country
- Commodity (depends on selected country)
- Action (buy or sell)
- Tonnage
- Unit
- Date and/or Range
- Notes

### Validation

- Think about meaningful error messages to guide users in use-cases (for example, min/max for tonnage, buy for an export country etc.)
- Care about security (i.e. XSS)

## Deliverable

- Your solution must live in a private repo.
- Repo readme must explain how to install dependencies and run the application.

## FAQ/Notes

- React is required.
- Typescript or Flow aren't required, project can be a plain JavaScript implementation.
- Webpack is preferred.
- Any dependency could be utilized. Since at job, we already use if something is helpful. However, the less dependency you use, the better it is.
- Server isn't a must, items can be kept in memory.

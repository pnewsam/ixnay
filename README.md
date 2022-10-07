# ixnay

A set of sensible CSS styling defaults for bootstrapping frontend projects.

## To Do List

- Highlighting class names, to easily identify where classes actually come into play
- A "Components" page with web components filling out element list with what is typically included in a Design system
- A grid system
- Collapsible content component showing CSS styles (implementation)

## Deploying

To deploy, run this command.

```
npm run build-css && aws s3 mv dist/ixnay.min.css s3://ixnay-dist
```

It compiles the css using the entry point specified in css.config.ts and then depoys it to the S3 bucket attached to the Cloudfront distribution.

It is available for use via:

```
<link rel="stylesheet" href="https://d162l99amukxws.cloudfront.net/ixnay.min.css" />
```

## Design Principles

- 60-30-10 rule

## Utilities

- Columns

## Components

- Badge
- DropdownMenu
- Tooltip
- Error
- Tag
- ix-Checkbox
- ix-Combobox
- ix-Select
- Icons
- Skeleton (for loading)
- Spinner (for loading)
- Snippet (copyable code)
- Status Indicator (dot)
- Toggle
- Tabs
- Toast

### Issues

- If a 
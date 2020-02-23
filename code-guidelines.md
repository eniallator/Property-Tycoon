# Code guidelines - Typescript - Property Tycoon

## Basic conventions
- Single quotes for strings (e.g. `foo('this is a string')`)
- No semi-colons at the end of the line e.g. `let bar = 1`
- Comments start two spaces after code e.g. `let foo = 'bar'  // Comment`
- Unfinished implementations followed by `// TODO`, e.g. `cards: string  //TODO: Change to collection?`

## Documentation
We are using [typedoc](https://typedoc.org/).

The **header** of each file should contain the following:
```
// file-name.ts
/**
 * Description of the contents of the file
 * 
 * authors: First L., First L.  
 * @packageDocumentation
 */
```
The **type**/**interface**/**function** definitions should have the following on the line immediately previous:
```
/**
 * Concise description
 * - `id`: numerical id = [1-40], unique
 * - `field`: description of field
 * - `anotherField`: {`FOO`, `BAR`, `ZED`}
 */
 ```
Note the notations:
- ***Set*** denoted by "{\`FOO\`, \`BAR\`}"
- ***Interval*** / ***Range*** "= [1, 20]", using standard inclusion "[" notation
- ***Uniqueness*** specified by ", unique"

## Code source layout

### Clustering logical units
- Comment - What is the next unit about?
- Two-lines padding at the top and bottom of units
- One-line padding within units
```
// Example file
// Header documentation ommited

import { foo } from './foo'


// First logical unit
enum Enum { FOO, BAR, ZED }

/** Documentation ommited */
interface FirstThing {
    readonly field: number

    anotherField: number
    yetAnotherOne: string
}


// Second logical unit
/** Documentation ommited */
interface FirstThing {
    readonly field: number

    anotherField: number
    yetAnotherOne: string
}


export { Player, Token }
```

### Import, export statements
- Import statements one-line after the header
- Export statements at the bottom, after any logical unit padding.
```
// Example file
// Header documentation ommited

import { foo } from './foo'
import { bar } from './bar'


// Code ommitted


export { Something, Else }
```
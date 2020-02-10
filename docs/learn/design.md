# Engine Design and Dev Methodology [DRAFT]

The engine is a data-oriented cycle:
```
INPUT <----
  |       |
  |       |
  |       --- 
  |           GUI
  |       -->
  |       |
  v       |
LOGIC------
```

Our `Game` will run as one program, which will be the composition of
multiple subprograms.

Rather than thinking of things as a hierarchy of objects defined by parent-child
and sibling relationships. Think of a space of different components, each with
different capabilities, and composable and form more robust components.

Each of these components is in itself a program. Programs are just boxes that
take some input and return some output.

What distinguishes a program from any other is how it evolves at each step of
execution, until termination.

A program `1` will always return the constant `1`.

A program `x -> x + 2` takes an input `x`, and returns its input plus `2`

A program `loop forever` will loop to infinity and never terminate

You get the gist.



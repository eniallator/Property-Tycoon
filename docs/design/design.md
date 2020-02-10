# Engine Design

The engine will be a data-pipeline, with most pieces of the pipeline transforming some `GameState` data.

![Engine Design Diagram](./engine-design.svg)

## Engine Cycles
1. The user interacts with the `GUI`, making inputs
2. The GUI pipes these raw inputs to the `Input` module
3. The `Input` module translates these raw inputs into game commands, that can be processed by the logic `Logic Core`
4. The `Logic Core` takes the `GameState` at current timestep t, and the commands from the `Input` module, and outputs the new state for the next timestep t+1. The new state then gets piped to the `GUI`, and back into the `Logic Core` for the next timestep computation.
5. The `GUI` recieves the new GameState and renders it to the screen.

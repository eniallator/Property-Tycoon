# Property Tycoon Game

## Requirements
Build a 6-player property tycoon game, similar to monopoly, with the option of autonomous players.

## Administrative Roles
- Project Management
- Product Management
- Engine
- Design
- AI

## Team Focus
- Alex
	- DevOps
	- Backend / Systems Infrastructure
	- Project Management
	- Python, C++, Java

- Niall
	- Backend
	- Networking
	- **NOT**: Assets

- Navni
	- Project Management
	- Python, Full Web Stack
	- Asset Design

- Joe
	- Project Management
	- Unity, C#, Python

- Michael
	- AI
	- Sound Design
	- Game Engine Design

### Game Details
1. Player avatars are:
	- Boot
	- Smartphone
	- Goblet
	- Hatstand
	- Cat
	- Spoon

2. One player is the banker
	- Does there need to be a player-designated banker?
	- Does the banker make any decisions?

3. 'Opportunity Knocks' and 'Pot Luck' cards are shuffled at the onset of each game.

4. Players can only buy property improvements after they have moved their token and optionally purchased a property.

5. Maximum improvement on a property allowed is one hotel.

### Requirements
- [ ] Project Plan
- [ ] Process Document
- [ ] Design Document
- [ ] Code Base
- [ ] Testing Schedule
- [ ] Group Report
- [ ] Peer Assessment

## Modules
- Logic Core
	- Logic and rules behind how every other component functions

- Renderer
	- Renders visuals to the users view

- Audio
	- Plays music and sound effects

- Input
	- Reads input from the user and / or autonomus agent

### Operation
Each module in the system can be visualized as a function taking inputs and returning an output. The entire system then is the composition of all these modules.

Here are the following inputs and outputs of each module. Empty input is denoted with \_:
- Input : GameState -> _ | Command
- Logic Core : ( GameState, Command ) -> GameState
- Renderer : GameState -> _
- Audio : GameState -> _

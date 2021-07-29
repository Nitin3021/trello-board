# Trello

## Overview

This pure ReactJS based application is depicting a Trello board. It will allow user to add labels and corresponding cards to that label. This application does not use any external npm packages beside the ones already provided by React library, thereby the functionality has been handled by JavaScript as per the requirement provided.

## Details

- Enter label text input will allow to add labels to a table.
- If there exists a label on screen, it will open another form to enter Cards.
- Labels cannot be duplicate (case-insensitive).
- Cards can be added which will create new row in the table.
- Actions like 'Edit', 'Remove' & 'Move' can be performed on added cards.
  - Edit: A sub-form will open for the text to be edited.
  - Remove: Removing will cause the card to be removed and the remaining cards will adjust on the screen.
  - Move: Movement of cards can be triggered by selecting dropdown menu option and then click Move.
  - Validations persists the user to not perform transactions wherein the select dropdown is the same label as the destination label, card description is same as the edited card, etc.

## Components

- Header - Will render only a simple header title.
- DashboardPage - Renders a table to contain newly added labels and their corresponding cards.
- Cards - Provides buttons for actions to be performed on the card.
- AddLabelText - Will render a form to validate & add new labels.
- AddCardText - Will render a form to validate & add new cards.
- EditCardText - Validates the text to be edited and passes back the newly edited text.

localStorage has been used to persist data.

## Installation

Recommended to use npm for installation of modules.

```bash
npm install
```

## Usage

To run this program.

```python
npm start
```

## License

[MIT © NP](https://github.com/Nitin3021)

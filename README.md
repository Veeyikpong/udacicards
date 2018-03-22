# UdaciCards / Mobile Flash Cards
This is UdaciCards Project developed by PONG VEE YIK @ Udacity React Programme.

## How to launch the project
### Setup and Clone project
1. Open terminal, navigate to an empty folder and clone UdaciCards project using the following commands:
```js
git clone https://github.com/Veeyikpong/udacicards.git
```

### Installation
The following instructions install and launch the app using <b>yarn</b>. npm can be used in place of yarn.
You'll need to install the following libraries using yarn install, following these steps:
1. Navigate to the 'UdaciCards' folder on your terminal

2. Install the libraries using
```js
yarn install
```
** Wait for installation **

3. In the same folder, start the project using
```js
yarn start
```

*Note: Below are the libraries used in this project, you can install them manually if there's some problem with yarn install:

1. "expo": "^25.0.0"

2. "react": "16.2.0"

3. "react-native": "0.52.0"

4. "react-native-flip-card": "^3.5.2"

5. "react-navigation": "^1.5.8"

6. "react-redux": "^5.0.7"

7. "redux": "^3.7.2"

### Start project
1. Navigate to 'UdaciCards' folder in terminal

2. Start the project with the following command:
```js
yarn start
```

## Supports IOS and Android
This application has been tested throughly and is working fine on <b>IPhone X</b> and <b>Samsung Galaxy Tab A</b>. Necessary UI adjustments has been made for both platform.

## Project Specifications
### Splash Screen
✓ When the app launches, there will be a splash screen welcoming you.

### Deck List View (Initial View)
✓ Displays a list of created decks which includes the name of each deck and the number of cards.

✓ Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.

### Deck Details View / Individual Deck View
✓ Includes the deck title, number of cards in the deck, Option to start a quiz for that deck, Option to add a new question to the deck

✓ Pressing the 'Add Card' will lead the user to create a new card for the deck

✓ Pressing the 'Start Quiz' will start the quiz. Validation is performed here to check if there is no card in the deck, error will be prompted and quiz will not be started.

### Add New Card View
✓ Includes fields for a question and an answer, together with a submit button

✓ Submitting the form correctly adds the question to the deck.

✓ Data validation is performed and user must input all required values

### Quiz View
✓ The Quiz view starts with a question from the selected deck.

✓ The question is display, along with a button to show the answer.

✓ Pressing the 'Answer' button will flip the card and displays the answer, along with 'Correct' and 'Incorrect' button

✓ Pressing the 'Question' button displays the question.

✓ The view displays the number of questions remaining.

✓ When the last question is answered, the percentage of correct answers and the number of questions answered correctly are displayed.

✓ When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.

### New Deck View
✓ Includes a deck title input field

✓ Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.

✓ Data validation is performed and user must input all required values

### Notifications
✓ Logic for notification has been implemented

✓ Notification will be prompted at 6pm everyday if no quiz has been taken for the day

## Project files
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── App.js # Root for the app, controlling the navigations and main frames for the app
├── app.json # Configurations for the app
├── logo.png # App logo
├── actions
│   └── index.js # stores all the redux actions.
├── reducers
│   └── index.js # stores all the redux reducers.
├── components
│   ├── Deck.js # Rendering the individual deck view
│   ├── DeckDetails.js # Rendering deck details / individual deck view
│   ├── DeckList.js # Initial view, rendering all the created decks
│   ├── NewCard.js # Rendering view to add new card to specific deck
│   ├── NewDeck.js # Rendering view to add new deck
│   ├── Quiz.js # Renders and controls the quiz logics, a library called <b>react-native-flip-card</b> is used here to ensure the card flipping render nicely
│   └── Splash.js # Custom view, introduces the developer and project name for a second before the app starts
├── utils
│   ├── _decks.js # Stores the DECK_STORAGE_KEY for AsyncStorage, the sample deck and also deck parsing function
│   ├── api.js # Controlling AsyncStorage operations
│   ├── colors.js # Stores color codes
│   └── notifications.js # Stores the notifications code to clear / set notifications
└── App.js # This is the root the app, controlling all the pages/routes.
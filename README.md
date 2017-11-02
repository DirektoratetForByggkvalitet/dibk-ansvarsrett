# [dibk-ansvarsrett](https://dibk-ansvarsrett.firebaseapp.com/) [![Build Status](https://travis-ci.com/netliferesearch/dibk-ansvarsrett.svg?token=7NpjNJdFW93Qs1rPvcce&branch=master)](https://travis-ci.com/netliferesearch/dibk-ansvarsrett)

The dibk-ansvarsrett project is a wizard that uses [losen](https://github.com/netliferesearch/losen).  
The documentation for losen can be found here https://dibk-storybook.firebaseapp.com/.  

## Development
You need to link [netliferesearch/losen](https://github.com/netliferesearch/losen) to run this project locally. Head over to you clone of that repo in the terminal and type `yarn link`.

Head back to this repo in you terminal and type `yarn link losen`.

Then run `yarn && yarn start` to run the development server.

## Testing
To run the tests you need to type the command `yarn test`.

The data for this wizard can be found in `src/api/ansvarsrett.json`.

## Deploy
The project is hosted on [`Firebase`](https://console.firebase.google.com/u/0/project/dibk-ansvarsrett/overview) :fire:. You need to be invited to it to be able to deploy.

To deploy you need the firebase tools.
Install it with the following command:

`yarn global add firebase-tools`

Follow the instructions for:
`firebase login`

To build the production bundle you run `yarn run build`.
Then you are ready to type `yarn deploy` :sparkles:

## Deploy to production

First you need access to the code. It is hosted at [DIBK Bitbucket](https://bitbucket.org/dibk/dibk-web).
The Javascript file that this project produces after `npm run build` in `/build/static/js/main.numbers.js` needs to be moved over to the DIBK-web project.
The path to where the file should live is  `DiBK.Presentation\modules\veivisere`.
Commit it to the branch `Veivisere` and let Creuna (Hege Seilen) know to deploy the new code.
The pictures and text changes are uploaded to Episerver

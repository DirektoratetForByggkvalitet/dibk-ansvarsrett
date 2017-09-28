# [dibk-ansvarsrett](https://dibk-ansvarsrett.firebaseapp.com/)

## Development

You need to link the netliferesearch/dibk-wizard-framework to run this project locally. Head over to you clone of that repo in the terminal and type `yarn link`.

Head back to this repo in you terminal and type `yarn link dibk-wizard-framework`.

Then run `yarn && yarn start` to run the development server.

## Deploy
The master branch is automagically deployed.
The project is hosted on [`Firebase`](https://console.firebase.google.com/u/0/project/dibk-ansvarsrett/overview) :fire:. You need to be invited to it to be able to deploy manually.

To deploy you need the firebase tools.
Install it with the following command:

`yarn global add firebase-tools`

Follow the instructions for:
`firebase login`

Then you are ready to type `yarn deploy` :sparkles:

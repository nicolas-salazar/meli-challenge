The <span style="color: #FFE600;">MELI</span> Challenge! [![App](https://img.shields.io/badge/~-Backend-red)]() [![By](https://img.shields.io/badge/By-Nicolás%20Salazar-%233483FA)](mailto:nicolas@ncodes.dev)
====================

What is this?
---------------------
* Backend application for my [techinical challenge](https://www.dropbox.com/sh/nbq7zvtqd2gb9ab/AABIy7kFj4BvLeNfbLib_Jcya?dl=0).
* Built with **express Js**.
* Exposes services for getting `search results` and `items by id`.
* Uses <span style="color: #FFE600;"><b>MELI</b></span> web services for getting real data.

The services ✨:
---------------------
- Fetch search results:
```bash
  GET /items?q=<your search goes here>
```
- Fetch item detail + description
```bash
  GET /items/<your cool item id goes here>
```
What's the logic behind?
---------------------
Exposes endpoints which takes input, fetch <span style="color: #FFE600;"><b>MELI</b></span> web services for getting data, processes the results and returns them in the way we want 🧐:
- The exposed endpoints lays on `src/api/routes`
- Main fetches lays on `src/services/items` and `src/services/search`
- After getting data, uses `parsers` for molding them as needed
- Uses custom validations
- Is backed by super cool and **reliable** unit tests [`.spec.js`]


Steps to setup the local environment:
---------------------
- Clone the repository:
```bash
  git clone https://github.com/nicolas-salazar/meli-challenge.git
```
- Go to the backend folder:
```bash
  cd meli-challenge/backend
```
- Go to the master branch:
```bash
  git checkout master
```
- Install all the needed composer packages:
```bash
  yarn install
```

How to run it?
---------------------
Open a terminal at this folder's location and execute:
```bash
  yarn start
```
Or
```bash
  npm start
```

Other usefull commands
---------------------
Thinking about my mental peace, build unit tests and integrated linter. May you'd like to check it:

- For running unit tests:
```bash
  yarn run test
```
- For running lint check:
```bash
  yarn run lint
```
Any questions/suggestions 🤔?
--------------------
* Feel free to send me a message to [nicolas@ncodes.dev](mailto:nicolas@ncodes.dev)
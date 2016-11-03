# [SD Elements - API v2 Documentation](https://api.sdelements.com)

[![Build Status](https://travis-ci.org/sdelements/slate.svg?branch=master)](https://travis-ci.org/sdelements/slate)

## Set Up

You'll need Node.js installed. Clone this repository and run the following command:

```shell
npm install
```

## Commands

Compile documentation to static site in `./build`:

```shell
npm run build
```

Run a dev server that live-reloads at http://localhost:4567:

```shell
npm start
```

## Deployment

Travis CI automatically builds and deploys the documentation, when any updates are pushed to master or a release branch.


## Writing Documentation

The content for our API docs are all located in the `source/includes` folder of this repo. You will likely create a new markdown file here, or extend an existing on to write your documentation. Be sure to update `changelog.md` also located in that folder whenever you make changes to the API documentation.

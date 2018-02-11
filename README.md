# [React][React] + [Jest][Jest] + [Enzyme][Enzyme]

??Find slides [here](http://kcd.im/testing-react)

This is a workshop for learning how to test [React][React] with the [Jest][Jest] testing framework and the
[Enzyme][Enzyme] testing library.

## Project Setup

This project assumes you have [NodeJS v8](http://nodejs.org/) or greater installed.

With that, run:

```
git@github.com:tryggvigy/react-jest-workshop.git
cd react-jest-workshop
yarn install
yarn test:final
```

## Testing Instructions

There are two directories in this project that you should be interested in:

- `exercises`: Where the unfinished tests are (where you should add your tests).
- `exercises-final`: Where the finished tests are (where you can reference if you get stuck).

The tests in `exercises` are actually all scaffolded for you. So your goal is to go through and write all the tests. Do this:

1. Run `yarn run watch:test` which will start running the tests in watch mode, meaning that as you save your file, it
will automatically re-run your tests so you can quickly see how you're doing.
2. Choose a file in the `exercises` directory that ends in `.test.js` and implement the tests one-by-one.

Good luck!

[React]: https://facebook.github.io/react/
[Jest]: http://facebook.github.io/jest/
[Enzyme]: http://airbnb.io/enzyme/

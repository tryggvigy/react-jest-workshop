# Instructions

If you'd like to follow along:

1. `$ git clone git@github.com:tryggvigy/react-jest-workshop.git`
2. `$ cd react-jest-workshop`
4. `$ npm run setup`

---

### Redux

You may be wondering, "how do I test components that use Redux?"
It's pretty much exactly how you doa normal `Props` input test because if
you're using `connect` from `react-redux` then you simply `export` the
component that you're wrapping in `connect` for testing purposes, and
just test that the same way you do other components with `Props` inputs.

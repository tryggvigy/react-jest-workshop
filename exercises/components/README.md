# Button

This demonstrates how you might test something that utilizes context.
It is unlikely you have very many places where you'll be doing this
(using context), however there are some cases where you'll do that.
This test uses a [snapshot][snapshot] to verify correct behaviour of the component.
Snapshots should be small and easily reviewable. More discussions about snapshots: https://ghe.spotify.net/web-platform/open/pull/2380#discussion_r435268

# Toggle

This demonstrates how to test for output and avoid testing implementation details.
One of the things you want to avoid in testing, be it unit, integration, whatever,
is testing *how* something works rather than simply that it accomplishes what it
needs to accomplish.

In this component, we want to test as much as we can by purely changing the props
used to initialize it. However, this component also responds to user interaction
to alter some of its state, so we'll work with simulating user-invoked events to
test how that interaction changes the output of our component as well as how it
interacts with the props that we pass it.


[snapshot]:(https://facebook.github.io/jest/docs/en/snapshot-testing.html)

# Dialog

Sometimes it's necessary to mock web api functions like document.addEventListener.
This test demonstrates how this can be done in a one-shot way. That is, mock
a particular function for only one test but keep the real behaviour for the
rest of the tests. This is useful for example to override console.log or console.error
for a particular test that you expect will console log.


# shallow vs. mount vs. render
```
==== Shallow ====

Real unit test (isolation, no children render)
Simple shallow

Calls:
constructor
render
Shallow + setProps

Calls:
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
Shallow + unmount

Calls:
componentWillUnmount

==== Mount ====

The only way to test componentDidMount and componentDidUpdate.
Full rendering including child components.
Requires a DOM (jsdom, domino).
More constly in execution time.
If react is included before JSDOM, it can require some tricks:

require('fbjs/lib/ExecutionEnvironment').canUseDOM = true;
Simple mount

Calls:
constructor
render
componentDidMount
Mount + setProps

Calls:
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
Mount + unmount

Calls:
componentWillUnmount

==== Render ====

only calls render but renders all children.


-------------------------------------------------------------
So my rule of thumbs is:

Always begin with shallow
If componentDidMount or componentDidUpdate should be tested, use mount
If you want to test component lifecycle and children behavior, use mount
If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render
If you want to test refs use mount or render.
There seems to be a very tiny use case for render.
I like it because it seems snappier than requiring jsdom but as @ljharb said, we cannot really test React internals with this.
```

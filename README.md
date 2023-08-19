# travel-tour-react

## Installation

You can install react-lite from npm:

```shell
npm install react-lite --save
```

## Browser compatibility

supports IE9+ / ES5 enviroment

## Documentation

learn react-lite from [React official documentation](https://reactjs.org)

## What can react-lite do?

just the same as what react does, see some demos below(I just add the alias to webpack.config.js, no need to do anything else):

- works with material-ui: [docs demo](https://lucifier129.github.io/material-ui/build)
- works with react-bootstrap: [docs demo](http://react-lite-with-bootstrap.herokuapp.com/)
- works with ant-design: [demo](http://lucifier129.github.io/ant-design/)
- works with react-router: [examples](http://react-lite-with-react-router.coding.io/)
- works with redux:
	* [async](http://lucifier129.github.io/redux-with-react-lite/async/index.html)
	* [counter](http://lucifier129.github.io/redux-with-react-lite/counter/index.html)
	* [shopping-cart](http://lucifier129.github.io/redux-with-react-lite/shopping-cart/index.html)
	* [todomvc](http://lucifier129.github.io/redux-with-react-lite/todomvc/index.html)
	* [todos-with-undo](http://lucifier129.github.io/redux-with-react-lite/todos-with-undo/index.html)
- works with react-motion: [demos](http://lucifier129.github.io/react-motion-with-react-lite/index.html)
- works with react-d3-components: [demos](http://lucifier129.github.io/react-d3-components-demos/)
- works with react-d3: [demos](http://lucifier129.github.io/react-d3-demos/)
- react-lite [vdom-benchmark](http://vdom-benchmark.github.io/vdom-benchmark/)
- js-repaint-perf:
	* [react](http://lucifier129.github.io/react-lite-repaint-perf/react/index.html)
	* [react-lite](http://lucifier129.github.io/react-lite-repaint-perf/react/lite.html)

## React-lite vs React

via react-lite:
- all of React.PropTypes method is no-op(empty function)
- use React in server side rendering, and use React-lite in browser
	* react-lite will replace the dom tree with new dom tree
	* you had better avoid `script|head|link` tag in client side
- can not use react-dev-tool inspect react-lite, should switch to regular react for debugging
- react-lite only works with a JSX toolchain([issue](https://github.com/Lucifier129/react-lite/issues/51))
- unlike react, `event` object in react-lite is always persistent, and `event.persist` is set as no-op to avoid throwing error.
- react-lite can't work with `react-tap-event-plugin`, please use `fastclick` instead. or add alias `'react-tap-event-plugin': 'react-lite/lib/react-tap-event-plugin'`, just like [here](https://github.com/Lucifier129/material-ui/blob/master/docs/webpack-production.config.js#L21)
- can't work with `transform-react-inline-elements`, you will get a bundle include both `react` and `react-lite`.
- `react-lite` just follow the best practice of `React`.

## Test
react-lite reuses react's unitest(170), you can see them in `__test__`, and run the tests with:

```shell
npm test
```

License: MIT (See LICENSE file for details)

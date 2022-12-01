/* global document */
import React, {Component} from 'react';
<<<<<<<< HEAD:examples/layer-browser/src/index.jsx
import ReactDOM from 'react-dom';
import App from './app';
========
import {render} from 'react-dom';
>>>>>>>> ca3441829 (feat: luma v9):examples/layer-browser/src/index.tsx

class Root extends Component {
  constructor(props) {
    super(props);
    this._appState = null;
  }

  _onAppStateChange(newState) {
    this._appState = newState;
  }

  render() {
    const {AppComponent} = this.props;

    return (
      <div>
        <AppComponent state={this._appState} onStateChange={this._onAppStateChange.bind(this)} />
      </div>
    );
  }
}

// ---- Main ---- //

const container = document.createElement('div');
document.body.appendChild(container);

<<<<<<<< HEAD:examples/layer-browser/src/index.jsx
const render = () => {
  ReactDOM.render(<Root AppComponent={App} />, container);
};

render();
========
import App from './app';

const renderDOM = () => {
  render(<Root AppComponent={App} />, container);
};

renderDOM();

// @ts-expect-error
if (globalThis.module?.hot) {
  // @ts-expect-error
  globalThis.module.hot.accept('./app', () => {
    console.log('Hot reloading App component'); // eslint-disable-line
    render();
  });
}
>>>>>>>> ca3441829 (feat: luma v9):examples/layer-browser/src/index.tsx

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../src/Store/store';
import FirstComponents from '../src/Components/firstComponents';
import Body from '../src/Components/bodyComponents';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <div>
            <FirstComponents/>
            <Body/>
          </div>
        </Provider>
      </React.Fragment>
    );
  }
}
export default App;
import React, { Component } from 'react';
import Pane from './components/Pane';
import PixelStorm from './components/PixelStorm';
import Ted from './components/Ted';
import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Pane>
          <PixelStorm />
          <Ted />
        </Pane>
      </div>
    );
  }
}

export default App;

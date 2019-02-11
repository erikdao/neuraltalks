import * as React from 'react';
import { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {mainContent: null};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome!</h1>
        </header>
      {this.state.mainContent? <this.state.mainContent /> : <button onClick={() => this.loadMainContent()}>Load main content</button>}
      </div>
    );
  }

  async loadMainContent() {
    const module = await import('./MainContent');
    this.setState({mainContent: module.MainContent});
  }
}

export default App;

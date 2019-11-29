import React, { Component } from 'react';
import Home from './screens/Home';
import Sidebar from './components/Sidebar';
import BarChart from './components/BarChart';
import network from './screens/Home/network.json';
import { sixteenPersonalityTypes } from './util/personality-algorithms';

const countPersonalities = (networkData) => {
  let array = sixteenPersonalityTypes().map(e => {
    let count = 0;
    networkData.nodes.forEach(f => {
      if (f.type === e.abbreviation) {
        ++count;
      }
    });
    return {...e, amount: count}
  })
  return array;
}

class App extends Component {
  render() {
    const personalityCount = countPersonalities(network);
    return (
      <div className="App">
        <Sidebar>
          <h1>The Personalities</h1>
          <BarChart data={personalityCount}/>
        </Sidebar>
        <Home/>
      </div>
    );
  }
}

export default App;

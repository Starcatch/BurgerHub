import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger'
import sampleBurgers from '../sample-burgers';

class App extends React.Component {
  state = {
    burgers: {},
    order: {}
  };

  addBurger = burger => {
    console.log('addBurger', burger);
    //1. Make a copy of the sate object
    const burgers = {...this.state.burgers};
    //2.Add a new burger to burgers varieable
    burgers[`burger ${Date.now()}`] = burger;
    //3. write our new object burgers into state
    this.setState({burgers})
  };

  loadSampleBurgers = () => {
    this.setState({burgers: sampleBurgers})
  }

  render() {
    return(
    <div className='burger-paradise'>
      <div className='menu'>
        <Header title="Hot Burgers" />
        <ul className='burgers'>

        </ul>
      </div>
      <Order/>
      <MenuAdmin addBurger={this.addBurger}
      loadSampleBurgers={this.loadSampleBurgers}
      />
    </div>
    );
  }
}

export default App; 
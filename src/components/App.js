import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';

class App extends React.Component {
  state = {
    burger: {},
    order: {}
  };

  addBurger = burger => {
    console.log('addBurger', burger);
  };

  render() {
    return(
    <div className='burger-paradise'>
      <div className='menu'>
        <Header title="Hot Burgers" />
        
      </div>
      <Order/>
      <MenuAdmin addBurger={this.addBurger}/>
    </div>
    );
  }
}

export default App; 
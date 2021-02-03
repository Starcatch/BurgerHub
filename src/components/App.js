import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger'
import sampleBurgers from '../sample-burgers';
import base from '../base';

class App extends React.Component {
  state = {
    burgers: {},
    order: {}
  };

  componentDidMount() {

    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.restaurantId);
    this.setState({order: JSON.parse(localStorageRef) });

    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: 'burgers'
    });
  }

  componentDidUpdate() {
   const { params } = this.props.match;
   localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addBurger = burger => {
    console.log('addBurger', burger);
    //1. Make a copy of the sate object
    const burgers = {...this.state.burgers};
    //2.Add a new burger to burgers varieable
    burgers[`burger ${Date.now()}`] = burger;
    //3. write our new object burgers into state
    this.setState({burgers})
  };

  updateBurger = (key, updatedBurger) => {
    //1.create a copy of a state object
    const burgers = {...this.state.burgers };
    //2. Updating the current burger
    burgers[key] = updatedBurger;
    //3. add updeted object burgers to state
    this.setState({ burgers });
  };

  deleteBurger = (key) => {
    // 1. create a copy of State Object
    const burgers = { ...this.state.burgers };
    // 2. Deleting the burger
   burgers[key] = null;
   // 3. add our updated burger object to state
   this.setState({ burgers });
  };


  loadSampleBurgers = () => {
    this.setState({burgers: sampleBurgers})
  };

  addToOrder = (key) => {
    // 1. Create a copy of a state object
    const order = {...this.state.order}
    // 2. Add a key to the order with the value of 1, or update a current value.
    order[key] = order[key] + 1 || 1;
    // 3. write our new object -order into state
    this.setState({ order });
  };

  deleteFromOrder = (key) => {
    // 1. Create a cope of the state object
    const order = { ...this.state.order };
    // 2. Delete the burger
    delete order[key];
    // 3. Add new object order to state 
    this.setState({ order });
  }

  render() {
    return(
    <div className='burger-paradise'>
      <div className='menu'>
        <Header title="Hot Burgers" />
        <ul className='burgers'>
          {Object.keys(this.state.burgers).map(key => {
            return (<Burger 
            key={key}
            index={key}
            addToOrder={this.addToOrder}
            details={this.state.burgers[key]}
            />
            );
          })}
        </ul>
      </div>
      <Order 
        deleteFromOrder={this.deleteFromOrder}
        burgers={this.state.burgers} 
        order={this.state.order}
      />
      <MenuAdmin 
      addBurger={this.addBurger}
      loadSampleBurgers={this.loadSampleBurgers}
      burgers={this.state.burgers}
      updateBurger={this.updateBurger}
      deleteBurger={this.deleteBurger}
      />
    </div>
    );
  }
}

export default App; 
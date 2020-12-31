import React from 'react';
import AddBurgerForm from './AddBurgerForm';

class MenuAdmin extends React.Component {
  render() {
    return (
    <div className='order-wrap'>
    <h2>Menu Control</h2>
    <AddBurgerForm addBurger={this.props.addBurger}/>
    </div>
    );
  }
}

export default MenuAdmin;
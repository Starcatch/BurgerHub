import React from 'react';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerFrom from './EditBurgerForm';
import EditBurgerForm from './EditBurgerForm';
class MenuAdmin extends React.Component {
  render() {
    return (
    <div className='order-wrap'>
    <h2>Menu Control</h2>
    {Object.keys(this.props.burgers).map(key => {
      return <EditBurgerFrom burger={this.props.burgers[key]}/>;
    })}

    <AddBurgerForm addBurger={this.props.addBurger}/>
    <button onClick={this.props.loadSampleBurgers}>
      Load Burgers
    </button>
    </div>
    );
  }
}

export default MenuAdmin;
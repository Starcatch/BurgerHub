import React from 'react';
import Shipment from './Shipment'


class Order extends React.Component {

  renderOrder = (key) => {

    const burger = this.props.burgers[key];
    const count = this.props.order[key];
    const isAvailable = burger && burger.status === 'available';
    if (!isAvailable) {
      return (
      <li className='unavailable' key={key}>
        Sorry, {burger ? burger.name : 'burger'} temrerary sold out
      </li>
      );
    }

    return (
      <li key={key}>
      <span>
        <span>{count}</span>
        items: {burger.name}
        <span> $ {count * burger.price} </span>
        <button className='cancelItem'>&times;</button>
      </span>
    </li>
    );
     
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) =>{
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status === 'available';
      if (isAvailable) {
        // if our burger is available then we show it in total price of the order
          return prevTotal + burger.price * count;
      }
      // if the burger is not available we just return a price with out adding the burger to our total price.
      return prevTotal 
    }, 0);

    return(
      <div className='order-wrap'>
        <h2>Your Order</h2>
        <ul className='order'>{orderIds.map(this.renderOrder)}</ul>

      {total > 0 ? (
        <Shipment total={total} />)
        : (
          <div className='nothingSelected'>
            Choose an item and add it to your order
          </div>
      )}
      </div>
    );
  }
}

export default Order; 
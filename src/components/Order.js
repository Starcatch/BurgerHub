import React from 'react';


class Order extends React.Component {
  render() {
    const orderIds = Order.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) =>{
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

    }, 0)

    return(
      <div className='order-wrap'>
        <h2>Your Order</h2>
        <ul className='order'>{orderIds.map(key =>  {
          return <li>{key}</li>

        })}</ul>
      </div>
    );
  }
}

export default Order; 
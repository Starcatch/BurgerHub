import React from 'react'

class Shipment extends React.Component {
  render() {
    const { total } = this.props;
    const shipping = total > 0 && total < 30 ? 10 : 3;
    const shippingNeon = shipping === 3 ? (
      <span className= 'font-effect-neon total_wrap-cheap'> $ {shipping} </span>
    ) : (
      <span>$ {shipping}</span>
    );

    return (
      <div className= 'total'>
        <div className='total_wrap'>
          <div>Delivery: {total > 0 ? shippingNeon : null} </div>
          <div className='total_wrap-free'>
            {total < 30 ? `Order more to get a discount on delivery ${30-total}` : null}
          </div>
          <div className='total_wrap-final'>Total: $ {total}</div>
        </div>
      </div>
    );
  }
}

export default Shipment
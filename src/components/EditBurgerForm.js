import React from 'react'

class EditBurgerForm extends React.Component {

  handleChange = event => {

    const updatedBurger = {
      ...this.props.burger,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateBurger(this.props.index, updatedBurger);
  };

  render() {
    return (
      <div className='burger-edit'>
        <input onChange={this.handleChange} name ='name' type='text' value={this.props.burger.name}/>
        <input onChange={this.handleChange} name ='price' type='text'value={this.props.burger.price}/>
        <select onChange={this.handleChange} name ='status' className='status'>
          <option value='available'>Available!</option>
          <option value='unavailable'>Not Available!</option>
        </select>
        <textarea onChange={this.handleChange} name='desc' value={this.props.burger.desc}/>
        <input 
          onChange={this.handleChange} 
          name ='image' 
          type='text' 
          value={this.props.burger.image} 
        /> 
        <button onClick={() => this.props.deleteBurger(this.props.index)}>    Delete from the menu
        </button>
      </div>
    );
  }
}

export default EditBurgerForm;
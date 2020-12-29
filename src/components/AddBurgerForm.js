import React from 'react'

class AddBurgerForm extends React.Component {
    
  createBurger = (event) => {
    event.preventDefault();
    console.log('add a burger!!!');
  };

  render() {
    return (
     <form className='burger-edit' onSubmit={this.createBurger}>
       <input name='name' type='text' placeholder='Name' autoComplete='off'/>
       <input
       name='price'
       type='text'
       placeholder='Price'
       autoComplete='off'
       />
       <select name='status' className='status'>
         <option value='available'>We have it </option>
         <option value='unavlable'>Take it off menu</option>
       </select>
       <textarea name='desc' placeholder='Desc'/>
       <input 
       name='image' 
       type='text' 
       placeholder='Image' 
       autoComplete='off'
       />
     </form>
    );
  }
}

export default AddBurgerForm;
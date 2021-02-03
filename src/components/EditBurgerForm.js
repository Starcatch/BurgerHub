import React from 'react'

class EditBurgerFrom extends React.Component {
  render() {
    return (
      <div className='burger-edit'>
        <input name ='name' type='text'/>
        <input name ='price' type='text'/>
        <select name ='status' className='status'>
          <option value='available'>Available!</option>
          <option value='unavailable'>Not Available!</option>
        </select>
        <textarea name='desc'/>
        <input name ='image' type='text'/>
        
      </div>
    );
  }
}

export default EditBurgerFrom;
import React, {Component} from 'react'

export default class TodoInput extends Component {
  render() {

    const {item, handleChange, handleSubmit, editItem} = this.props
    return (
         <div className='card card-body mt-3'>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text bg-primary text-white'>
                         <i className='fas fa-book' />
                        </div>
                    </div>
                    <input type='text' className='form-control text-capitzlize' 
                    placeholder='Enter Todo Items' value={item} onChange={handleChange}/>

                </div>

                <div className='list-group my-5'>

                    <button type='submit' className={editItem? 'btn btn-sm btn-block btn-success mt-3' 
                    :'btn btn-sm btn-block btn-primary'}>
                       {editItem? 'Edit Item' :'Add item Gusto~'}
                    </button>

                </div>


         </form>
         </div>
    );
  };
}

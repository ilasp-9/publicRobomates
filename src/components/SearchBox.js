import React from 'react';



const SearxhBox = ({searchField ,searchChange}) => {
    return (
        <div className = 'pa2'>
            <input className='pa3 ba b--green bg-lightest-blue tc' 
            type ="search" 
            placeholder = "---search here---!"
            onChange = {searchChange} />
        </div>
    );
}

export default SearxhBox;
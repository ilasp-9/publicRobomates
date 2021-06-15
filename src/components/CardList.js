import React from 'react';
import Card from './Card'

const CardList = ({robots}) =>  // you can pass props
{
    // creating var
    // you can use foreach also instead of map()
    const cardComponent = robots.map((user,i) => {
        return (<Card key={i} id = {robots[i].id}  name = {robots[i].name} email = {robots[i].email }/> );
    })

    // you can get this.props.robots[0].id; 
    return (
        <div>      
            {cardComponent}    
         </div>

    );
}

export default CardList;
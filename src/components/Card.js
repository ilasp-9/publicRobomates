import React from 'react';


const Card = (props) =>{
     return (
         <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
             <img src ={`https://robohash.org/${props.id}`} height= '200' width='200' alt ='Robots'/>
             <div className = 'tc'>
                 <h2>{props.name}</h2>
                 <p>{props.email}</p>
             </div>
         </div>
     );
}

export default Card;
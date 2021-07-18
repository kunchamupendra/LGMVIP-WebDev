import React from 'react';
import './App.css';
const Card = ({ user_name , id, user_email}) => {
    return(

        
        <div style={{width: '350px', height:'570px',display:'inline-block',border: '10px',backgroundColor:'palevioletred',marginLeft: '50px',marginBottom: '50px;'}} className="grid-item">
            <img src={`https://reqres.in/img/faces/${id}-image.jpg`} width="100%"/>

            <div className="user_disp">
                <br />
                <h2>{user_name}</h2>
                
                <h4 style={{marginLeft:'-25px'}}>{user_email}</h4>
                <p>A member in lets grow more</p>
                <button class="card-btn">
              View Profile <span>&rarr;</span>
            </button>
            </div>
            <br /> <br /> 
        </div>
        
    );
}

export default Card;
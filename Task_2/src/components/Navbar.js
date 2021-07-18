import React from 'react';
import Button  from '@material-ui/core/Button';
import './App.css';

var more={

}
const Nav = ({onButtonSubmit}) => {
    return(
    <nav className="navbar">
        <h2 className="logo">Let's GrowMore</h2>
        <div className="inside-nav">
            <button onClick={onButtonSubmit}  className="btn btn-outline-info btn-lg">
               
               view Users
                </button>
        </div>
    </nav>
    );
}

export default Nav;
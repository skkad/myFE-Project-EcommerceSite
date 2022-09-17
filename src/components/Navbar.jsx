import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import handleCart from '../redux/reducer/handleCart';

const Navbar = ()=>{
    const state = useSelector((state)=> state.handleCart)
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to='/'>Unick</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label='Toggle navigation'>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        
                    <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item active"><NavLink className="nav-link" to='/'>Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to='/product'>Product</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to='/about'>About</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to='/contact'>Contact</NavLink></li>                            
                        </ul>
                        <div className="buttons">
                            <NavLink className="btn btn-outline-dark" to='/login'><i className="fa fa-sign-in me-1"></i>Login</NavLink>
                            <NavLink className="btn btn-outline-dark ms-2" to='/register'><i className="fa fa-user-plus me-1"></i>Register</NavLink>
                            <NavLink className="btn btn-outline-dark ms-2" to='/cart'><i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>

    );


}

export default Navbar;
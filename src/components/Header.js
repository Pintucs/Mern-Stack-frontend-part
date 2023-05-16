import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import AddToCardIcon from './AddToCardIcon';

const Header = (props) => {
    const auth = localStorage.getItem("Registered Data")
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <>
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to="/">Blue-Stack My Shoping Page</Link>
                    <Button className='navbar-toggler' data-toggle="collapse" data-target="#mydiv">
                        <span className='navbar-toggler-icon'></span>
                    </Button>
                </div>
                <div className='collapse navbar-collapse' id="mydiv">
                    <ul className='navbar-nav'>
                        <li className='navbar-text'><Link to="/addproduct" className='nav-link'>Add_Product</Link></li>
                        <li className='navbar-text'><Link to="/productlist" className='nav-link'>Product_List</Link></li>
                        <li className='navbar-text'><Link to="/AddToCard" className='nav-link'><AddToCardIcon /></Link></li>
                        {auth ? <>
                            <li className='navbar-text'><Link to="/" className='nav-link' onClick={logOut}>Logout({JSON.parse(auth).fname})</Link></li>

                        </>
                            : <>
                                <li className='navbar-text'><Link to="/login" className='nav-link' >Login</Link></li>
                                <li className='navbar-text'><Link to="/signup" className='nav-link' >SignUp</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default Header
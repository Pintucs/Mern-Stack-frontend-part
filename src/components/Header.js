import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {
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
                    <Link className='navbar-brand'>Blue-Stack My Shoping Page</Link>
                    <Button className='navbar-toggler' data-toggle="collapse" data-target="#mydiv">
                        <span className='navbar-toggler-icon'></span>
                    </Button>
                </div>
                <div className='collapse navbar-collapse' id="mydiv">
                    <ul className='navbar-nav'>
                        <li className='navbar-text'><Link to="/" className='nav-link active'>Home</Link></li>
                        <li className='navbar-text'><Link to="/about" className='nav-link'>About</Link></li>
                        <li className='navbar-text'><Link to="/history" className='nav-link'>History</Link></li>
                        <li className='navbar-text'><Link to="/AddToCard" className='nav-link'><AddShoppingCartIcon /></Link></li>
                        {auth ? <li className='navbar-text'><Link to="/" className='nav-link' onClick={logOut}>Log_Out</Link></li>
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
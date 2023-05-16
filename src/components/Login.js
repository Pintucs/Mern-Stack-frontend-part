import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import HomeImage from './HomeImage'
import Header from './Header'

// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const loginData = async () => {
        let getData = await fetch("http://localhost:5000/login", {
            method: "post",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ email, password, })
        })
        let add = await getData.json()
        console.warn(add)
        if (add.fname) {
            localStorage.setItem("Registered Data", JSON.stringify(add))
            navigate("/")
        } else {
            alert("please enter currect email or password")
            navigate("/login")
        }
    }
    useEffect(() => {
        const auth = localStorage.getItem("Registered Data")
        if (auth) {
            navigate("/")
        }
    })

    return (
        <>
            <Header />

            <div className="img-fluid">
                <div className='container'>
                    <div className='row'>
                        <div className='col'><HomeImage /></div>
                        <div className='col'>
                            <div className="form-outline d-grid gap-1 ">
                                <h1 className='text-center' style={{ padding: "30px" }} >Login into  your account</h1>
                                <input type="user" placeholder="alex@email.com" id="form12" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <br />

                            <div className="form-outline">
                                <input type="password" placeholder="Password" id="form12" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
                                <Link to="/forget" style={{ float: "right", textDecoration: "none", color: "darkblue", padding: "10px" }} >forgat password</Link>
                            </div>
                            <br />
                            <div>
                                <Link to="/"><Button onClick={loginData} className='bg-dark col-12'>LOGIN</Button></Link><br /><br />
                                <Link to="/signup"><Button className='bg-dark col-12'>SIGN UP HERE</Button></Link><br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
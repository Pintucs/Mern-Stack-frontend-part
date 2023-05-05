import React from 'react'
import b from "../image/b.jpg"
import { Link } from 'react-router-dom'
const Card = () => {

    return (
        <>
            <div className='card' >
            <img src={b} alt="a" className="card-img-top"/>
                <div className="card-body text-center">
                    <h5 className='card-title'>Plain White Shirt</h5>
                    <Link to="/carddetails" className="btn btn-danger">Prize $29.00</Link>
                </div>
            </div>
        </>

    )
}

export default Card
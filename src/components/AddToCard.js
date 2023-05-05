import React from 'react'
import b from "../image/b.jpg"
const AddToCard=()=>{

    return(
        <>
       <div className='card' >
        <img src={b} alt="b" style={{height:"50px",width:"30px"}} />
        <div className="container">
        <button><p>Plain White Shirt <br/ ></p>
        <p>$29.00</p>
        </button>
        </div> 
        </div>

        </>
        
    )
}

export default AddToCard
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from './Header'

const AddToCard = () => {
  const [product, setProduct] = useState([])
  useEffect(()=>{
    getData()
  })


  const getData = async (id) => {
    const result = await fetch(`http://localhost:5000/products${id}`);
    const show = await result.json()
    setProduct(show)
  }

  return (
    <>
    <Header />
      <div className='row' style={{ marginLeft: "auto", marginRight: "auto", width: "50%" }}>
        <div className='col'>Name</div>
        <div className='col'>prize</div>
        <div className='col'>counter</div>
        <div className='col'><Button>Oparetion</Button></div>
      </div>
      {product.map((v,index)=>
      
      <div className='row' style={{ marginLeft: "auto", marginRight: "auto", width: "50%" }} key={index}>
          <div className='col'>{v.name}</div>
          <div className='col'>{v.prize}</div>
          <div className='col'>{v.lenght}</div>
          <div className='col'><Button>delete</Button></div>
        </div>
      
      )
        
      }

    </>
  )
}

export default AddToCard
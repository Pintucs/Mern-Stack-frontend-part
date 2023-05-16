import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { TableCell } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Header from "./Header"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const result = await fetch("http://localhost:5000/products");
    const show = await result.json()
    setProduct(show)
  }

  const table = { width: "60%", textAlign: "center", backgroundColor: "ButtonFace", marginLeft: "auto", marginRight: "auto" }
  const head = { backgroundColor: "green" }

  const deleteData = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "delete"
    })
    const ids = await result.json()
    if (ids) {
      getData()
    }
  }

  const searchHandle = async (e) => {
    let key = e.target.value
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`)
      result = await result.json()
      if (result) {
        setProduct(result)
      }
    }
    else {
      getData()
    }
  }

  return (

    <>
      <Header />
      <div className="form-outline d-grid gap-1" style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <input type="text" onChange={searchHandle} placeholder="Search here" name="name" className="form-control m-2" />
      </div>
      <Table style={table}>
        <TableHead style={head}>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Prize</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">oparetion1</TableCell>
            <TableCell align="right">oparetion2</TableCell>
            <TableCell align="right">oparetion3</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {product.length > 0 ? product.map((v, index) => (
            <TableRow key={index}>
              <TableCell>
                {index + 1}
              </TableCell>
              <TableCell align='right'>{v.name}</TableCell>
              <TableCell align="right">{v.model}</TableCell>
              <TableCell align="right">{v.prize}</TableCell>
              <TableCell align="right">{v.company}</TableCell>
              <TableCell align="right"><Button onClick={() => deleteData(v._id)} className='btn btn-danger' >Delete</Button> </TableCell>
              <TableCell align="right"><Link to={"/updateproduct/" + v._id}><Button className='btn btn-danger' >Update</Button></Link></TableCell>
              <TableCell align="right"><Link to={"/"}><Button className='btn btn-Primary'>Add TO Card</Button></Link></TableCell>
            </TableRow>
          ))
          :<h1>No Result Found</h1>
        }
        </TableBody>
      </Table>
    </>
  )
}

export default ProductList
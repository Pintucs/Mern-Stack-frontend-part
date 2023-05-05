import React from 'react'
import Header from './Header'
import Card from './Card'
import { Button } from 'react-bootstrap'
import Imageslide from './Imageslide'

const Main = () => {

    return (
        <>
            <Header />
            <h1 className='text-center'>Welcome to the page</h1>
            {/* <div className='container-fluid'> */}
            <Imageslide />
            <Button>SHOP NOW</Button>
            {/* </div> */}
            <h1 className='text-center'>Discover NEW Arrivals</h1>
            <div className='container '>
                <div className='row'>
                    <div className='col-2'><Card /></div>
                    <div className='col-2'><Card /></div>
                    <div className='col-2'><Card /></div>
                    <div className='col-2'><Card /></div>
                    <div className='col-2'><Card /></div>
                    <div className='col-2'><Card /></div>
                </div>
            </div>
        </>

    )
}

export default Main
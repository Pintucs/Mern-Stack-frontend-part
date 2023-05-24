import React from 'react'
import Header from './Header'
import Card from './Card'
import { Button } from 'react-bootstrap'
import Imageslide from './Imageslide'

const Main = () => {


    return (
        <>
            <Header />
            <h1 className='text-center'>Discover NEW Arrivals</h1>
            <div className='container '>
                <div className='col'><Card /></div>
                <Button>SHOP NOW</Button>
                <Imageslide />
            </div>

        </>

    )
}

export default Main
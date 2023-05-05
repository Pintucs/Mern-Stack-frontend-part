import React from 'react'
import { Carousel, Col, Container, Row} from 'react-bootstrap'

const Imageslide = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <Carousel fade>
                        <Carousel.Item interval={500} >
                            <img src="image/a.jpg" className='d-block w-100'/>
                        </Carousel.Item> 
                        <Carousel.Item interval={500}>
                            <img src="image/b.jpg" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src="image/c.jpg" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src="image/d.jpg" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src="image/e.jpg" className='d-block w-100'/>
                        </Carousel.Item>
                    </Carousel>
                    </Col>

                </Row>
                </Container>
        </>

    )
}

export default Imageslide
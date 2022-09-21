import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import image1 from '../image/Carousel-1.jpg';
import NumberCrat from './NumberCart';
function GridExample() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Row xs={2} md={3} lg={4} xl={5} className="g-1 g-sm-2 g-md-4 mx-md-4 m-2">
            {Array.from({ length: products.length }).map((_, idx) => (
                <Col key={"card-" + products[idx].id}>
                    <Card >
                        <Card.Img variant="top" src={products[idx].image} />
                        <Card.Body>
                            <Card.Title>
                                {
                                    products[idx].description.length > 30 ? products[idx].title.substr(0, 27) + '...' : products[idx].title
                                }
                            </Card.Title>
                            <Card.Text>
                                <p className='d-sm-block d-none'>{products[idx].description.length > 130 ? products[idx].description.substr(0, 99) + '...' : products[idx].description}</p>
                                <div className='d-flex justify-content-between align-items-center gap-2'>
                                    <span className='fw-bold price fs-5 fs-md-2'><small className='fs-6'>$</small>{products[idx].price}</span>
                                    <NumberCrat />
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default GridExample;
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Search from './Search';

function PillsExample() {
    const [cato,setCato] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>setCato(data))
    },[])
    console.log(cato)
    return (
        <>
            <h2 className='fs-2 ms-3'>Products</h2>
            <div className='d-flex justify-content-between container-fluid container-lg flex-column-reverse flex-md-row gap-3 mb-3'>
                <Nav variant="pills" defaultActiveKey="/all" className='navScroll'>
                    <Nav.Item>
                        <Nav.Link eventKey="/all"  >All</Nav.Link>
                    </Nav.Item>
                    {Array.from({ length: cato.length }).map((_,idx) =>{
                        return (
                            <Nav.Item key={'cato-' + idx}>
                                <Nav.Link eventKey={"link-" + idx}>{cato[idx]}</Nav.Link>
                            </Nav.Item>
                        )
                    } )}
                    {/* <Nav.Item>
                        <Nav.Link href="/home">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Option 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Option 4</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">Option 5</Nav.Link>
                    </Nav.Item> */}
                </Nav>
                <Search/>
            </div>
        </>
    );
}

export default PillsExample;
import Carousel from 'react-bootstrap/Carousel';
import Carouselimg1 from '../image/Carousel-1.jpg'
import Carouselimg2 from '../image/Carousel-2.jpg'
import Carouselimg3 from '../image/Carousel-3.jpg'
function IndividualIntervalsExample() {
    return (
        <Carousel className='container mb-4'>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={Carouselimg1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={Carouselimg2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carouselimg3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;
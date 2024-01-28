import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function HomePage(){
    return (           
        <Container>
            <h1>Let's get Gear'd Up!</h1>
            <p> Streamlining the process of finding the nearest bike station, bike availability, distance between stations,
                and potential cost of a ride. </p>
            <Row className = "px-4 my-5">
                <Col xs = {30} sm = {30}>
                    <Image 
                        src = "/img/pic2.png"
                        width = "300"
                        height = "300"
                        fluid />
                </Col>
            </Row>
            <Row className = "px-4 my-5">
                <Col xs = {30} sm = {30}>
                    <Image 
                        src = "/img/pic3.png"
                        width = "300"
                        height = "300"
                        fluid />
                </Col>
            </Row>
            <Row className = "px-4 my-5">
                <Col xs = {30} sm = {30}>
                    <Image 
                        src = "/img/pic4.png"
                        width = "300"
                        height = "300"
                        fluid />
                </Col>
            </Row>
            <Row className = "px-4 my-5">
                <Col xs = {30} sm = {30}>
                    <Image 
                        src = "/img/pic5.png"
                        width = "300"
                        height = "300"
                        fluid />
                </Col>
            </Row>
            
        <p>
        This is the link to the fimga <a href="https://www.figma.com/file/cMdUlafqE5BmuoPQ3OuE8r/BikeMaps?type=design&node-id=19%3A5&mode=dev" target="_blank" rel="noopener noreferrer">website</a>.
        </p>
        </Container>
        
    )

}

export default HomePage;
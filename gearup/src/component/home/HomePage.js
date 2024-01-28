import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage(){
    return (           
        <Container>
            <Row className = "px-4 my-5">
                <Col xs = {4} sm = {6}>
                    <Image
                        src="/img/pic1.png"
                        width = "300"
                        height = "300"
                        fluid />
                </Col>
            </Row>
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
            
        <p>
        This is the link to the fimga <a href="https://www.figma.com/file/cMdUlafqE5BmuoPQ3OuE8r/BikeMaps?type=design&node-id=19%3A5&mode=dev" target="_blank" rel="noopener noreferrer">website</a>.
        </p>
        </Container>
        
    )

}

export default HomePage;
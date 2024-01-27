import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav() {


    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Nav.Link href="/">Gear'd Up!</Nav.Link></Navbar.Brand>
                        <Col xs={1} sm={(4/3)}>
                            <Image
                                src="/img/logo - Copy.png"
                                fluid />
                        </Col>
                </Container>
            </Navbar>
        </header>
    )
}

export default SiteNav;
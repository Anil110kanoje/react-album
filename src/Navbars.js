import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Navbar
function Navbars() {

    return (
        <Navbar className=" p-3 bg-danger" >
            <Container>
                <Link to="/" className='text-white text-decoration-none'>Home</Link>
                <Nav className="me-auto">
                <Link to="/newalbum" className='ps-5 text-white text-decoration-none'> +Add Album</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navbars;



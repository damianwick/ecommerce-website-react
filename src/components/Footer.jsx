import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
    return (
        <Container fluid style={{height: 200}} 
            className='
                mt-3
                d-flex 
                flex-column 
                justify-content-center 
                cyan
                text-light
            '>
            <Row>
                <Col className='text-center'>
                    <p>Project by <strong>Damian Wiecek</strong></p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col className='
                    text-center 
                    fs-3  
                    justify-content-between 
                    d-flex
                '
                style={{maxWidth: "100px"}}
                >
                    <a 
                        href="https://github.com/damianwick"   
                        target='_blank' 
                        type='button' 
                        className='text-light'
                    >
                        <AiFillGithub className='footer-link' />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/damianwiecek/" 
                        target='_blank' 
                        type='button' 
                        className='text-light'
                    >
                        <AiFillLinkedin className='footer-link'/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
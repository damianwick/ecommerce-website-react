import { useState } from 'react'
import { Dropdown, Container } from 'react-bootstrap'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Filters = () => {
    const [stars, setStars] = useState([4, 3, 2, 1])    
    return (
        <Container className='d-flex'>
            <Dropdown className='me-2'>
                    <Dropdown.Toggle variant='outline-secondary' className='rounded-pill'>Price</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Low to High</Dropdown.Item>
                    <Dropdown.Item>High to Low</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                    <Dropdown.Toggle variant='outline-secondary' className='rounded-pill'>Rating</Dropdown.Toggle>
                <Dropdown.Menu>
                        {stars.map((s) => (
                              <Dropdown.Item>
                                {[...Array(s)].map(() => <AiFillStar /> )}
                                {[...Array(5 - s)].map(() => <AiOutlineStar /> )}
                                <span> & up</span>
                             </Dropdown.Item>)
                        )}
                </Dropdown.Menu>
            </Dropdown>
        </Container>

    )
}

export default Filters
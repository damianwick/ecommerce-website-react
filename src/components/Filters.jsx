import { useState } from 'react'
import { Dropdown, Container, CloseButton, Button } from 'react-bootstrap'
import { AiFillStar, AiOutlineStar, AiFillHeart } from 'react-icons/ai'
import { ShopState } from '../context/Context'

const Filters = () => {
    const [stars, setStars] = useState([4, 3, 2, 1])
    const { productFilterDispatch, productFilter } = ShopState();    
    return (
        <Container className='d-flex align-items-center'>
            <Dropdown className='me-2'>
                    <Dropdown.Toggle variant='outline-secondary' className='rounded-pill'>Price</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {
                        productFilterDispatch(
                            {type: "SORT_BY_PRICE", payload: "low-to-high"}
                        )}}>
                            Low to High
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        productFilterDispatch(
                            {type: "SORT_BY_PRICE", payload: "high-to-low"}
                        )}}>
                            High to Low
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='me-2'>
                    <Dropdown.Toggle variant='outline-secondary' className='rounded-pill'>Rating</Dropdown.Toggle>
                <Dropdown.Menu>
                        {stars.map((s) => (
                              <Dropdown.Item onClick={() => {
                                productFilterDispatch({type: "SORT_BY_RATING", payload: s})
                                }}>
                                {[...Array(s)].map(() => <AiFillStar /> )}
                                {[...Array(5 - s)].map(() => <AiOutlineStar /> )}
                                <span> & up</span>
                             </Dropdown.Item>)
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Button className='rounded-pill' variant='outline-secondary'>Saved <AiFillHeart className='fs-4' /></Button>
            <CloseButton className="ms-1" onClick={() => {
                productFilterDispatch({type: "CLEAR_FILTERS"})
                }}/>
        </Container>

    )
}

export default Filters
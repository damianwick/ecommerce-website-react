import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rating }) => {
const { rate, count } = rating

    return <>   
        {
            [...Array(5)].map((_, i) => (
                    <span key={i}>
                        {Math.round(rate) > i ? (
                            <AiFillStar className='text-warning'/>
                        ) : (
                            <AiOutlineStar className='text-warning'/>
                        )}
                    </span>
            ))                
        }       
            <span className='rating-count'> ({count})</span>
        </>
}

export default Rating
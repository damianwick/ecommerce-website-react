import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { ShopState } from "../context/Context"

const HeartBtn = ({prod, style}) => {
    const {
        stock: {saved},
        shopStateDispatch
    } = ShopState()
    return (
        <>
            {saved.some(p => p.id === prod.id) ? (
                <span   
                className='
                    btn 
                    shadow-sm
                    rounded-pill 
                    btn-light 
                    d-flex 
                    justify-content-center 
                    align-items-center
                    fs-4' 
                style={
                    {height: 40, width: 40, ...style}
                }
                onClick={() => {
                    shopStateDispatch({type: 'REMOVE_FROM_SAVED', payload: prod.id})
                }}
                >
                    {saved.some((p) => p.id === prod.id) ? (
                        <AiFillHeart />
                    ) : (
                        <AiOutlineHeart />
                    )}   
            </span>
            ) : (
                <span   
                className='
                    btn 
                    shadow-sm
                    rounded-pill 
                    btn-light 
                    d-flex 
                    justify-content-center 
                    align-items-center
                    fs-4' 
                style={
                    {height: 40, width: 40, ...style}
                }
                onClick={() => {
                    shopStateDispatch({type: 'ADD_TO_SAVED', payload: prod})
                }}
                >
                    {saved.some((p) => p.id === prod.id) ? (
                        <AiFillHeart />
                    ) : (
                        <AiOutlineHeart />
                    )}
            </span>
            )}
    </>
    )
}

export default HeartBtn
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { addQuantiy, removecart } from '../app/feature/cart/CartSlice';
const Cartproduct = ({ cartdata}) => {
    const {name,price,img,_id}=cartdata
    const dispatch=useDispatch()
    return (
        <div className='bg-white p-5 rounded-xl shadow-lg flex justify-between items-center'>
            <div>
                <img className='w-14 h-14 object-cover' src={img} alt="" />
            </div>
            <div className='text-left w-1/2'>
            <p>{name}</p>
             <p>price :{price}</p>
            </div>
            <div className='flex items-center justify-between text-1xs'>
               <button onClick={()=>dispatch(addQuantiy({_id,operation:'add'}))}   className='me-1'>
               <FaPlus></FaPlus>
               </button>
                <span>{cartdata.quantity}</span>
                <button onClick={()=>dispatch(addQuantiy({_id,operation:'minus'}))}  className='ms-2'><FaMinus></FaMinus></button>
            </div>
            <div className='font-semibold '>
                Total Price:<span>{price*cartdata.quantity}</span>
            </div>
            <button onClick={()=>dispatch(removecart(_id))}>
                <FaTrashAlt></FaTrashAlt>
            </button>
        </div>
    );
};

export default Cartproduct;
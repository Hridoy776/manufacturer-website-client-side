
import { useNavigate } from 'react-router-dom';

const Tools = ({ tool }) => {
    const { _id, name, img, price, minQuantity, inStock, description } = tool;
    const navigate = useNavigate()
    const handleParchase = () => {
        navigate(`/parchase/${_id}`)
    }

    return (
        <div  className="card max-w-lg bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10 ">
                <img  src={img} alt="Shoes" className="rounded-xl h-[200px]" />
            </figure>
            <div className="p-5  ">
                <h2 className="card-title uppercase text-xl">{name}</h2>
                <p className='text-xl font-medium my-2'>$<span className='text-secondary'>{price}</span> per piece</p>
                <div className='flex justify-between'>
                <p className='text-xl mb-2'>quantity:{inStock}</p>
                <p className='text-xl mb-2'>mimimum order :{minQuantity}</p>
                </div>
                
                <div className="card-actions">
                    <button onClick={handleParchase} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;
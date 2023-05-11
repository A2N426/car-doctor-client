import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Service" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-lg text-red-600 font-semibold">Price: ${price}</p>
                <div className='flex justify-between items-center'>
                    <Link to={`/book/${_id}`}>
                        <button className="bg-red-600 px-6 py-3 rounded-lg text-white font-semibold">Book Now</button>
                    </Link>
                    <button>
                        <FaArrowRight className='text-red-600 text-xl' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
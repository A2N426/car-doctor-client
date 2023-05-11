import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const Book = () => {
    const service = useLoaderData();
    const { user } = useContext(UserContext);
    const { title, price, _id, img } = service;

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const bookings = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        // console.log(bookings)
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Done!',
                        text: 'Service added',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <div className="lg:p-24 p-10">
            <h2 className="text-center text-4xl font-bold mb-10">Book Service: {title}</h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:w-5/6 mx-auto md:grid-cols-2 gap-10">
                    <div className="form-control">
                        <input type="text" defaultValue={user?.displayName} placeholder="Your Name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="price" defaultValue={"$" + price} className="input input-bordered" />
                    </div>
                </div>
                <div className="md:w-1/2 mx-auto">
                    <input className="bg-red-600 cursor-pointer rounded-lg w-full py-3 font-semibold text-white mt-5" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Book;
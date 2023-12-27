import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";




const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const Payment = () => {
    return (
        <div className="w-4/5 mx-auto my-16">
             <SectionTitle title="Payment"></SectionTitle>

             <div className="w-full mx-auto my-16  py-8 px-2 border-4 rounded-tl-3xl rounded-br-3xl border-[#7071E8]">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;
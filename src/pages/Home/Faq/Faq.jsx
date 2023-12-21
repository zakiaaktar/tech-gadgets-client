import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import faq from '../../../assets/faq.jpg'




const Faq = () => {
    return (
        <section className="w-4/5 mx-auto my-16">
            <SectionTitle
                    title={`Frequently Asked Questions`}
            ></SectionTitle>
          
           <div style={{
                    background: `url(${faq})`
                }}>
           

<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
    
    <div className="flex flex-col text-white font-bold divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
        <details>
            <summary className="py-2 outline-none cursor-pointer">Q: How can I place an order on your website?</summary>
            <div className="px-4 pb-4 space-y-2">
                <p>A: Placing an order on our website is simple. Navigate to the product you wish to purchase, click on the "Add to Cart" button, and proceed to the checkout page. Follow the on-screen instructions to provide your shipping details and payment information. Once your order is confirmed, you will receive an email with the order details.</p>

            </div>
        </details>
        <details>
            <summary className="py-2 outline-none cursor-pointer">Q: What payment methods do you accept?</summary>
            <div className="px-4 pb-4 space-y-2">
            <p>A: We accept a variety of payment methods to provide convenience for our customers. You can pay for your tech products using major credit cards, debit cards, and popular digital payment platforms. We prioritize the security of your transactions and ensure that your payment information is handled with the utmost confidentiality.</p>

            </div>
        </details>
        <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">Q: Can I track the status of my order after it's placed?</summary>
            <div className="px-4 pb-4 space-y-2">
            <p>A: Yes, you can track the status of your order easily. Once your order is confirmed, we will provide you with a tracking number and a link to our tracking page. Use the tracking number to monitor the shipping progress of your tech products in real-time. Additionally, you will receive email notifications at key stages of the shipping process, including when your order is dispatched and when it's out for delivery.</p>

            </div>
        </details>
        <details>
            <summary className="py-2 outline-none cursor-pointer">Q: What is your return policy for tech products?</summary>
            <div className="px-4 pb-4 space-y-2">
            <p>A: We strive to ensure customer satisfaction with our tech products. If you encounter any issues or are not completely satisfied with your purchase, our return policy allows you to return the product within a specified period (please check our terms and conditions for details). Simply contact our customer service team, and they will guide you through the return process. We aim to make the return and refund process as straightforward as possible for our customers.</p>

            </div>
        </details>
        <details>
            <summary className="py-2 outline-none cursor-pointer">Q: What is your return policy for tech products?</summary>
            <div className="px-4 pb-4 space-y-2">
            <p>A: We strive to ensure customer satisfaction with our tech products. If you encounter any issues or are not completely satisfied with your purchase, our return policy allows you to return the product within a specified period (please check our terms and conditions for details). Simply contact our customer service team, and they will guide you through the return process. We aim to make the return and refund process as straightforward as possible for our customers.</p>

            </div>
        </details>
    </div>
</div>

           </div>
        </section>
    );
};

export default Faq;
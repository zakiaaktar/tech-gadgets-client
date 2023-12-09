import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Faq = () => {
    return (
        <section className="w-4/5 mx-auto my-16">
            <SectionTitle
                    title={`Frequently Asked Questions`}
            ></SectionTitle>
            <div className="collapse collapse-arrow border bg-base-100 mb-3 border-blue-900 text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                1. Q: How can I place an order on your website?
                </div>
                <div className="collapse-content">
                    <p>
                    A: Placing an order on our website is simple. Navigate to the product you wish to purchase, click on the "Add to Cart" button, and proceed to the checkout page. Follow the on-screen instructions to provide your shipping details and payment information. Once your order is confirmed, you will receive an email with the order details.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-arrow border mb-3 border-[#05BFDB] text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                2. Q: What payment methods do you accept?
                </div>
                <div className="collapse-content">
                    <p>A: We accept a variety of payment methods to provide convenience for our customers. You can pay for your tech products using major credit cards, debit cards, and popular digital payment platforms. We prioritize the security of your transactions and ensure that your payment information is handled with the utmost confidentiality.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow border mb-3 border-[#05BFDB] text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                3. Q: Can I track the status of my order after it's placed?
                </div>
                <div className="collapse-content">
                    <p>A: Yes, you can track the status of your order easily. Once your order is confirmed, we will provide you with a tracking number and a link to our tracking page. Use the tracking number to monitor the shipping progress of your tech products in real-time. Additionally, you will receive email notifications at key stages of the shipping process, including when your order is dispatched and when it's out for delivery.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow border mb-3 border-[#05BFDB] text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                4. Q: What is your return policy for tech products?
                </div>
                <div className="collapse-content">
                    <p>A: We strive to ensure customer satisfaction with our tech products. If you encounter any issues or are not completely satisfied with your purchase, our return policy allows you to return the product within a specified period (please check our terms and conditions for details). Simply contact our customer service team, and they will guide you through the return process. We aim to make the return and refund process as straightforward as possible for our customers.</p>
                </div>
            </div>
        </section>
    );
};

export default Faq;
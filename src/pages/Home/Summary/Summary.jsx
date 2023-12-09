import React, { useState } from 'react';
import { AiFillCustomerService } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { FaProductHunt } from 'react-icons/fa';
import { FaRegCalendarDays } from 'react-icons/fa6';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';




const Summary = () => {
    const [counterOn, setCounterOn] = useState(false);

    const summary = [
        { _id: 1, icon: <IoIosPeople/>, countStart: '0', countEnd: '97', countSpan: '%', info: 'Happy Customers' },
        { _id: 4, icon: <FaProductHunt />, countStart: '0', countEnd: '15', countSpan: 'K+', info: 'Product available' },
        { _id: 2, icon: <FaRegCalendarDays />, countStart: '0', countEnd: '10', countSpan: 'K+', info: 'Day Per Sale' },
        { _id: 3, icon: <AiFillCustomerService />, countStart: '0', countEnd: '1', countSpan: 'K+', info: 'Customer Services' },
        


    ]


    return (
        <div className='my-16'>
            <SectionTitle
                    title={`More About Our Success Stories`}
            ></SectionTitle>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className='flex justify-center text-center'>
                    <div>
                        <div className='lg:grid grid-cols-4 gap-5 justify-center'>
                            {
                                summary.map(summary => <div key={summary._id} className='mx-5 '>
                                    <h3 className='text-5xl text-[#05BFDB] mx-20'>{summary.icon}</h3>
                                    <h4 className='text-3xl font-semibold my-2'>
                                        {counterOn && <CountUp start={summary.countStart} end={summary.countEnd} duration={2} delay={0} />
                                        }<span>{summary.countSpan}</span></h4>
                                    <p className='text-2xl font-semibold text-[#05BFDB]'>{summary.info}</p>
                                </div>)
                            }


                        </div>
                    </div>
                </div>
{/* 
                <div className='flex justify-center my-20 bg-red-300'>
                    <div className="card w-[800px] bg-blue-100 shadow-xl mx-5">

                    </div>
                </div> */}
            </ScrollTrigger>
        </div>


    );
};

export default Summary;
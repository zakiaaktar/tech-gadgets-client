import React, { useState } from 'react';
//import summaryBannar from '../../../assets/images/summaryBannar.jpg';
import { MdPointOfSale } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiCountingworkspro } from 'react-icons/si';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';




const Summary = () => {
    const [counterOn, setCounterOn] = useState(false);

    const summary = [
        { _id: 1, icon: <IoIosPeople />, countStart: '0', countEnd: '99', countSpan: '%', info: 'Happy Customers' },
        { _id: 4, icon: <MdOutlineProductionQuantityLimits />, countStart: '0', countEnd: '15', countSpan: 'K', info: 'Products Available' },
        { _id: 2, icon: <SiCountingworkspro />, countStart: '0', countEnd: '50', countSpan: '+', info: 'Worldwide Branch' },
        { _id: 3, icon: <MdPointOfSale />, countStart: '0', countEnd: '1', countSpan: 'K', info: 'Per Day Sale' },
        
    ]



    return (
        <div className='my-24'>
            <h2 className='text-4xl font-bold text-[#F24C3D] my-16  text-center'>More About Our Success Story</h2>
{/* 
            <section className='py-12'
                style={{
                    background: `url(${summaryBannar})`
                }}
            > */}
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className='flex justify-center text-center'>
                        <div>

                            <div className='lg:grid grid-cols-4 gap-5 justify-center'>
                                {
                                    summary.map(summary => <div key={summary._id} className='mx-5 '>
                                        <h3 className='text-5xl text-[#F24C3D] mx-20'>{summary.icon}</h3>
                                        <h4 className='text-3xl font-semibold my-2'>
                                            {counterOn && <CountUp start={summary.countStart} end={summary.countEnd} duration={2} delay={0} />
                                            }<span>{summary.countSpan}</span></h4>
                                        <p className='text-2xl  text-[#F24C3D]'>{summary.info}</p>
                                    </div>)
                                }


                            </div>

                        </div>
                    </div>

                </ScrollTrigger>
           
        </div>
    );
};

export default Summary;
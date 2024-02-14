import React, { useRef, useState } from 'react'
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { MdLocationOn, MdCall, MdEmail } from 'react-icons/md'


function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const TEMPLATE_ID = "template_0t2kdor";
    const SERVICE_ID = "service_fgqci5u";
    const USER_ID = "QgRkeTht_54H1nMdn";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                USER_ID
            )
            .then(
                (result) => {
                    alert('message sent successfully...');
                    console.log(result.text);
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    e.target.reset();

                }
            );

    };

    return (
        <div>

            <div className="relative w-fill">
               <img src="assets/NHheader.png" className='w-full' alt="" />

                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white outlines w-full flex justify-center">
                    <h1 className="text-white-100 text-4xl md:text-[55px] text-center justify-center slide-in flex flex-wrap gap-6 ">Get In Touch</h1>
                </div>
                
               
            </div>

            <div className='h-full pt-11 flex justify-center item-center flex-col'>
                <div className="bg-primary-100 w-[70%]  rounded-xl m-auto flex flex-col md:flex-row justify-center items-center ">
                    <div className="h-auto w-full md:1/2 rounded-l-xl py-4 px-1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5206971830166!2d38.73539617488379!3d9.016173291044614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b856a964bc515%3A0xd4dddab33c8a9d1e!2sCENTRAL%20TOTAL%20LUBRICANTS!5e0!3m2!1sen!2set!4v1706982096541!5m2!1sen!2set"
                            style={{ border: "0" }} className=" md:ml-3 rounded-md w-full h-64 md:h-[500px]"
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="w-full md:1/2 h-auto rounded-r-xl flex flex-col justify-center items-center p-6">
                        <h2 className="text-center text-[38px]  mb-9 text-white-100">Contact Us</h2>
                        <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col justify-between" action="">
                            <input value={name} onChange={e => setName(e.target.value)}
                                className="indent-3  outline-none rounded-xl bg-[#3D3D3E] pl-2 h-10 border-none mb-4 text-base text-white-100"
                                placeholder="Name" type="text" name="from_name" />
                            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
                                className="placeholder-gray-400 bg-[#3D3D3E]  indent-3 outline-none rounded-xl text-white-100 pl-2 h-10 border-none mb-4 text-base"
                                type="text" name="reply_to" />
                            <textarea value={message} onChange={e => setMessage(e.target.value)}
                                placeholder="Message"
                                className="indent-3 outline-none rounded-xl bg-[#3D3D3E] text-white-100 pl-2 border-none mb-4 text-base"
                                name="message" id="" cols="30" rows="8"></textarea>
                            <input
                                className="indent-3 outline-none rounded-xl bg-[#081ED1] pl-2 h-11 cursor-pointer text-white-100 text-2xl"
                                type="submit" />
                        </form>

                    </div>
                </div>
                <div className='max-w-[1300px] pt-4 flex flex-wrap gap-x-32 gap-y-12 text-secondary-100 ml-12 md:ml-0 justify-start md:justify-center'>

                    <div className='flex items-center'>
                        <MdLocationOn className='bg-gray-200 rounded-full p-2 text-5xl mr-3 text-secondary-100'></MdLocationOn>
                        <h3 className=' cursor-pointer text-2xl'> <span className='text-2xl'>Location</span>  <br />
                            Lideta Condominium, at the cross from <br /> 5th Police Station to Balcha Hospital</h3>
                    </div>
                    <div className='flex items-center'>
                        <MdCall className='bg-gray-200 rounded-full p-2 text-5xl mr-3 text-secondary-100'></MdCall>
                        <div>
                        <span className='text-2xl'>Call Us: </span> <br />
                        <div></div>
                            <a href="tel:: +251 11 888 8888 "><h3 className=' cursor-pointer text-2xl'> +251 11 888 8888 </h3></a>
                            <a href="tel:: +251 93 538 8291 "><h3 className=' cursor-pointer text-2xl'> +251 93 538 8291 </h3></a>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <MdEmail className='bg-gray-200 rounded-full p-2 text-5xl mr-3 text-secondary-100'></MdEmail>
                        <div className='flex flex-col'>
                            <span className='text-2xl'>Email</span>
                            <a href="mailto: central.lubricant@gmail.com, "><h3 className=' cursor-pointer text-2xl'>central.lubricant@gmail.com, </h3></a>
                            <a href="mailto: bukerna@gmail.com"><h3 className=' cursor-pointer text-2xl '>bukerna@gmail.com</h3></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
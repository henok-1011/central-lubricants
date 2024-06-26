import { useEffect, useState } from 'react';
import { BiPhoneCall, BiRightArrowAlt, BiMenuAltLeft } from 'react-icons/bi'
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { TbBrandTelegram, TbLockX } from 'react-icons/tb'
import { useLocation } from 'react-router-dom';


const Header = ({ home }) => {
    const location = useLocation().pathname;

    const [active, setActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const headerItems = [
        {
            id: 1,
            name: 'Home',
            link: '/',
        },
        {
            id: 2,
            name: 'Product',
            link: '/product',
        },
        {
            id: 3,
            name: 'Knowledge-Base',
            link: '/knowledge-base',
        },
        {
            id: 4,
            name: 'Contact',
            link: '/contact',
        },{
            id: 5,
            name: 'About',
            link: '/about',
        }
    ];

    const menuClickHandler = () => {
        setActive(true);
    };
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };


    return (
        <header className={`overflow-x-hidden sm:overflow-x-visible w-full bg-transparent   text-secondary-100`}>
            <div className='w-full flex justify-around items-center h-full '>
                <div className={`ml-28 sm:-ml-10 flex justify-center h-[60%] items-center 'md:w-[44%] md:w-[18%] w-[80%]' : "w-[40%]"} gap-8  `}>
                    <a href='/' className='text-3xl font-bold'>
                        <img className={`w-full h-auto py-2`} src='assets/logo.png' />
                    </a>

                    
                </div>
                <div className='hidden w-[39%] sm:flex justify-evenly gap-[12px]'>
                    {
                        headerItems.map((item) => (
                            <a href={item.link} key={item.id} className={`cursor-pointer text-secondary-100 text-[18px]  font-medium`} >
                                {item.name}
                            </a>
                        ))
                    }
                </div>




                <div className={`z-10 h-[100vh] w-[90%] bg-primary-300 absolute top-0 transition-all duration-500 ease-in ${active ? "right-0 block" : "-right-[100%] hidden"
                    }`}>
                    <div className={`w-full h-full flex flex-col items-start justify-start px-10 pb-10 pt-0 bg-black-100`}>
                        <BiRightArrowAlt
                            onClick={() => setActive(false)}
                            color="#E49D5B"
                            size="3rem"
                        ></BiRightArrowAlt>
                        {headerItems.map((e, i) => (
                            <div key={i} className="my-5 w-full">
                                <a
                                    href={e.link}
                                    className={`${location === "/" && e.name == "Home" ? 'text-white-100' : ""} ${location === "/about" && e.name == "About" ? 'text-white-100' : ""} ${location === "/product" && e.name == "Product" ? 'text-white-100' : ""} ${location === "/events" && e.name == "Events" ? 'text-white-100' : ""} ${location === "/impact" && e.name == "Impact" ? 'text-white-100' : ""} ${location === "/contact" && e.name == "Contact" ? 'text-white-100' : ""} block  text-[21px] text-secondary-100 text-left pb-3 border-b-[1px] border-[rgba(255, 255, 255, 0.1)]`}
                                >
                                    {e.name}
                                </a>
                            </div>
                        ))}
                        {/*<a href='/contactus' className='block w-full mt-2 text-lg text-white text-left pb-3 border-b-[1px] border-[rgba(255, 255, 255, 0.1)]'>Contact Us</a>*/}
                        <div className='flex sm:hidden w-[100%] mt-10 justify-around items-center text-secondary-100 text-base'>

                            <a href='https://www.facebook.com/profile.php?id=100087645096237'>
                                <AiFillFacebook color='white' size='1.6rem' className='cursor-pointer' />
                            </a>
                            <a href='https://www.instagram.com/adeydigital_official/'>

                                <AiOutlineInstagram color='white' size='1.6rem' className='cursor-pointer' />
                            </a>
                            <TbBrandTelegram color='white' size='1.6rem' className='cursor-pointer' />

                        </div>
                    </div>
                </div>


                <div className='sm:hidden w-[20%] ml-auto'>
                    <BiMenuAltLeft color='#E49D5B' size='2.5rem' className='cursor-pointer' onClick={menuClickHandler} />
                </div>


            </div>
        </header>
    );
};

export default Header;
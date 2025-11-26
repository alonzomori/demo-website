import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header'
import { Link } from "react-scroll";

function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="mx-auto py-[30px] bg-[#C0C0C0] fixed top-0 w-145 md:w-300 lg:w-390 z-[102]">
            <Header />
            <div className="flex justify-end pr-6 md:pr-50">
                {/* Desktop */}
            <ul className="hidden md:flex space-x-6 md:space-x-20">
                <Link to="about" smooth={true} duration={600} className="cursor-pointer text-white hover:text-gray-400"><strong>About</strong></Link>
                <Link to="services" smooth={true} duration={600} className="cursor-pointer text-white hover:text-gray-400"><strong>Services</strong></Link>
                <Link to="contact" smooth={true} duration={600} className="cursor-pointer text-white hover:text-gray-400"><strong>Contact</strong></Link>
            </ul>

                {/* Mobile Hamburger Icon */}
                <button className="md:hidden pr-5" onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={open ? faTimes : faBars} size="2x" />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div className="md:hidden bg-white shadow-lg py-4 absolute right-0 top-20 mr-6 rounded-lg">
                    <ul className="flex flex-col space-y-4 px-6 text-right">
                     <li className="cursor-pointer">About</li>
                     <li className="cursor-pointer">Services</li>
                     <li className="cursor-pointer">Contact</li>   
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navigation
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-12 right-0 w-full z-50">
            <div className="flex justify-end pr-6 md:pr-50">
                {/* Desktop */}
            <ul className="hidden md:flex space-x-6 md:space-x-20">
                <li className="cursor-pointer"><strong>About</strong></li>
                <li className="cursor-pointer"><strong>Services</strong></li>
                <li className="cursor-pointer"><strong>Contact</strong></li>
            </ul>

                {/* Mobile Hamburger Icon */}
                <button className="md:hidden" onClick={() => setOpen(!open)}>
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
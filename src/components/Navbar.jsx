import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="flex justify-between items-center">
                <div>
                    <a href="/" className="font-bold text-lg">
                        BrandName
                    </a>
                </div>
                <div className="flex gap-4">
                    <a href="#home" className="hover:text-gray-300">
                        Home
                    </a>
                    <a href="#about" className="hover:text-gray-300">
                        About
                    </a>
                    <a href="#services" className="hover:text-gray-300">
                        Services
                    </a>
                    <a href="#contact" className="hover:text-gray-300">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
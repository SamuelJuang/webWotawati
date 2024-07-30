import React from 'react';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigation</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="/about" className="hover:underline">About Us</a>
                            </li>
                            <li className="mb-4">
                                <a href="/history" className="hover:underline">History</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social Media</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                            <SocialIcon url="https://www.instagram.com/kim_padukuhanwotawati/"/>

                            </li>
                        </ul>
                    </div>
                </div>
                <span className="ps-5 text-sm text-gray-500 dark:text-gray-300 sm:text-center mt-6 flex">Dibuat Oleh Samuel Juang, Mahasiswa KKN periode 85 Universitas Atma Jaya Yogyakarta</span>
                <span className="ps-5 text-sm text-gray-500 dark:text-gray-300 sm:text-center mt-6 flex">© 2024, <a href="https://flowbite.com/">Wotawati</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;

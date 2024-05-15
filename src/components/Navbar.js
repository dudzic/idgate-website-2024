import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
    <nav>
        <div className="container py-5">
            <div className="w-full flex justify-between items-center">
                <div>
                    <img src="https://placehold.co/250x80" className={'w-40 md:w-auto'} width="250" height="80" alt=""/>
                </div>
                <div className={'hidden md:block'}>
                    <ul>
                        <li>
                            <Link to="/">Start</Link>
                        </li>
                    </ul>
                </div>
                <div className={'block md:hidden'}>
                    <div className={'flex flex-col gap-[6px]'}>
                        <div className={'w-7 h-[2px] bg-black'}></div>
                        <div className={'w-7 h-[2px] bg-black'}></div>
                        <div className={'w-7 h-[2px] bg-black'}></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;

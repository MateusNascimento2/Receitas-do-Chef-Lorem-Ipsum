import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);


    return (
        <header className='flex items-center justify-between shadow p-2 bg-white lg:px-8'>
            <Link to={'/'}>
                <img src={logo} alt="logo chef lorem ipsum" className='w-20' />
            </Link>
            <nav>
                <section className="lg:hidden">
                    <div className="space-y-1" onClick={() => setIsNavOpen((prev) => !prev)}>
                        <span className="block h-0.5 w-7 bg-orange-600"></span>
                        <span className="block h-0.5 w-7 bg-orange-600"></span>
                        <span className="block h-0.5 w-7 bg-orange-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 mx-2 my-6"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-orange-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li>
                                <Link to={'/'} onClick={() => setIsNavOpen(false)}>
                                    <img src={logo} alt="logo" className='w-20' />
                                </Link>
                            </li>
                            <li className="border-b border-orange-600 my-8 uppercase">
                                <Link to={'/by-letter'} onClick={() => setIsNavOpen(false)}>Receitas por Letra</Link>
                            </li>
                            <li className="border-b border-orange-600 my-8 uppercase">
                                <Link to={'/ingredients'} onClick={() => setIsNavOpen(false)}>Receitas por Ingredientes</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="hidden space-x-8 lg:flex">
                    <li className='hover:text-orange-600 lg:text-lg'>
                        <Link to={'/by-letter'}>Receitas por Letra</Link>
                    </li>
                    <li className='hover:text-orange-600 lg:text-lg'>
                        <Link to={'/ingredients'}>Receitas por Ingredientes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

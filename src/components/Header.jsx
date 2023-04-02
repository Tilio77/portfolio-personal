// Componentes
import Navbar from './Navbar';
import NavMobile from './NavMobile';
// Datos
import { data } from '../Data';
// Hooks
import { useState, useEffect } from 'react';

const Header = () => {
	// Destructuramos datos
	const { nav } = data;
	// Hooks
	const [active, setActive] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 0 
				? setActive(true) 
				: setActive(false);
		})
	}, [])

	return (
		<header className={`${active ? 'p-2 bg-[#262626] shadow-xl rounded-b-[30px]' : 'p-5' } transition-all duration-500 fixed w-full`}>
			<div className="flex items-center px-6 lg:container mx-auto justify-between">
				<a 
					href="#home" 
					className={`${active 
						? 'text-white_cream' 
						: 'text-black_site'
					} text-[2.5rem] font-Delicious cursor-pointer`}
				>
					Portafolio
				</a>
				<div className="hidden sm:flex">
					<Navbar active={active} />
				</div>
				<div className="sm:hidden flex">
					<NavMobile active={active} />
				</div>
			</div>
		</header>
	);
};

export default Header;
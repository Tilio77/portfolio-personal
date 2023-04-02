// Datos
import { data } from '../Data';

const Navbar = ({ active }) => {
	// Destructuramos
	const { nav } = data;

	return (
		<nav className="">
			<div className="lg:space-x-10 space-x-7 items-center flex">
				{nav.map((item, index) => {
					return (
						<a 
							key={index}
							className={`${active 
								? 'text-white_cream hover:text-gray_site' 
								: 'text-black_site hover:text-white_cream'
							} border-b border-b-transparent transition duration-300  text-[13px] font-semibold font-Poppins tracking-[1px]`} 
							href={item.link}>
							{item.name}
						</a>
					);
				})}
			</div>
		</nav>
	);
};

export default Navbar;
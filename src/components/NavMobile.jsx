// Iconos
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
// Hooks
import { useState } from 'react';
// Datos
import { data } from '../Data';
// Imagenes
import Imagen from '../../public/flaticon.png';

const NavMobile = ({ active }) => {
	// Destructuramos datos
	const { nav } = data;
	// Hooks
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className="">
			<div className="">
				<div 
					className={`${showMenu 
						? 'top-0 shadow-xl' 
						: 'top-[-400%]'
					} transition-in duration-500 absolute bg-white left-0 w-full rounded-b-[30px]`}>
					<div className="flex flex-col tracking-[1px] font-Poppins font-semibold text-[13px] items-center gap-y-7 py-10">
						{nav.map((item, index) => {
							return (
								<a 
									href={item.link} 
									key={index} 
									className="hover:text-gray_site transition duration-300"
								>
									{item.name}
								</a>
							);
						})}
					</div>
					<div 
						onClick={() => setShowMenu(false)}
						className="absolute top-5 cursor-pointer right-8 text-2xl">
						<AiOutlineClose />
					</div>
					<div>
						<img 
							src={Imagen} 
							className="w-12 absolute top-16 left-10 rotate-45" 
						/>
						<img 
							src={Imagen}  
							className="w-7 absolute top-[150px] right-10 -rotate-45" 
						/>
					</div>
				</div>
				<div 
					onClick={() => setShowMenu(true)}
					className={`${active 
						? 'text-white_cream' 
						: 'text-black_site'
					} cursor-pointer text-2xl`}>
					<FiMenu />
				</div>
			</div>
		</nav>
	);
};

export default NavMobile;
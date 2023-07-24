import React, { ButtonHTMLAttributes } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ loading, children, ...rest }) => {
	return (
		<button
			{...rest}
			className={`${
				loading ? 'pointer-events-none opacity-70' : ''
			}  text-white font-black uppercase py-2 px-4 rounded-[10px] flex items-center justify-center w-48  btn-info`}
		>
			{loading ? <BiLoaderAlt className="mr-2 animate-spin" /> : null}
			{loading ? 'LOADING' : children}
		</button>
	);
};

export default Button;

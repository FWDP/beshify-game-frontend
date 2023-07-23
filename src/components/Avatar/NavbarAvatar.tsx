import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavbarAvatar({ avatar }: { avatar: string }) {
	const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const importAvatar = async () => {
			try {
				const image = await import(`../../assets/${avatar}.png`);
				setAvatarSrc(image.default);
			} catch (error) {
				console.error('Error loading avatar image:', error);
			}
		};

		importAvatar();
	}, [avatar]);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	const handleLogout = async () => {
		//TODO: POST logout

		localStorage.removeItem('username');
		localStorage.removeItem('avatar');
		navigate('/');
	};

	if (!avatarSrc) {
		//TODO: reder image fallback
		return null;
	}

	return (
		<div
			className="relative cursor-pointer"
			ref={dropdownRef}
		>
			<div className="flex justify-center m-3">
				<div className=" avatar">
					<div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img
							onClick={() => setIsOpen(!isOpen)}
							src={avatarSrc}
							alt="userAvatar"
						/>
					</div>
				</div>
			</div>

			{isOpen && (
				<ul className="absolute mt-1 transform translate-x-1/2 bg-white border border-gray-300 rounded shadow-lg right-1/2 top-14">
					<li
						className="px-4 py-2 cursor-pointer hover:bg-gray-100"
						onClick={handleLogout}
					>
						LOGOUT
					</li>
				</ul>
			)}
		</div>
	);
}

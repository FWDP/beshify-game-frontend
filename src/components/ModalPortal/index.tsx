import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalPortalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	className?: string;
	width?: string;
	height?: string;
}

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const modalRoot = document.getElementById('modal-root');
	if (!modalRoot) {
		throw new Error("'modal-root' element not found in the DOM.");
	}
	return <>{createPortal(children, modalRoot)}</>;
};

const ModalPortal: React.FC<ModalPortalProps> = ({
	isOpen,
	onClose,
	children,
	className,
	width = '300px',
	height = 'auto',
}) => {
	const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) onClose();
	};

	return (
		<Portal>
			<AnimatePresence
				initial={false}
				mode="wait"
				onExitComplete={() => null}
			>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleBackdropClick}
						className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
					>
						<motion.div
							style={{ width, height }}
							className={`${className} relative z-50 bg-white rounded-lg shadow-lg`}
							variants={zoomInOut}
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
						>
							<button
								onClick={onClose}
								className="absolute text-red-700 top-4 right-4"
							>
								<AiOutlineClose size={20} />
							</button>
							{children}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</Portal>
	);
};

const zoomInOut = {
	hidden: {
		scale: 0.5,
		opacity: 0,
	},
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		scale: 0.8,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},
};

export default ModalPortal;

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface CustomModalProps {
	buttonText: JSX.Element | string;
	className?: string;
	modalTitle?: string;
	children: React.ReactNode;
	modalOpen: boolean;
	handleModal: () => void;
}

const CustomModal = (props: CustomModalProps) => {
	const {
		buttonText,
		className,
		modalTitle,
		children,
		modalOpen,
		handleModal,
	} = props;

	return (
		<>
			<div className='flex items-center justify-center'>
				<button
					type='button'
					onClick={handleModal}
					className={`bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-50 ${className}`}
				>
					{buttonText}
				</button>
			</div>

			<Transition appear show={modalOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={handleModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
									<Dialog.Title
										as='h3'
										className='text-lg font-medium leading-6 text-gray-800'
									>
										{modalTitle}
									</Dialog.Title>
									{children}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default CustomModal;

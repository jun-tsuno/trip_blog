import { useState } from 'react';
import CustomModal from '../CustomModal';
import TrashIcon from '@public/svgIcons/trash';
import { useRouter } from 'next/router';
import { useDeletePost } from '@/hooks/mutations/post/delete-post';

interface ModalProps {
	id: string;
	fileIdentifier: string | undefined;
}

const DeletePostModal = ({ id, fileIdentifier }: ModalProps) => {
	const [modalOpen, setModalOpen] = useState(false);
	const router = useRouter();

	const [deletePost] = useDeletePost();

	const handleModal = () => {
		setModalOpen(!modalOpen);
	};

	const handleDelete = async () => {
		try {
			await deletePost({ variables: { id, fileIdentifier } });
			router.push('/home');
		} catch (error) {
			alert('Something went wrong. Fail to delete.');
		}
	};

	return (
		<>
			<CustomModal
				buttonText={<TrashIcon width={22} height={22} />}
				className='bg-red-400 rounded-full'
				modalTitle='Are you sure to delete this post?'
				modalOpen={modalOpen}
				handleModal={handleModal}
			>
				<div className='mt-2'>
					<p className='text-sm text-gray-500'>
						The post will be deleted permanently. Are you sure to delete this
						post?
					</p>
				</div>

				<div className='mt-4'>
					<button
						type='button'
						className='inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-secondary-dark-gray bg-primary-pink hover:bg-secondary-pastel-pink'
						onClick={() => {
							handleModal();
							handleDelete();
						}}
					>
						Delete
					</button>
				</div>
			</CustomModal>
		</>
	);
};

export default DeletePostModal;

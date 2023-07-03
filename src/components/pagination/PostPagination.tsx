import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import PostPaginationItems from './PostPaginationItems';
import styles from './pagination.module.css';

interface PaginationProps {
	itemsPerPage: number;
	items: any[];
}

const Pagination = ({ itemsPerPage, items }: PaginationProps) => {
	const [itemOffset, setItemOffset] = useState(0);

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (selectedItem: { selected: number }) => {
		const newOffset = (selectedItem.selected * itemsPerPage) % items.length;
		setItemOffset(newOffset);
	};

	return (
		<>
			<PostPaginationItems currentItems={currentItems} />
			<ReactPaginate
				pageCount={pageCount}
				breakLabel='...'
				nextLabel='next >'
				previousLabel='< previous'
				renderOnZeroPageCount={null}
				pageRangeDisplayed={5}
				onPageChange={handlePageClick}
				className={styles.paginate}
				activeClassName={styles.active}
			/>
		</>
	);
};

export default Pagination;

import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import "../Component/styles/pagination.css";

const PaginationC = ({
	handleChangePage,
	totalPages,
	currentPage,
	setCurrentPage,
}) => {
	return (
		<>
			<div className="mt-4 d-flex justify-content-center align-items-center">
				<button
					className="sam_btn"
					disabled={currentPage === 1 && true}
					onClick={() => setCurrentPage(1)}
				>
					First
				</button>
				<Pagination
					shape="rounded"
					count={totalPages}
					onChange={handleChangePage}
					page={currentPage}
				/>
				<button
					className="sam_btn"
					disabled={currentPage === totalPages && true}
					onClick={() => setCurrentPage(totalPages)}
				>
					Last
				</button>
			</div>
		</>
	);
};

export default PaginationC;

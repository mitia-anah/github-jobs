import React, { useEffect, useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { Context } from '../GithubContext'


const pagination = () => {
    const { state, dispatch } = useContext(Context)
    const { jobs } = state
    const [offset, setOffset] = useState(0);
    const PER_PAGE = 5;

    useEffect(() => {
        dispatch(jobs);
    }, [jobs]);

    const handlePageClick = (data) => {
        setOffset(data.selected * PER_PAGE);
        window.scrollTo(0, 0);
    };

    return (
        <div >
            {state.slice(offset, offset + PER_PAGE).map((item) => (
                <JobCards job={item} key={item.id} />
            ))}
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(jobs.length / PER_PAGE)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default pagination;

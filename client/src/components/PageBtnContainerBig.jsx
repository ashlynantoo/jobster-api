import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainerBig";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainerBig = () => {
  const { numOfPages } = useLoaderData();
  const { page } = useSelector((store) => {
    return store.allJobsState;
  });
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const dispatch = useDispatch();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNum) => {
    dispatch(changePage(pageNum));
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNum);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const handlePrevPageBtn = () => {
    const newPage = page - 1;
    if (newPage > 0) {
      handlePageChange(newPage);
    }
  };

  const handleNextPageBtn = () => {
    const newPage = page + 1;
    if (newPage <= numOfPages) {
      handlePageChange(newPage);
    }
  };

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={handlePrevPageBtn}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNum) => {
          return (
            <button
              type="button"
              key={pageNum}
              className={pageNum === page ? "pageBtn active" : "pageBtn"}
              onClick={() => {
                handlePageChange(pageNum);
              }}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button type="button" className="next-btn" onClick={handleNextPageBtn}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainerBig;

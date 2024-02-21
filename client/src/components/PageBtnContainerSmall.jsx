import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainerSmall";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainerSmall = () => {
  const { numOfPages } = useLoaderData();
  const { page } = useSelector((store) => {
    return store.allJobsState;
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

  const addPageButton = ({ pageNum, isActiveBtn }) => {
    return (
      <button
        type="button"
        key={pageNum}
        className={`pageBtn ${isActiveBtn && "active"}`}
        onClick={() => {
          handlePageChange(pageNum);
        }}
      >
        {pageNum}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    pageButtons.push(addPageButton({ pageNum: 1, isActiveBtn: page === 1 }));
    if (page > 2) {
      pageButtons.push(
        <button key="dots-1" className="pageBtn">
          ...
        </button>
      );
    }
    if (page !== 1 && page !== numOfPages) {
      pageButtons.push(addPageButton({ pageNum: page, isActiveBtn: true }));
    }
    if (page < numOfPages - 1) {
      pageButtons.push(
        <button key="dots-2" className="pageBtn">
          ...
        </button>
      );
    }
    pageButtons.push(
      addPageButton({ pageNum: numOfPages, isActiveBtn: page === numOfPages })
    );

    return pageButtons;
  };

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={handlePrevPageBtn}>
        <HiChevronDoubleLeft />
      </button>
      <div className="btn-container">{renderPageButtons()}</div>
      <button type="button" className="next-btn" onClick={handleNextPageBtn}>
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainerSmall;

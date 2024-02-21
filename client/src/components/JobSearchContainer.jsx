import { Form } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/DashboardForm";
import { FormInput, FormSelect, SubmitBtn } from "../components";
import {
  clearFilters,
  handleAllJobsStateValueChange,
} from "../features/allJobs/allJobsSlice";

const JobSearchContainer = () => {
  const { search, searchStatus, searchType, sort, sortOptions } = useSelector(
    (store) => {
      return store.allJobsState;
    }
  );
  const { jobTypeOptions, statusOptions } = useSelector((store) => {
    return store.jobState;
  });
  const dispatch = useDispatch();

  const handleClearFiltersBtn = () => {
    dispatch(clearFilters());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(handleAllJobsStateValueChange({ name, value }));
  };

  return (
    <Wrapper>
      <Form method="get" className="form">
        <h3>search form</h3>
        <div className="form-center">
          {/* search position */}
          <FormInput
            label="search"
            type="search"
            name="search"
            value={search}
            handleChange={handleChange}
            notRequired="yes"
          />
          {/* search by status */}
          <FormSelect
            label="job status"
            name="searchStatus"
            list={["all", ...statusOptions]}
            value={searchStatus}
            handleChange={handleChange}
          />

          {/* search by type*/}
          <FormSelect
            label="job type"
            name="searchType"
            list={["all", ...jobTypeOptions]}
            value={searchType}
            handleChange={handleChange}
          />
          {/* sort */}
          <FormSelect
            label="sort by"
            name="sort"
            list={sortOptions}
            value={sort}
            handleChange={handleChange}
          />
          <div className="btn-container">
            <SubmitBtn text="Search" />
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={handleClearFiltersBtn}
            >
              clear
            </button>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

export default JobSearchContainer;

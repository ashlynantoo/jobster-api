import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/JobsContainer";
import { Job, PageBtnContainerBig, PageBtnContainerSmall } from "../components";

const JobsContainer = () => {
  const { jobs, numOfPages, totalJobs } = useLoaderData();

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h4 className="empty">No jobs match your search criteria</h4>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h4>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h4>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainerSmall />}
      {numOfPages > 1 && <PageBtnContainerBig />}
    </Wrapper>
  );
};

export default JobsContainer;

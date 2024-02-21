import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Job";
import { JobInfo } from "../components";
import { logoutUser } from "../features/user/userSlice";
import {
  createEditDeleteJob,
  clearJobStateValues,
  setJobStateValues,
} from "../features/job/jobSlice";
import { customFetch } from "../utils/axios";
import { useQueryClient } from "@tanstack/react-query";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  status,
  createdAt,
}) => {
  const date = moment(createdAt).format("MMM Do, YYYY");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryCache = useQueryClient();

  const handleDeleteBtn = async (jobId) => {
    const url = `/jobs/${jobId}`;
    try {
      const { data } = await customFetch.delete(url);
      dispatch(createEditDeleteJob("Job removed!"));
      queryCache.removeQueries(["jobs"]);
      queryCache.removeQueries(["stats"]);
      navigate("/all-jobs");
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        toast.error("Unauthorized User!");
        dispatch(logoutUser());
        dispatch(clearJobStateValues());
        navigate("/landing");
      } else {
        const errorMsg = error?.response?.data?.msg || "An error occurred...";
        toast.error(errorMsg);
      }
    }
  };

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => {
                dispatch(
                  setJobStateValues({
                    _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                );
              }}
            >
              edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => {
                handleDeleteBtn(_id);
              }}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;

import { Form, redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardForm";
import { FormInput, FormSelect, SubmitBtn } from "../../components";
import {
  clearJobStateValues,
  createEditDeleteJob,
  handleJobStateValueChange,
} from "../../features/job/jobSlice";
import { logoutUser } from "../../features/user/userSlice";
import { customFetch } from "../../utils/axios";

export const action = (store, queryClient) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const jobParams = Object.fromEntries(formData);
    try {
      //Add Job
      if (request.method === "POST") {
        const url = "/jobs";
        const { data } = await customFetch.post(url, jobParams);
        store.dispatch(createEditDeleteJob("Job added!"));
        store.dispatch(clearJobStateValues());
      }
      //Edit job
      if (request.method === "PATCH") {
        const jobId = store.getState().jobState.jobId;
        const url = `/jobs/${jobId}`;
        const { data } = await customFetch.patch(url, jobParams);
        store.dispatch(createEditDeleteJob("Job updated!"));
        store.dispatch(clearJobStateValues());
      }
      queryClient.removeQueries(["jobs"]);
      queryClient.removeQueries(["stats"]);
      return redirect("/all-jobs");
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        toast.error("Unauthorized User!");
        store.dispatch(logoutUser());
        store.dispatch(clearJobStateValues());
        return redirect("/landing");
      }
      const errorMsg = error?.response?.data?.msg || "An error occurred...";
      toast.error(errorMsg);
      return null;
    }
  };
};

const AddJob = () => {
  const {
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
  } = useSelector((store) => {
    return store.jobState;
  });
  const dispatch = useDispatch();

  const handleClearBtn = () => {
    dispatch(clearJobStateValues());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(handleJobStateValueChange({ name, value }));
  };

  return (
    <Wrapper>
      <Form method={isEditing ? "patch" : "post"} className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          {/* position */}
          <FormInput
            label="position"
            type="text"
            name="position"
            value={position}
            handleChange={handleChange}
          />
          {/* company */}
          <FormInput
            label="company"
            type="text"
            name="company"
            value={company}
            handleChange={handleChange}
          />
          {/* jobLocation */}
          <FormInput
            label="job location"
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleChange}
          />
          {/* job type*/}
          <FormSelect
            label="job type"
            name="jobType"
            list={jobTypeOptions}
            value={jobType}
            handleChange={handleChange}
          />
          {/* status */}
          <FormSelect
            label="status"
            name="status"
            list={statusOptions}
            value={status}
            handleChange={handleChange}
          />
          <div className="btn-container">
            <SubmitBtn text={isEditing ? "edit" : "add"} />
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={handleClearBtn}
            >
              clear
            </button>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;

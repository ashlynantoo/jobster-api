import { redirect, useNavigation } from "react-router-dom";
import { JobSearchContainer, JobsContainer, Loading } from "../../components";
import { customFetch } from "../../utils/axios";
import { toast } from "react-toastify";
import { logoutUser } from "../../features/user/userSlice";
import { clearJobStateValues } from "../../features/job/jobSlice";
import { changePage, clearFilters } from "../../features/allJobs/allJobsSlice";
import { geUserFromLocalStorage } from "../../utils/localStorage";

const allJobsQuery = (queryParams, url) => {
  const { search, searchStatus, searchType, sort, page } = queryParams;
  const user = geUserFromLocalStorage();

  return {
    queryKey: [
      "jobs",
      user?.email,
      search ?? "",
      searchStatus ?? "all",
      searchType ?? "all",
      sort ?? "latest",
      page ?? "1",
    ],
    queryFn: () => {
      return customFetch.get(url);
    },
  };
};

export const loader = (store, queryClient) => {
  return async ({ request }) => {
    const queryParams = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    let url = "";
    // no query parameters
    if (Object.keys(queryParams).length === 0) {
      store.dispatch(clearFilters());
      url = "/jobs?sort=latest&page=1";
    } else if (Object.keys(queryParams).length === 1) {
      const page = queryParams?.page;
      url = `/jobs?sort=latest&page=${page}`;
    } else {
      const { search, searchStatus, searchType, sort } = queryParams;
      let page = 1;
      queryParams.page
        ? (page = queryParams.page)
        : store.dispatch(changePage(page));
      url = `/jobs?search=${search}&status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    }

    try {
      const { data } = await queryClient.ensureQueryData(
        allJobsQuery(queryParams, url)
      );
      const { jobs, numOfPages, totalJobs } = data;
      return { jobs, numOfPages, totalJobs };
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

const AllJobs = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <JobSearchContainer />
      {isLoading ? <Loading /> : <JobsContainer />}
    </>
  );
};

export default AllJobs;

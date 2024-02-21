import { redirect, useLoaderData, useNavigation } from "react-router-dom";
import { ChartsContainer, Loading, StatsContainer } from "../../components";
import { customFetch } from "../../utils/axios";
import { toast } from "react-toastify";
import { logoutUser } from "../../features/user/userSlice";
import { clearJobStateValues } from "../../features/job/jobSlice";
import { geUserFromLocalStorage } from "../../utils/localStorage";

const url = "/jobs/stats";

const statsQuery = () => {
  const user = geUserFromLocalStorage();

  return {
    queryKey: ["stats", user?.email],
    queryFn: () => {
      return customFetch.get(url);
    },
  };
};

export const loader = (store, queryClient) => {
  return async () => {
    try {
      const { data } = await queryClient.ensureQueryData(statsQuery());
      const { defaultStats: stats, monthlyApplications } = data;
      return { stats, monthlyApplications };
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

const Stats = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const { monthlyApplications } = useLoaderData();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StatsContainer />
          {monthlyApplications.length > 0 && <ChartsContainer />}
        </>
      )}
    </>
  );
};

export default Stats;

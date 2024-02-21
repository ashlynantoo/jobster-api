import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
  Landing,
  Register,
  Login,
  Error,
  Stats,
  AllJobs,
  AddJob,
  Profile,
} from "./pages";
import { ErrorElement } from "./components";
import { loader as registerLoader } from "./pages/Register";
import { loader as loginLoader } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/dashboard/Dashboard";
import { loader as allJobsLoader } from "./pages/dashboard/AllJobs";
import { loader as statsLoader } from "./pages/dashboard/Stats";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as profileAction } from "./pages/dashboard/Profile";
import { action as addJobAction } from "./pages/dashboard/AddJob";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, //5 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
    loader: dashboardLoader,
    children: [
      {
        index: true,
        element: <Stats />,
        errorElement: <ErrorElement />,
        loader: statsLoader(store, queryClient),
      },
      {
        path: "all-jobs",
        element: <AllJobs />,
        errorElement: <ErrorElement />,
        loader: allJobsLoader(store, queryClient),
      },
      {
        path: "add-job",
        element: <AddJob />,
        errorElement: <ErrorElement />,
        action: addJobAction(store, queryClient),
      },
      {
        path: "profile",
        element: <Profile />,
        errorElement: <ErrorElement />,
        action: profileAction(store),
      },
    ],
  },
  {
    path: "/landing",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    loader: loginLoader,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    loader: registerLoader,
    action: registerAction(store),
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;

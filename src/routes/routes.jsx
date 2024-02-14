import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../pages/auth/login/authToken";
import { ProtectedRoute } from "./ProtectedRoute";

//Pages Import
import Login from "../pages/auth/login";
import EvaluationScreen from "../pages/EvaluationScreen";
import UserMain from "../pages/UserMain";
import Landing from "../pages/Landing";
import Sign_up from "../pages/auth/register/index";
import EssayGenerationLoading from "../pages/Loading";
import GenerationScreen from "../pages/GenerationScreen/index";
import axios from "axios";
import ReviewerDashboard from "../pages/ReviewerDashboard";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/auth/sign-up",
      element: <Sign_up />,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/evaluationScreen",
          element: <EvaluationScreen />,
        },
        {
          path: "/generationScreen",
          element: <GenerationScreen />,
        },
        {
          path: "/reviewerDashboard",
          element: <ReviewerDashboard />,
        },
        {
          path: "/userMain",
          element: <UserMain />,
        },
        {
          path: "/loading",
          element: <EssayGenerationLoading />,
        },
        {
          path: "/",
          element: <Landing />,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/d",
      element: <div>Home Page</div>,
    },
    {
      path: "/dd",
      element: <div>Login</div>,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;

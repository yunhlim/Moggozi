import { Navigate, useRoutes } from "react-router-dom";

// Layouts
import MainLayout from "./layout/MainLayout"
import AccountLayout from "./layout/AccountsLayout"
import ChallengeLayout from "./layout/ChallengeLayout"
import PostLayout from "./layout/PostLayout"
import StageLayout from "./layout/StageLayout"
import UserLayout from "./layout/UserLayout"

// Accounts
import Login from "./pages/accounts/Login"
import Signup from "./pages/accounts/Signup"
import UserUpdate from "./pages/accounts/UserUpdate"

// Challenge
import ChallengeDetail from "./pages/challenge/ChallengeDetail"
import ChallengeNew from "./pages/challenge/ChallengeNew"
import Challenges from "./pages/challenge/Challenges"
import ChallengeUpdate from "./pages/challenge/ChallengeUpdate"

// Post
import PostDetail from "./pages/post/PostDetail"
import PostNew from "./pages/post/PostNew"
import PostUpdate from "./pages/post/PostUpdate"

// Stage
import StageMain from "./pages/stage/StageMain"
import StageDetail from "./pages/stage/StageDetail"
import StageNew from "./pages/stage/StageNew"
import StageUpdate from "./pages/stage/StageUpdate"

// User
import UserPage from "./pages/user/UserPage"

// Main
import Mainpage from "./pages/MainPage"
// import SearchPage from "./pages/SearchPage"
import UnknownPage from "./pages/UnknownPage"

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { 
          element: <Navigate to="/" replace={true} />
        }, 
        {
          path: '/', 
          element: <Mainpage />
        },
      ],
    },
    {
      path: "/account",
      element: <AccountLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "userupdate",
          element: <UserUpdate />,
        },
      ],
    },
    {
      path: "/challenge",
      element: <ChallengeLayout />,
      children: [
        {
          path: "",
          element: <Challenges />,
        },
        {
          path: ":id",
          element: <ChallengeDetail />,
        },
        {
          path: ":id/update",
          element: <ChallengeUpdate />,
        },
        {
          path: "new",
          element: <ChallengeNew />,
        },
      ],
    },
    {
      path: "post",
      element: <PostLayout />,
      children: [
        {
          path: ":id", element: <PostDetail /> 
        },
        { 
          path: ":id/update", element: <PostUpdate /> 
        },
        { 
          path: "new", element: <PostNew />
        },
      ],
    },
    {
      path: "stage",
      element: <StageLayout />,
      children: [
        { 
          path: "", element: <StageMain /> 
        },
        { 
          path: ":id", element: <StageDetail /> 
        },
        { 
          path: ":id/update", element: <StageUpdate /> 
        },
        { 
          path: "new", element: <StageNew /> 
        }
      ],
    },
    {
      path: "/user",
      element: <UserLayout />,
      children: [
        { path: ":id", element: <UserPage /> },
      ],
    },
    { 
      path: "/*",
      element: <UnknownPage />
    }
  ]);
}

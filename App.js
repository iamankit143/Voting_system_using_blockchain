import React from "react";
import ReactDOM from "react-dom";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Login from "./Login";
import Signin from "./Signin";
import Voting from "./Voting";
import Admin from "./Admin";
import About from "./About";

const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };


const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/signin",
            element: <Signin/>,
        },
        {
            path:"/voting",
            element: <Voting/>,
        },
        {
            path:"/admin",
            element: <Admin/>
        },
        {
            path:"/about",
            element: <About/>
        }

      ],
    },
  ]);


  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);

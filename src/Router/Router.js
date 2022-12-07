import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import FromOne from "../Component/From/FromOne";
import FromTwo from "../Component/From/FromTwo";
import Home from "../Component/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element : <Main/>,
      errorElement: <ErrorPage/>,
      children : [
        {
            path: "/",
            element:<Home/>,
            children : [
                {
                    path: "/",
                    element: <FromOne/>,
                    
                },
                {
                    path: "fromtwo",
                    element: <FromTwo/>,
                    
                },
            ]
        }
      ]
    }
  ])

  export default router;

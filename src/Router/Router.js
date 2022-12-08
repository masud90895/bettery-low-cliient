import { createBrowserRouter } from "react-router-dom";
import Chart from "../Component/Chart/Chart";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import FromOne from "../Component/From/FromOne";
import FromTwo from "../Component/From/FromTwo";
import Home from "../Component/Home/Home";
import ResultPage from "../Component/ResultPage/ResultPage";
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
        },
        {
            path: "result",
            element: <ResultPage/>,
        },
        {
            path: "chart",
            element: <Chart/>,
        }
      ]
    }
  ])

  export default router;

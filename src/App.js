import { RouterProvider } from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Navbar from "./Design/Navbar";
import UILayer from "./Design/UILayer";
import Work from "./Components/Work";
import Extra from "./Components/Extra"


function App() {

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <UILayer/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    },
    
    {
        path: "/Project",
        element: <Projects/>,
    },
    
    {
      path: "/work",
      element: <Work/>,
  },
  
  {
    path: "/extra",
    element: <Extra/>,
  },
]);


return (
<div>
  
{<Navbar />}
<RouterProvider router={appRouter}/>

</div>
);
};

export default App;

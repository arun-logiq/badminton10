// import {} from "react-router"
import "./main.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "../Home";



const Main=()=> {
    return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        {/* <Route path="teams" element={<Teams />}> */}
          {/* <Route path=":teamId" element={<Team />} /> */}
          {/* <Route path="new" element={<NewTeamForm />} /> */}
          {/* <Route index element={<LeagueStanding s />} /> */}
        {/* </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
    )
}

export default Main;

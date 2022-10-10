import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { theme } from "Theme";
import { Navbar } from "components";
import About from "screens/About/About";
import Blog from "screens/Blog/Blog";
import Shop from "screens/Shop/Shop";
import OnlineCoaching from "screens/Shop/online-coaching/OnlineCoaching";
import AppMembership from "screens/Shop/app-membership/AppMembership";
import Sessions from "screens/Shop/Sessions/Sessions";
import StrengthCamp from "screens/Shop/strength-camp/StrengthCamp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/online_coaching' element={<OnlineCoaching />} />
          <Route path="/shop/app_membership" element={<AppMembership />}/>
          <Route path="/shop/sessions" element={<Sessions />}/>
          <Route path="/shop/strength_camp" element={<StrengthCamp />}/>
          <Route path="/" element={<Navigate to="/about" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

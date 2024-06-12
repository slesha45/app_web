import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

//Toast Config
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";
import UpdateProduct from "./pages/admin/update_product/UpdateProduct";
import AdminRoutes from "./protected_routes/AdminRoutes";
import UserRoutes from "./protected_routes/UserRoutes";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/*Admin routes*/}
        <Route element={<AdminRoutes />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path="/admin/update/:id" element={<UpdateProduct />} />
        </Route>

        {/*User routes*/}
        <Route element={<UserRoutes/>}></Route>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

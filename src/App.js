import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";
import Homepage from "./pages/homepage/Homepage";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar";

//Toast Config
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/*Admin routes*/}
        <Route path= '/admin/dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

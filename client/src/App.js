
import AdminPanel from './components/AdminPanel';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Protected from './components/Common/Protected';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer position="top-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         limit={1}
         pauseOnFocusLoss
         draggable
         pauseOnHover/>
    <Router>
      <Routes>
        <Route path="/" element={<Protected Comps={AdminPanel}/>}/>
        <Route path="/profile" element={<Protected Comps={Profile}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

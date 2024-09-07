import "./App.css";
import Navbar from "./components/Navbar";
import RouterConfig from "./config/RouterConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // react-toastify dan gelen CSS özelliklerimizin bizim projemize dahil olabilmesi için lazım

// <ToastContainer/> --> uyası mesajlarının animasyonlu çalışabilmesi için react-toastify dan gelen bir component

function App() {
  return (
    <div>
      <Navbar />
      <RouterConfig />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;

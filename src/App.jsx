import { ToastContainer } from "react-toastify";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        // autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <HomePage />
    </>
  );
}

export default App;

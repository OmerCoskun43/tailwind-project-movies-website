// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Matrix from "./components/Matrix";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Movies />
      <Matrix />
      <Blog />
      <Footer />
    </>
  );
}

export default App;

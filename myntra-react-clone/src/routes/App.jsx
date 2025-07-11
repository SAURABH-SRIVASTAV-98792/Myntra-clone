import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";
import FetchItems from "../components/fechItems";

function App() {
  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

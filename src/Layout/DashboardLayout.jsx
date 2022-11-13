import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
const DashboardLayout = () => {
  const [user] = useContext(AuthContext);
  return (
    <div className="dashboard">
      <Navbar />
      <section className="outlet">
        <main className="outlet-container">
          <Header user={user.profile.name} />
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;

import NavbarItem from "./NavbarItem";
import logo from "../../Assets/logos/digital-base.svg";
import youtube from "../../Assets/icons/youtube-api.svg";
import seo from "../../Assets/icons/seo-api.svg";
import music from "../../Assets/icons/music-engine.svg";
import payments from "../../Assets/icons/payments.svg";
import settings from "../../Assets/icons/settings.svg";
import profile from "../../Assets/icons/profile.svg";
import logout from "../../Assets/icons/logout.svg";

const Navbar = () => {
  return (
    <section className="navbar">
      <nav className="navbar-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {[
          { path: "/", text: "Youtube API", src: youtube },
          { path: "/seo", text: "SEO API", src: seo },
          { path: "/music", text: "Music Engine", src: music },
          { path: "/payments", text: "Payments", src: payments },
          { path: "/settings", text: "Settings", src: settings },
          { path: "/profile", text: "Profile", src: profile },
          { path: "/logout", text: "Log Out", src: logout },
        ].map((item, index) => (
          <NavbarItem key={index} {...item} />
        ))}
      </nav>
    </section>
  );
};

export default Navbar;

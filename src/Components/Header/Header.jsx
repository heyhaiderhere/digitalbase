import Icon from "../Icon";
import notification from "../../Assets/icons/notification.svg";

const Header = ({ user }) => {
  return (
    <div className="header">
      <section className="header-title">
        <h4>
          Welcome Back <span>{user}</span>
        </h4>
      </section>
      <section className="header-actions">
        <input className="header-search" type="search" placeholder="Search" />
        <div className="header-notification">
          <Icon src={notification} size={30} />
        </div>
      </section>
    </div>
  );
};

export default Header;

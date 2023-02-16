import "./Navbar.scss";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="discor">
          <GroupsOutlinedIcon />
        </div>
        <div className="languge">
          <span> العربية</span> <span> | </span> <span> الفرنسية</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import "./Navbar.scss";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import SettingsBackupRestoreOutlinedIcon from "@mui/icons-material/SettingsBackupRestoreOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { SchoolOutlined } from "@mui/icons-material";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
// import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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
      <div className="menu">
        <MenuOutlinedIcon/>

        <div className="menu-items">
        <ul>
        <li>
          <div className="item">
            الرئيسية
            <WidgetsOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
            التمدرس
            <MenuBookOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
            الموارد الرقمية
            <LiveTvOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
            التوجيه
            <ExploreOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
            الأنشطة الصفية
            <TvOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
            إعادة التوجيه
            <ExploreOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
            تدقيق المعطيات
            <SettingsBackupRestoreOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
            المساعدة
            <HelpOutlineOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
            مسابقات رياضية عن بعد
            <SchoolOutlined className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
            اسئلة و اجوبة 
            <EventNoteOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
          الرياضة المدرسية
            <SportsEsportsOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
          الأنشطة المندمجة
            <LiveTvOutlinedIcon className="icons" />
          </div>
        </li>
        <li>
          <div className="item">
          علبة الأفكار
            <NoteAltOutlinedIcon className="icons" />
          </div>
        </li>
      </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

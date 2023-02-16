import React, { useState } from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Calendar from "moedim";
import FlipCameraAndroidOutlinedIcon from "@mui/icons-material/FlipCameraAndroidOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

const Home = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <div className="left">
          <div className="top">
            <div className="top-container">أستعد لإختبار السلامة الطرقية</div>
          </div>
          <div className="conter">
            <div className="c_left">
              <div className="Icons">
                <BookmarkAddedOutlinedIcon className="icon" />
                <FlipCameraAndroidOutlinedIcon className="icon" />
              </div>
                <span>
                <p>(2)</p>التقويم والامتحانات{" "}
              </span>
            </div>
            <div className="c_right">
              <Calendar
                className="calender"
                value={value}
                onChange={(d) => setValue(d)}
              />
              <span>
                <p>(0)</p>عمل للإنجاز
              </span>
            </div>
          </div>
          <div className="bottom">
            <div className="b_left">
              <div className="top_l">
                <div className="Icons">
                  <BookmarkAddedOutlinedIcon className="icon" />
                  <FlipCameraAndroidOutlinedIcon className="icon" />
                </div>
                <span>
                  <p>(2)</p> آخر النقط
                </span>
              </div>
              <div className="items">
                <div className="item">
                  <div className="item_l">
                    <h2>19</h2>
                    <span>19/01</span>
                  </div>
                  <div className="item_r">
                    <h1>الفيزياء والكيمياء</h1>
                    <span>الأنشطة المندمجة</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item_l">
                    <h2>18</h2>
                    <span>19/01</span>
                  </div>
                  <div className="item_r">
                    <h1>الفيزياء والكيمياء</h1>
                    <span>الفرض الأول </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="b_right">
              <div className="Icons">
                <BookmarkAddedOutlinedIcon className="icon" />
                <FlipCameraAndroidOutlinedIcon className="icon" />
              </div>
              <span>
                <p>(0)</p>الغياب{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="right">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Home;

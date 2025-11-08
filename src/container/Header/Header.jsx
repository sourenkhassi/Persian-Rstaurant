import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="دنبال طعم جدید باشید" />
      <h1 className="app__header-h1">کلید غذاهای عالی</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        بنشینید و از غذاهای تازه و سنتی ما لذت ببرید. ما بهترین مواد را برای شما
        آماده می‌کنیم تا تجربه‌ای فراموش‌نشدنی داشته باشید.
      </p>
      <button type="button" className="custom__button">
        منو را ببینید
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

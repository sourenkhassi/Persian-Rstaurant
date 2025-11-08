import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="خبرنامه" />
      <h1 className="headtext__cormorant">مشترک خبرنامه ما شوید</h1>
      <p className="p__opensans">
        و هرگز آخرین به‌روزرسانی‌ها را از دست ندهید!
      </p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="آدرس ایمیل خود را وارد کنید" />
      <button type="button" className="custom__button">
        مشترک شوید
      </button>
    </div>
  </div>
);

export default Newsletter;

import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt="G_overlay" /> */}
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">درباره ما</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          ما رستورانی هستیم که به غذاهای سنتی ایرانی افتخار می‌کنیم. از بهترین
          مواد تازه استفاده می‌کنیم تا تجربه‌ای منحصر به فرد برای شما فراهم
          کنیم.
        </p>
        <button type="button" className="custom__button">
          بیشتر بدانید
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">تاریخچه ما</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          از سال‌ها پیش، ما در تلاش هستیم تا بهترین غذاهای ایرانی را به شما
          ارائه دهیم. از ریشه‌های سنتی گرفته تا نوآوری‌های مدرن، همیشه کیفیت را
          اولویت قرار داده‌ایم.
        </p>
        <button type="button" className="custom__button">
          بیشتر بدانید
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;

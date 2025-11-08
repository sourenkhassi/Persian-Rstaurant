import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="سخنان سرآشپز" />
      <h1 className="headtext__cormorant">آنچه ما به آن اعتقاد داریم</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            غذاهای سنتی ایرانی نه تنها طعم خوبی دارند، بلکه بخشی از فرهنگ ما
            هستند.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          ما در این رستوران تلاش می‌کنیم تا بهترین مواد را انتخاب کنیم و هر
          غذایی را با عشق آماده کنیم. کیفیت و رضایت مشتری اولویت ما است.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>احمد رضایی</p>
        <p className="p__opensans">سرآشپز و بنیان‌گذار</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;

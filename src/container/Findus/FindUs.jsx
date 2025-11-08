import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="تماس" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        ما را پیدا کنید
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">خیابان ولیعصر، پلاک ۱۲۳، تهران، ایران</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          ساعات کاری
        </p>
        <p className="p__opensans">شنبه تا چهارشنبه: ۱۰:۰۰ صبح - ۰۲:۰۰ شب</p>
        <p className="p__opensans">پنجشنبه تا جمعه: ۱۰:۰۰ صبح - ۰۳:۰۰ شب</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        از ما دیدن کنید
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;

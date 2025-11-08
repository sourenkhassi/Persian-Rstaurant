import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">تماس با ما</h1>
        <p className="p__opensans">خیابان ولیعصر، پلاک ۱۲۳، تهران، ایران</p>
        <p className="p__opensans">+۹۸ ۲۱ ۱۲۳۴ ۵۶۷۸</p>
        <p className="p__opensans">+۹۸ ۲۱ ۹۸۷۶ ۵۴۳۲</p>
      </div>

      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer_logo" /> */}
        <p className="p__opensans">
          &ldquo;بهترین راه برای پیدا کردن خود، گم شدن در خدمت به دیگران
          است.&rdquo;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">ساعات کاری</h1>
        <p className="p__opensans">شنبه تا چهارشنبه:</p>
        <p className="p__opensans">۰۸:۰۰ صبح - ۱۲:۰۰ شب</p>
        <p className="p__opensans">پنجشنبه تا جمعه:</p>
        <p className="p__opensans">۰۷:۰۰ صبح - ۱۱:۰۰ شب</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">۱۴۰۳ رستوران ایرانی. تمامی حقوق محفوظ است.</p>
    </div>
  </div>
);

export default Footer;

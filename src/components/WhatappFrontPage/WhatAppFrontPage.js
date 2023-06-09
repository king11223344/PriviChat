import React from "react";
import "./WhatappFrontPage.css";
import pic1 from "./images/mobile.png";
import pic2 from "./images/mobile2.png";
import pic3 from "./images/whatlogo.png";
// import { Link } from "react-router-dom";
import db from "../../firebase";
import { actionTypes } from "../../api/reducer";
import { useStateValue } from "../../api/StateProvider";
import { useState, useEffect } from "react";
import { auth, provider } from "../../firebase";
// import { Button } from "@material-ui/core";
const WhatAppFrontPage = () => {
  const [{}, dispatch] = useStateValue();
  const [data, setData] = useState();
  const queryParameters = new URLSearchParams(window.location.search);
  const chatId = queryParameters.get("chatId");
  useEffect(() => {
    const unsubscribe = db
      .collection(chatId)
      .doc("authorised")
      .onSnapshot((snapshot) => {
        setData(snapshot.data());
      });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(data);
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        if (data?.authorised.includes(result.user.email)) {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });
        } else {
          alert(result.user.email + " is not authorised user of this chatroom")
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="main">
      <nav>
        <div className="whatsapp_logo part_nav">
          <a to="/">
            <img src={pic3} alt="whatsapp_logo" width="40px" height="40px" />
            <span>WhatsApp clone</span>
          </a>
        </div>
        <ul className="nav_options part_nav">
          <li>
            <a href="https://web.whatsapp.com/">WHATSAPP WEB</a>
          </li>
          <li>
            <a href="https://www.whatsapp.com/features">FEATURES</a>
          </li>
          <li>
            <a href="https://whatsgbplus.com/gbdirectlink/">DOWNLOAD</a>
          </li>
          <li>
            <a href="https://www.whatsapp.com/security">SECURITY</a>
          </li>
          <li>
            <a href="https://faq.whatsapp.com/">FAQ</a>
          </li>
          <li className="dropdown_main">
            <i className="fas fa-globe"></i>{" "}
            <span>
              {" "}
              EN <i className="fas fa-sort-down"></i>
            </span>
          </li>
          <li>
            <button
              onClick={signIn}
              type="button"
              className="login-with-google-btn"
            >
              Sign In with Google
            </button>
          </li>
        </ul>

        <div className="short_nav">
          <div className="google-auth">
            <button
              onClick={signIn}
              type="button"
              className="login-with-google-btn"
            >
              Sign In with Google
            </button>
          </div>
          <span id="dropdown">
            <i className="fas fa-bars"></i>
            <ul>
              <a href="https://web.whatsapp.com/">
                <li>WHATSAPP WEB</li>
              </a>
              <a href="https://www.whatsapp.com/features">
                <li>FEATURES</li>
              </a>
              <a href="https://whatsgbplus.com/gbdirectlink/">
                <li>DOWNLOAD</li>
              </a>
              <a href="https://www.whatsapp.com/security">
                <li>SECURITY</li>
              </a>
              <a href="https://faq.whatsapp.com/">
                <li>FAQ</li>
              </a>
              <li className="dropdown_main">
                <i className="fas fa-globe"></i>{" "}
                <span>
                  {" "}
                  EN <i className="fas fa-sort-down"></i>
                </span>
              </li>
            </ul>
          </span>
          <p>
            <a to="/">
              <img
                src="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png"
                alt="whatsapp_logo"
                width="70px"
                height="70px"
              />
            </a>{" "}
            <br /> WhatsApp Clone
          </p>
        </div>
      </nav>

      <div className="content_body">
        <div className="upper_content">
          <div className="simple_intro">
            <h2>
              Simple. Secure.
              <br />
              Reliable messaging.
            </h2>
            <p>
              With WhatsApp, you'll get fast, simple, secure messaging and
              calling for free*, available on phones all over the world.
              <br />
              <br />
              <span id="highlight_detail">
                * Data charges may apply. Contact your provider for details.
              </span>
            </p>

            <ul className="details_list">
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.whatsapp">
                  <i className="fab fa-android"></i> Android
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/us/app/whatsapp-messenger/id310633997">
                  <i className="fab fa-apple"></i> Iphone
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/download">
                  <i className="fas fa-desktop"></i> Mac or Windows PC
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile_image">
            <img src={pic1} alt="Mobile Whatsapp" />
          </div>
        </div>
        <div className="lower_content">
          <div className="lower_first">
            <h2>WhatsApp Business App</h2>
            <p>
              <a
                href="https://www.whatsapp.com/business"
                className="marked_business"
              >
                WhatsApp Business
              </a>{" "}
              is a free to download app that was built with the small business
              owner in mind. Create a catalog to showcase your products and
              services. Connect with your customers easily by using tools to
              automate, sort and quickly respond to messages.
              <br />
              <br />
              <br />
              WhatsApp can also help medium and large businesses provide
              customer support and deliver important notifications to customers.
              <a
                href="https://www.whatsapp.com/business/api"
                className="marked_business"
              >
                {" "}
                Learn more about WhatsApp Business API.
              </a>
              .
            </p>
            <br />
            <img src={pic2} alt=" of mobile" />
          </div>

          <div className="lower_second">
            <div className="animated_box">
              <div id="box_animation">
                <p>Hello!😍</p>
              </div>
            </div>
            <p>END-TO-END ENCRYPTION</p>
            <h2>Security By Default</h2>
            <p>
              Some of your most personal moments are shared on WhatsApp, which
              is why we built end-to-end encryption into the latest versions of
              our app. When end-to-end encrypted, your messages and calls are
              secured so only you and the person you're communicating with can
              read or listen to them, and nobody in between, not even WhatsApp.
            </p>
          </div>
        </div>
        <div className="explore_button">
          <a href="https://www.whatsapp.com/features">EXPLORE FEATURES</a>
        </div>
      </div>
      <footer>
        <br />
        <div className="bottom_options">
          <ul>
            <h4>Whatsapp</h4>
            <li>
              <a href="https://www.whatsapp.com/features">Features</a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/security">Security</a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/download">Download</a>
            </li>
            <li>
              <a href="https://web.whatsapp.com/">WhatsApp Web</a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/business">Business</a>
            </li>
          </ul>
          <ul>
            <h4>Company</h4>
            <li>
              <a href="https://www.whatsapp.com/about">About</a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/join">Careers</a>
            </li>
            <li>
              <a href="https://www.facebook.com/brand/resources/whatsapp/whatsapp-brand">
                Brand Center
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/contact">Get In Touch</a>
            </li>
            <li>
              <a href="https://blog.whatsapp.com/">Blog</a>
            </li>
          </ul>
          <ul>
            <h4>Download</h4>
            <li>
              <a href="https://www.whatsapp.com/download">Mac/PC</a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/android">Android</a>
            </li>
            <li>
              <a href="https://apps.apple.com/us/app/whatsapp-messenger/id310633997">
                iPhone
              </a>
            </li>
          </ul>
          <ul>
            <h4>Help</h4>
            <li>
              <a href="https://faq.whatsapp.com/">FAQ</a>
            </li>
            <li>
              <a href="https://twitter.com/whatsapp">Twiter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/WhatsApp">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="bottom_line">
          <p>2022 @CopyRight; My Inc</p>
          <p>
            <a href="https://www.whatsapp.com/legal/"> Privacy & Terms</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WhatAppFrontPage;

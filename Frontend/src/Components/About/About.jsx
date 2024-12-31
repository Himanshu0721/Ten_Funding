import React from "react";
import "./About.css";
import MainImage from "../../assets/images/about-main-image.png";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function About() {
  const navigate = useNavigate();

  const handleButtonFindInvestors = () => {
    navigate("/");
  };

  const handleButtonFindJobs = () => {
    navigate("/launchpad");
  };

  const [text] = useTypewriter({
    words: [
      "find investors",
      "fund ideas",
      "hire talent",
      "get hired",
      "build startups",
    ],
    loop: {},
  });

  return (
    <div className="about-container">
      <h1>
        One platform to{" "}
        <span>
          {text}
          <Cursor />
        </span>
      </h1>
      <div className="about-main-div">
        <img src={MainImage} alt="main image" />
        <div className="about-main-buttons">
          <button
            className="about-main-button1"
            onClick={handleButtonFindInvestors}
          >
            Find Investors
          </button>
          <button className="about-main-button2" onClick={handleButtonFindJobs}>
            Find VC Jobs
          </button>
        </div>
      </div>
      <p>
        Startups, VCs, and folks in between - we have something for everyone.
        And they love us for it.
      </p>

      <div class="scrolling">
        <div class="scrolling-content scroll">
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c9c8122c14cd7eb4571_unscrript.webp"
            loading="lazy"
            width="Auto"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna.webp"
            loading="lazy"
            width="Auto"
            height="40"
            alt=""
            srcset="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-500.webp 500w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-800.webp 800w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-1080.webp 1080w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-1600.webp 1600w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-2000.webp 2000w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-2600.webp 2600w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna.webp 3072w"
            sizes="120px"
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c1f5063aad4d71de3a3_Economize%20Logo.webp"
            loading="lazy"
            alt=""
            height="40"
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66564152364eee0d69082ecd_Floworks%20Image.png"
            loading="lazy"
            alt=""
            height="40"
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC.png"
            loading="lazy"
            sizes="143.296875px"
            height="40"
            alt=""
            srcset="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC-p-500.png 500w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC-p-800.png 800w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC-p-1080.png 1080w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC.png 1433w"
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates.jpg"
            loading="lazy"
            sizes="112.65625px"
            height="40"
            alt=""
            srcset="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates-p-500.jpg 500w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates-p-800.jpg 800w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates.jpg 1259w"
          />
        </div>
        <div class="scrolling-content scroll">
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c9c8122c14cd7eb4571_unscrript.webp"
            loading="lazy"
            alt=""
            height="40"
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna.webp"
            loading="lazy"
            sizes="120px"
            height="40"
            alt=""
            srcset="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-500.webp 500w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-800.webp 800w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-1080.webp 1080w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-1600.webp 1600w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-2000.webp 2000w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna-p-2600.webp 2600w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna.webp 3072w"
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c1f5063aad4d71de3a3_Economize%20Logo.webp"
            loading="lazy"
            width="Auto"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66564152364eee0d69082ecd_Floworks%20Image.png"
            loading="lazy"
            alt=""
            height="40"
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC.png"
            loading="lazy"
            sizes="143.296875px"
            height="40"
            alt=""
            srcset="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC-p-500.png 500w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC-p-800.png 800w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC-p-1080.png 1080w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC.png 1433w"
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates.jpg"
            loading="lazy"
            sizes="112.65625px"
            height="40"
            alt=""
            srcset="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates-p-500.jpg 500w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates-p-800.jpg 800w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates.jpg 1259w"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

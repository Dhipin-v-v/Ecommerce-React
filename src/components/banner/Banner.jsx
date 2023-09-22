import BannerImg from "../../assets/images/banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

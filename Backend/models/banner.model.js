import mongoose from "mongoose";
const BannerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    subtite: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

const Banner = mongoose.model("Banner", BannerSchema);
export default Banner;

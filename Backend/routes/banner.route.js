import express from "express";
const router = express.Router();
import {
  createBanner,
  getAllBanners,
  deleteBanner,
  getRandomBanner,
} from "../controllers/banner.controller.js";

// CREATE BANNER ROUTE
router.post("/", createBanner);

//GET ALL BANNERS ROUTE
router.get("/", getAllBanners);

// DELETE BANNERS ROUTE
router.delete("/:id", deleteBanner);

// GET RANDOM BANNER
router.get("/random", getRandomBanner);
export default router;

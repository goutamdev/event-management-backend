// Author: Goutam Chandra Gharami
// Email: dev.goutam05@gmail.com

import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createEvent, getEvents, updateEvent, deleteEvent } from "../controllers/eventController.js";

const router = express.Router();

router.route("/")
  .get(getEvents)
  .post(protect, createEvent);

router.route("/:id")
  .put(protect, updateEvent)
  .delete(protect, deleteEvent);

export default router;

const express = require("express");
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {isLoggedIn, validateReview, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controller/reviews.js");


//Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.addReview));

//Review Delete Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destoryReview));

module.exports = router;
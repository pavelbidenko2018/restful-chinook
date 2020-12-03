const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("hello from API");
});

router.use("/Albums", require("./albums/routes"));
router.use("/Artists", require("./artists"));
router.use("/Genres", require("./genres"));
router.use("/MediaTypes", require("./media-types"));
router.use("/Playlists", require("./playlists"));
router.use("/Tracks", require("./tracks"));

module.exports = router;

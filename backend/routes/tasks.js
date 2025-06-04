const express = require("express");
const router = express.Router();
// There is a bug in line 4 you need to fix it
const taskModel = require("../models/taskModel");

//Use the router to send a request to let it respond to the user back, and the computer will take its time to get the task done as the user expand the task requirements. The website is just a website, and not in the server just, yet. It will be connected by using the URL end points to connect to a brower, google chrome.
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// The server is in URL, which most websites have https on it; using this code from the server, the HTML will respond from it. The code makes URL end points for the user to navigate to a browser.
router.post("/", async (req, res) => {
  //there is a bug in line 15 you need to fix
  console.log(req.body);
  const { title, description } = req.body;
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;

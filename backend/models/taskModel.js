const db = require("../db");

//The request from this server is select the tasks in order by created at DESC, and it will select all the task. The * means every tasks, which every task that people put in the website will let the computer put them in order. The respond is it must complete the request if it's clear for the computer to do it. The tasks will be returned into rows creating a huge lists that cause Murphy to stress out because there's too many tasks to handle.
const getTasks = async () => {
  const res = await db.query(
    //correct this SQL query to select all tasks from the database
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );
  return res.rows;
};

//The task will be for the title and description to wait for the computer to put 0 rows as it's responding to the request, and there's specicfic tasks and values that will be ruturned from the computer (doing some coding binary stuff) too. It must fulfill this request. The request also need to be clear or else there will be a error.
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
// const port= process.env.PORT || 5000;
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

const users = [
  {
    id: 1,
    name: "Showrov",
    city: "Chittagong",
    email: "showrov@gmail.com",
  },
  {
    id: 2,
    name: "Rassel",
    city: "Shylet",
    email: "rassel@gmail.com",
  },
  {
    id: 3,
    name: "Tushan",
    city: "Dhaka",
    email: "tushan@gmail.com",
  },
  {
    id: 4,
    name: "Rabbi",
    city: "Barishal",
    email: "rabbi@gmail.com",
  },
  {
    id: 5,
    name: "Pranto",
    city: "Noakhali",
    email: "pranto@gmail.com",
  },
];

//Using query parameter to get Data
app.get("/abcd", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  console.log("nothing", req.body);
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
  // res.send(JSON.stringify(newUser));
});
//  Getting All Users Data
app.get("/users", (req, res) => {
  res.send(users);
});

// Using Dynamic API to get Data
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});

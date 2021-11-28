import express from "express";
import { getNews } from "../controller/news-controller.js";
import User from "../modal/user.js";
import Bookmarks from "../modal/bookmarks.js";

const route = express.Router();

route.get("/news", getNews);

route.post("/login", (req, res) => {
  let token;
  const { email, password } = req.body;

  User.findOne({ email: email }, async (err, user) => {
    if (user) {
      token = await user.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 86400000),
        httpOnly: true,
      });

      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

route.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

route.post("/bookmarks", (req, res) => {
  const {
    name,
    email,
    author,
    content,
    date,
    imageUrl,
    readMoreUrl,
    time,
    title,
    url,
  } = req.body;

  Bookmarks.findOne({ email: email, title: title }, (err, user) => {
    if (user) {
      res.send({ message: "Already Bookmarked" });
    } else {
      const bookmarks = new Bookmarks({
        name,
        email,
        author,
        content,
        date,
        imageUrl,
        readMoreUrl,
        time,
        title,
        url,
      });
      bookmarks.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Bookmarked the news" });
        }
      });
    }
  });
});

export default route;

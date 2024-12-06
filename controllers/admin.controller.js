const CategoryModel = require("../models/category.model");
const PostModel = require("../models/post.model");

exports.getAdmin = (req, res) => {
  res.render("../views/admin.page.ejs");
};

//Post--------------
exports.getManagePosts = (req, res) => {
  res.render("../views/post-admin.ejs");
};

exports.getManageCreatePost = (req, res) => {
  res.render("../views/post-create.ejs");
};

//Category----------
exports.getManageCategory = (req, res) => {
  res.render("../views/category-admin.ejs");
};

exports.getManageCreateCategory = (req, res) => {
  res.render("../views/category-create.ejs");
};

exports.getCommentsPost = (req, res) => {
  res.render("../views/comments-blog.ejs");
};


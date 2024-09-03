const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true, // Ensure you get the created user instances back
  });

  // Map user IDs to blogs
  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // Create Blogs with associated user_id
  // await Blog.bulkCreate(updatedBlogData);

  // Create Comments
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      blog_id: 1,
    });
  }
  
  const updatedCommentData = commentData.map((comment, index) => {
    return {
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      blog_id: 1,
    };
  });
  await Comment.bulkCreate(updatedCommentData);

  process.exit(0);
};


seedDatabase();
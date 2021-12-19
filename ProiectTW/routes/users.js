const User = require("../Models/users");
const Post = require("../Models/post");
const { Op } = require("sequelize");

const router = require("express").Router();
// Rute de get si post pentru utilizatori(afisare toti utilizatorii/adaugare utilizator)
router
  .route("/users")
  .get(async (req, res) => {
    try {
      const { addr } = req.query;

      const users = await User.findAll({
        where: addr
          ? {
              address: { [Op.eq]: addr },
            }
          : undefined,
      });
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      return res.status(200).json(newUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  });
// Rute de get si put pentru utilizatori dupa id(afisare utilizator cu un anumit id/ modificarea acestuia)
router
  .route("/users/:id")
  .get(async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ error: "user not found" });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        const updatedUser = await user.update(req.body);
        return res.status(200).json(updatedUser);
      } else {
        return res.status(404).json({ error: "user not found" });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });
//   Rute de get si post pentru postari(afisare/adaugare)
router
  .route("/posts")
  .get(async (req, res) => {
    try {
      const posts = await Post.findAll();
      return res.status(200).json(posts);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newPost = await Post.create(req.body);
      return res.status(200).json(newPost);
    } catch (err) {
      return res.status(500).json(err);
    }
  });
//   Ruta post pentru crearea unui post pentru un anumit user
router
  .route("/users/:userId/posts")
  .post(async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId);
      if (user) {
        const post = new Post(req.body);
        post.UserId = user.id;
        await post.save();
        res.status(201).json({ message: "post created" });
      } else {
        res.status(404).json({ message: "user not found 404" });
      }
    } catch (err) {
      next(err);
    }
  })
  //   Ruta get pentru returnarea postarilor unui anumit user
  .get(async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId, {
        include: [Post],
      });
      if (user) {
        res.status(200).json(user.Posts);
      } else {
        res.status(400).json({ message: "404 - user not found" });
      }
    } catch (err) {
      next(err);
    }
  });
//   Ruta put pentru modificarea unei anumite postari dupa id-ul dat in ruta pentru un anumit user al carui id este dat tot in ruta
router.route("/users/:userId/posts/:postId").put(async (req, res, next) => {
  try {
    user = await User.findByPk(req.params.userId);
    if (user) {
      const posts = await user.getPosts({ id: req.params.postId });
      const post = posts.shift();
      if (post) {
        post.text = req.body.text;
        post.product = req.body.product;
        post.category = req.body.category;
        post.expirationDate = req.body.expirationDate;
        await post.save();
        res.status(202).json({ message: "Post updated" });
      } else {
        res.status(404).json({ message: "post not found" });
      }
    } else {
      res.status(404).json({ message: "404-user not found" });
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;

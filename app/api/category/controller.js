const { Category } = require('../../db/models')

module.exports = {
  getAllCategories: async (req, res, next) => {
    try {
      // console.log(req.user)
      const categories = await Category.findAll({
        where: {
          // untuk mengambil data berdasarkan user
          user: req.user.id
        },
        attributes: ['id', 'name']
      });

      res.status(200).json({
        message: "Get all categories successfully",
        data: categories
      })

    } catch (err) {
      next(err)
    }
  },
  createCategories: async (req, res, next) => {
    try {
      const { name } = req.body;
      const categories = await Category.create({
        name,
        user: req.user.id
      })

      res.status(201).json({
        message: "Create category successfully",
        data: categories
      })
    } catch (err) {
      next(err)
    }
  },

  updateCategories: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const checkCategory = await Category.findOne(
        {
          where: {
            id,
            user: req.user.id
          }
        }
      )

      const categories = await checkCategory.update({ name })
      res.status(200).json({
        message: "Update category successfully",
        data: categories
      })
    } catch (err) {
      next(err)
    }
  },

  deleteCategories: async (req, res, next) => {
    try {
      const { id } = req.params;
      const checkCategory = await Category.findOne(
        {
          where: {
            id,
            user: req.user.id
          }
        }
      )
      const categories = await checkCategory.destroy()
      res.status(200).json({
        message: "Delete category successfully",
        data: categories
      })
    } catch (err) {
      next(err)
    }
  }
}
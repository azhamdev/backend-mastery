// 1. saya perlu import dari models yang diperlukan

const { User } = require('../../db/models')

// 2. saya mengimport bcrypt untuk enskripsi password dan dibaca oleh sistem 
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')

// 3. saya membuat module export suapaya bisa digunakan di luar main
module.exports = {
  // 4. saya perlu menuliskan nama functionnya dan menggunakan async dengan arrow function

  // 5. dalam function memiliki 3 parameter req, res dan next
  signIn: async (req, res, next) => {

    // 6. try catch untuk menangani error
    try {
      // 7. memanggil model user untuk menampilkan data
      const { email, password } = req.body;
      // 8. chek user menggunakan await untuk memanggil 1 data dengan dicek email untuk validasi
      const checkUser = await User.findOne({
        where: {
          email: email,
        }
      })

      // 9. jika ada maka akan dicek password

      if (checkUser) {
        // 10. mengenkripsi password
        const checkPassword = bcrypt.compareSync(password, checkUser.password);

        // 11. jika password cocok maka login
        if (checkPassword) {
          const token = jwt.sign({
            user: {
              id: checkUser.id,
              name: checkUser.name,
              email: checkUser.email
            }
          }, 'secret')
          res.status(200).json({
            message: "Success Signin",
            data: token
          })
        } else {

          res.status(403).json({
            message: 'Invalid password'
          })
        }

      } else {
        res.status(403).json({
          message: 'Invalid email'
        })
      }
    } catch (err) {
      // 12. saya perlu menampilkan error dengan console.log dan next 
      console.log(err)
      next(err);
    }
  },

  signUp: async (req, res, next) => {
    try {
      const { name, email, password, confirmPassword } = req.body;
      if (password != confirmPassword) {
        res.status(403).json({
          message: "Password doesn't match"
        })
      }

      const checkEmail = await User.findOne({
        where: {
          email: email
        }
      })

      if (checkEmail) {
        return res.status(403).json({
          message: "Email already registered"
        })
      }

      const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        role: "admin"
      })

      // console.log(user)
      delete user.dataValues.password;

      res.status(201).json({
        message: "Success Signup",
        data: user
      })

    } catch (err) {
      next(err)
    }
  }
}
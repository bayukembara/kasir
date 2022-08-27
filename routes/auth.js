const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validation');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
// Validate Data
// const {error} = schema.validate(req.body);
const {error} = registerValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

// Make unique user

const emailExist = await User.findOne({email:req.body.email});
if(emailExist) return res.status(400).send('Email already exists');

// Hash Password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({user: user._id});
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  const {error} = loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  // checking the email doesn't exists
  const user = await User.findOne({email:req.body.email});
  if(!user) return res.status(400).send('Email does not exists');
  // Password checking
  const valid = await bcrypt.compare(req.body.password, user.password);
  if(!valid) return res.status(400).send('Invalid Password');

  // create and assign a token
  const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
  res.header('auth-token',token).send(token);

});




module.exports = router;
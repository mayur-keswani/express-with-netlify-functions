const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  return res.status(200).json({message:"Express with Netlify-Functions"})
});

module.exports=router
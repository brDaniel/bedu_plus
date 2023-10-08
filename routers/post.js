const express = require('express');
const router = express.Router();

router.get('/post',function(request, response){
    response.send("Post")
})

module.exports = router
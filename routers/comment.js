const express = require('express');
const router = express.Router();
router.get('/comment',function(request,response){
    response.send('Comments')
})

module.exports = router
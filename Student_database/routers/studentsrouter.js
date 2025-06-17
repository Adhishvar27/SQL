const express=require('express');
const router=express.Router();

const studentcontroller=require('../controllers/studentcontroller');

router.post('/',studentcontroller.adduser);
router.get('/',studentcontroller.getuser);
router.put('/:id',studentcontroller.updateuser);
router.delete('/:id',studentcontroller.deleteuser);
router.post('/adduserwithidcard',studentcontroller.addUserWithTheIDCardNumber);
router.post('/adduserwiththedept',studentcontroller.adduserwiththedept);

module.exports=router;
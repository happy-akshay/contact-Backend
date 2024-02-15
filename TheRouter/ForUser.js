const express=require('express')
const {FileCreate,GetFile,FileUpdated, FileDeleted, FileSearch}=require('../Auth/UserAuth')
const router=express.Router()

router.route("/created").post(FileCreate)
router.route("/getall").get(GetFile)
router.route("/userUpdated/:id").put(FileUpdated)
router.route("/userdeleted/:id").delete(FileDeleted)

module.exports=router
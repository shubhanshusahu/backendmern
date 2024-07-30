// const GetAllForms = require('../services/form.service')
// const SaveFormService = require('../services/form.service')
var FormService = require('../services/form.service')


  async function SaveFormController(req,res){
    try{
        let formSaved = await FormService.SaveFormService(req)
        res.send({
            status: 201,
            message: "Successfully submitted!!!",
          })
        // res.status(200).json({)
    }
    catch(e){
        console.log(e.message)
        res.status(400).json(e.message)
    }
}
async function DisplayController(req,res){
    try{
        let details = await FormService.GetAllForms()
        res.send({
            status: 200,
            data: details
          })
        // res.status(200).json({)
    }
    catch(e){
        throw new Error(e.message)
    }
}
module.exports = {SaveFormController,DisplayController}
// module.exports = SaveFormController
// module.exports = DisplayController


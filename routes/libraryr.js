const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
const Library=require("../models/library")

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

//post
router.post('/library',async(req,res)=>{
    const library =new Library({
        Name:req.body.Name,
        Author:req.body.Author,
        Remarks:req.body.Remarks,
    });
    try{
        const newLibrary=await library.save()
        res.status(201).json(newLibrary);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }        
});
//get
router.get('/library',async(req,res)=>{
    try{
        const libraries = await Library.find().sort({date:-1});
        res.json(libraries);
    }catch(error){
        res.status(500).json({message:error.message});
    }
    });
    //put
    router.put("/library/:id", async (req, res) => {//9
        try{
            const updatedLibrary=await Library.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.json(updatedLibrary);
     }
    catch(error){
        res.status(400).json({message:error.message})
    }});
//delete
router.delete("/library/:id",async(req, res) => {
    try{
        await Library.findByIdAndDelete(req.params.id);
        res.json({message:"Library details DELETED"});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})





module.exports=router;
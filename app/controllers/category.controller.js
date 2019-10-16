const categoryModel =  require('../models/categories.model.js');

exports.create = (req,res) =>{
    if(!req.body.name) { 
        return status(400).send({
            message:"name can't be empty"
        });
    };

    const createCategory = new categoryModel({
        name:req.body.name,
        phone_number:req.body.phone_number,
        person_details:req.body.person_details
    })

    createCategory.save().then(data=>{res.send(data)}).catch(err=>{
        res.status(500).send({
            message:err.message || 'something went wrong at create'
        });
    });

};

exports.findAll = (req,res)=>{
    categoryModel.find().then(cateory=>{res.send(cateory)}).catch(err=>{res.status(500).send({
        message: err.message || "Something went wrong."
    })})
};

exports.findOne = (req,res) => {
    categoryModel.findById(req.params.categoryId).then(category=>{
        if(!category){
            return res.status(404).send({
                message: "Category does not exist"
            }); 
        }
        res.send(category)
    }).catch(err=>{
        return res.status(500).send({message:'something went wrong'})
    });
};

exports.update = (req,res)=>{
    if(req.body.name) { 
        return res.status(400).send({message:'name should not be empty !'});
    }
console.log(req.params.categoryId)
    categoryModel.findByIdAndUpdate(req.params.categoryId,{
        name:req.body.name,
        phone_number:req.body.phone_number,
        person_details:req.body.person_details
    },{new:true}).then(category=>{
        if(!category) { 
            return res.status(400).send({message:'category not exist'});
        }
        res.send(category);
    }).catch(err=>{
        return res.status(500).send({message:'Something went wrong'
    });
});

};

exports.delete = (req,res) =>{
    categoryModel.findByIdAndremove(req.params.categoryId).then(category=>{
        if(!category) { 
            return res.status(400).send({
                message:'Category does not exist'
            })
        }
        res.send({message:`Category deletes Successfully with ID : ${req.params.categoryId}`})
    })
}
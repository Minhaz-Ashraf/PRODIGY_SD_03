import formDetail from "../models/formDetail.js";

export const detailController = async (req, res) => {
  try {
    const { name, contact, email } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "name is required" });
    }
    if (!contact) {
      return res.send({ message: "contact number is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }

    const formdetails = await new formDetail({
      name,
      contact,
      email,
    }).save();

    res.status(201).send({
      success: true,
      message: "Contact added Successfully",
      formdetails,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in form submission",
      error,
    });
  }
};

//get all controller

export const getallController = async (req, res) => {
  
     formDetail.find({})
     .then(users => res.json(users))
     .catch(error => console.log(error))

  }


// get contacts by id and update
export const getbyidController = async (req, res) => {
  
  const id = req.params.id;
 await formDetail.findById({_id:id})
  .then(users => res.json(users))
  .catch(error => console.log(error))
};

//update contacts
export const updateController = async(req, res) =>{
    const id = req.params.id;
     await formDetail.findByIdAndUpdate({_id:id}, {
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email
    })
    .then(users => res.json(users))
    .catch(error => console.log(error))
}

// Delete controllers

export const deleteController = async (req, res) => {
  try{
    const id = req.params.id;
    const contacts = await formDetail.findByIdAndDelete({_id: id});
    res.status(200).send({
      success: true,
      menubar: "Contacts updated successfully",
      contacts,
      })
  }catch(error){
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Delete the contacts",
    });
  }
}
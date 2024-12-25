const userModel = require("../model/userModel");

module.exports = {
    postUserService: async(requestBody)=>{
        try{
    const {firstName, 
           lastName, 
           emailId, 
           phoneNumber, 
           password
          } = requestBody;
          console.log(firstName, lastName, emailId)
    const user = new userModel(
        {first_name: firstName, 
        last_name: lastName, 
        email_id: emailId , 
        phone_number: phoneNumber, 
        password: password});
    const response = await user.save();
    //const response = await userModel.save();
    return response;
    } catch(err) {
        console.log(err);
      }
    },
    putUserService: async(requestBody, id)=>{
        const {email, firstName, lastName} = requestBody;
        const response = await userModel.updateOne({
            _id:id,
        },
        {
            $set:{
                email_id: email,
                first_name: firstName,
                last_name: lastName,
            },
        }
    );
    return response;
    },
    patchUserService: async(requestBody, id)=>{
        const {email} = requestBody;
        const response = await userModel.updateOne({_id:id},{$set:{email_id:email},});
        return response;
    },
    getAllUsersService: async (query)=>{
        const response = await userModel.find({});
        console.log(response);
        return response;
    },
    deleteUserService: async(id)=>{
        const response = await userModel.deleteOne({_id:id});
        return response;
    },
};
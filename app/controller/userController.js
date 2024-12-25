const userService = require("../../service/userService");
module.exports = {
    getUsers: async (req, res, next) => { 
     const { query } = req;
     const response = await userService.getAllUsersService(query);
     res.json(response); 
    },
    postUsers: async(req, res, next) => {
      const { body } = req;
      const response = await userService.postUserService(body);
      res.json({ message: "Successfully inserted the record"});
    },
    patchUsers: async(req, res, next) => {
        try{
          const { body, params } = req;
          const { id } = params;
          const response = await userService.patchUserService(body, id);
          res.json(response); 
        }
        catch(err) {
          console.log(err);
        }
    },
    deleteUsers: async(req, res, next) => {
        const { params, body } = req;
        const { id } = params;
        const response = await userService.deleteUserService(id);
        res.json(response);
    },
    putUsers: async(req, res, next) => {
        const { params, body } = req;
        const { id } = params;
        const response = await userService.putUserService(body, id);
        res.json(response);
    },
};
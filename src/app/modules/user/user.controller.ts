import userService from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const createAdmin = catchAsync(async (req, res, next) => {
  const adminData = req.body;
  const createdAdminData = await userService.insertAdminInfoInDB(adminData);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Admin created   successfully",
    data: createdAdminData,
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const userData = req.body;
  const createUserData = await userService.insertUserInfoInDB(userData);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User created   successfully",
    data: createUserData,
  });
});
const  getUsers = catchAsync(async (req,res)=>{
  const users = await userService.getUserFromDB();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Users retrived   successfully",
    data: users,
  });

})
const userController = {
  createAdmin,
  createUser,
  getUsers
};
export default userController;

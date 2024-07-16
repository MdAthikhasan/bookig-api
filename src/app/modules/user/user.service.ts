import { TAdmin } from "../admin/admin.interface";
import { AdminModel } from "../admin/admin.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const insertAdminInfoInDB = async (payload: TAdmin) => {
  const createdAdminData = await AdminModel.create(payload);
  return createdAdminData;
};
const insertUserInfoInDB = async (payload: TUser) => {
  const createUserData = await User.create(payload);
  return createUserData;
};
const getUserFromDB = async () => {
  const allUsers = await User.find();
  return allUsers;
};
const userService = {
  insertAdminInfoInDB,
  insertUserInfoInDB,
  getUserFromDB,
};
export default userService;

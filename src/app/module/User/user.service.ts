import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (studentData: TUser) => {
  const result = await User.create(studentData);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};

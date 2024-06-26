import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

// Below you can see the application of catchAsync function.
const createStudent = catchAsync(async (req, res) => {
  const { student: studentData } = req.body;

  const result = await UserServices.createUserIntoDB(studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is created successfully",
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};

import * as Yup from "yup";

export const userInfoSchema = Yup.object({
  firstName: Yup.string().required("FirstName is a required field"),
  middleName: Yup.string().required("MiddleName is a required field"),
  lastName: Yup.string().required("LastName is a required field"),
  mobileno: Yup.number().required("MobileName is a required field"),
  email: Yup.string().required("Email is a required field"),
  age: Yup.number().required("Age is a required field"),
  bloodgroup: Yup.string().required("BloodGroup is a required field"),
  birthday: Yup.string().required("Birthday is a required field"),
  height: Yup.number().required("Height is a required field"),
  weight: Yup.number().required("Weight is a required field"),
  gender: Yup.string().required("Please select your gender"),
  maritalstatus: Yup.string().required("Please select your marital status"),
});

export const addressDetailsSchema = Yup.object({
  addressLine1: Yup.string().required("AddressLine1 is a required field"),
  addressLine2: Yup.string().required("AddressLine2 is a required field"),
  city: Yup.string().required("City is a required field"),
  state: Yup.string().required("State is a required field"),
  country: Yup.string().required("Country is a required field"),
  pincode: Yup.number().required("PinCode is a required field"),
});
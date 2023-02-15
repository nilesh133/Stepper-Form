import React, { createContext, useState } from 'react';

export const CodeContext = createContext(null);
const ContextProvider = ({ children }) => {
    const steps = ['USER INFORMATION', 'ADDRESS DETAILS', 'Thank You'];

    const [activeStep, setActiveStep] = useState(0);

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        mobileno: "",
        email: "",
        birthday: "",
        age: "",
        bloodgroup: "",
        height: "",
        weight: "",
        gender: "",
        maritalstatus: ""
    })

    const [addressDetails, setAddressDetails] = useState({
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
    })

    console.log(userInfo)

    return (
        <CodeContext.Provider value={{
            steps,
            activeStep,
            setActiveStep,
            userInfo,
            setUserInfo,
            addressDetails,
            setAddressDetails
        }}>
            {children}
        </CodeContext.Provider>
    )
};

export default ContextProvider;

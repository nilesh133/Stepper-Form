import React, { useContext } from 'react'
import { CodeContext } from '../context/ContextProvider'
import AddressDetails from './AddressDetails';
import FinalPage from './FinalPage';
import UserInfo from './UserInfo'

const FormsContainer = () => {
    const {activeStep} = useContext(CodeContext);

    return (
        <>
            {
                activeStep === 0 && (
                    <UserInfo/>
                )
            }
            {
                activeStep === 1 && (
                    <AddressDetails/>
                )
            }
             {
                activeStep === 2 && (
                    <FinalPage />
                )
            }
        </>
    )
}

export default FormsContainer
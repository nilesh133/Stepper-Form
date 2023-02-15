import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CodeContext } from '../context/ContextProvider';

const StepperComponent = () => {
    const { steps, activeStep } = useContext(CodeContext);
    return (
        <div>
            <Box sx={{ width: '100%' , marginBottom: 8}}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps} >
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Box>

        </div>
    )
}

export default StepperComponent
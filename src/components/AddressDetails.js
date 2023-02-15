import { Box } from '@mui/system'
import Grid from '@mui/material/Grid';
import React, { useContext } from 'react'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useFormik } from "formik";
import { addressDetailsSchema } from '../validationSchema';
import { CodeContext } from '../context/ContextProvider';

const AddressDetails = () => {
    const { steps, activeStep, setActiveStep, setAddressDetails } = useContext(CodeContext);

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const initialValues = {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: addressDetailsSchema,
            validateOnChange: true,
            onSubmit: (values, action) => {
                setActiveStep(activeStep + 1);
                setAddressDetails(values);
            },
        });

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            lg={6}
                            xs={12}
                            label="Address Line 1"
                            variant="outlined"
                            name="addressLine1"
                            value={values.addressLine1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.addressLine1 && errors.addressLine1 ? (
                            <Typography variant='p' color = "error">{errors.addressLine1}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            lg={6}
                            xs={12}
                            label="Address Line 2"
                            variant="outlined"
                            name="addressLine2"
                            value={values.addressLine2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.addressLine2 && errors.addressLine2 ? (
                            <Typography variant='p' color = "error">{errors.addressLine2}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            lg={6}
                            xs={12}
                            label="City"
                            variant="outlined"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.city && errors.city ? (
                            <Typography variant='p' color = "error">{errors.city}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            lg={6}
                            xs={12}
                            label="State"
                            variant="outlined"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.state && errors.state ? (
                            <Typography variant='p' color = "error">{errors.state}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            lg={6}
                            xs={12}
                            label="Country"
                            variant="outlined"
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.country && errors.country ? (
                            <Typography variant='p' color = "error">{errors.country}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            lg={6}
                            xs={12}
                            label="Pincode"
                            variant="outlined"
                            name="pincode"
                            value={values.pincode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.pincode && errors.pincode ? (
                            <Typography variant='p' color = "error">{errors.pincode}</Typography>
                        ) : null}
                    </Grid>
                    
                </Grid>

                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="contained"
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Button type="submit" variant="contained">
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default AddressDetails
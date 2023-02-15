import { Box } from '@mui/system'
import Grid from '@mui/material/Grid';
import React, { useContext } from 'react'
import { TextField, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useFormik } from "formik";
import { userInfoSchema } from '../validationSchema';
import { CodeContext } from '../context/ContextProvider';

const UserInfo = () => {
    const { userInfo, steps, activeStep, setActiveStep, setUserInfo } = useContext(CodeContext);

    const initialValues = {

    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues: userInfo,
            validationSchema: userInfoSchema,
            validateOnChange: true,
            onSubmit: (values, action) => {
                setActiveStep(activeStep + 1);
                setUserInfo(values);
            },
        });

    return (
        <Box sx={{ width: "100%"}}>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.firstName && errors.firstName ? (
                            <Typography variant='p' color="error">{errors.firstName}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                            label="Middle Name"
                            variant="outlined"
                            name="middleName"
                            value={values.middleName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.middleName && errors.middleName ? (
                            <Typography variant='p' color="error">{errors.middleName}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                            lg={6}
                            xs={6}
                            label="Last Name"
                            variant="outlined"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.lastName && errors.lastName ? (
                            <Typography variant='p' color="error">{errors.lastName}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                            lg={6}
                            xs={6}
                            label="Mobile No"
                            variant="outlined"
                            name="mobileno"
                            value={values.mobileno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.mobileno && errors.mobileno ? (
                            <Typography variant='p' color="error">{errors.mobileno}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                            lg={6}
                            xs={6}
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.email && errors.email ? (
                            <Typography variant='p' color="error">{errors.email}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                            lg={6}
                            xs={6}
                            variant="outlined"
                            name="birthday"
                            value={values.birthday}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="date"
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.birthday && errors.birthday ? (
                            <Typography variant='p' color="error">{errors.birthday}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                            lg={6}
                            xs={6}
                            label="Age"
                            variant="outlined"
                            name="age"
                            value={values.age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.age && errors.age ? (
                            <Typography variant='p' color="error">{errors.age}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                            lg={6}
                            xs={6}
                            label="Blood Group"
                            variant="outlined"
                            name="bloodgroup"
                            value={values.bloodgroup}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.bloodgroup && errors.bloodgroup ? (
                            <Typography variant='p' color="error">{errors.bloodgroup}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                            lg={6}
                            xs={6}
                            label="Weight"
                            variant="outlined"
                            name="weight"
                            value={values.weight}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.weight && errors.weight ? (
                            <Typography variant='p' color="error">{errors.weight}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                            lg={6}
                            xs={6}
                            label="Height"
                            variant="outlined"
                            name="height"
                            value={values.height}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{
                                width: "100%"
                            }}
                        />
                        {touched.height && errors.height ? (
                            <Typography variant='p' color="error">{errors.height}</Typography>
                        ) : null}
                    </Grid>
                    <Grid item lg={6} xs={12}>
                    <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="gender"
                                value={values.gender}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="maritalstatus"
                                value={values.maritalstatus}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <FormControlLabel value="single" control={<Radio />} label="Single" />
                                <FormControlLabel value="married" control={<Radio />} label="Married" />
                                <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                                <FormControlLabel value="widowed" control={<Radio />} label="Widowed" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            sx={{ mr: 1 }}
                            variant="contained"
                        >
                            Back
                        </Button>
                        <Button type="submit" variant="contained">
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>

                </Grid>
            </form>
        </Box>
    )
}

export default UserInfo
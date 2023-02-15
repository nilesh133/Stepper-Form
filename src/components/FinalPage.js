import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { CodeContext } from '../context/ContextProvider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const FinalPage = () => {
    const { userInfo, addressDetails } = useContext(CodeContext);
    return (
        <Box>
        <Typography variant='h2' color = "success">Data added successfully</Typography>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>FirstName</TableCell>
                        <TableCell>{userInfo.firstName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>LastName</TableCell>
                        <TableCell>{userInfo.lastName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>MiddleName</TableCell>
                        <TableCell>{userInfo.middleName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Mobile no</TableCell>
                        <TableCell>{userInfo.mobileno}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell>{userInfo.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Birthday</TableCell>
                        <TableCell>{userInfo.birthday}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Age</TableCell>
                        <TableCell>{userInfo.age}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Blood Group</TableCell>
                        <TableCell>{userInfo.bloodgroup}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Height</TableCell>
                        <TableCell>{userInfo.height}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Weight</TableCell>
                        <TableCell>{userInfo.weight}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Gender</TableCell>
                        <TableCell>{userInfo.gender}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Marital Status</TableCell>
                        <TableCell>{userInfo.maritalstatus}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>AddressLine1</TableCell>
                        <TableCell>{addressDetails.addressLine1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>AddressLine2</TableCell>
                        <TableCell>{addressDetails.addressLine2}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>City</TableCell>
                        <TableCell>{addressDetails.city}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>State</TableCell>
                        <TableCell>{addressDetails.state}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell>{addressDetails.country}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Pincode</TableCell>
                        <TableCell>{addressDetails.pincode}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </Box>

    )
}

export default FinalPage
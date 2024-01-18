import React from "react";
import { useLocation } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from "./CustomTabPanel";
import { Avatar } from "@mui/material";


const UsersDetails = () => {
    const { state : {name, email, location, dob, phone} } = useLocation();
    const [value, setValue] = React.useState('1');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Email" {...a11yProps(1)} />
                    <Tab label="DOB" {...a11yProps(2)} />
                    <Tab label="Address" {...a11yProps(3)} />
                    <Tab label="Phone" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <Avatar alt={"profile image"}
                src={"https://randomuser.me/api/portraits/men/75.jpg"}
                sx={{ width: 150, height: 150, marginLeft:'45%', marginTop:'15px' }}
            />
            <CustomTabPanel value={value} index={0}>
                Hi, My name is {name.first} {name.last}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                {email}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                {new Date(dob.date).toLocaleDateString("en-US", options)}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                I live in {location.city},{location.state},{location.country}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                {phone}
            </CustomTabPanel>
        </Box>
    )
}

export default UsersDetails;
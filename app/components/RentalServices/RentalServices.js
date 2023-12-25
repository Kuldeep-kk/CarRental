"use client";
import React, {useState} from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import styles from "./rental.module.css";
import {FormControl, InputLabel, ListSubheader, MenuItem, Select} from "@mui/material";
import * as PropTypes from "prop-types";
import {motion} from "framer-motion";


function MyListSubheader(props) {
    return null;
}

MyListSubheader.propTypes = {
    muiSkipListHighlight: PropTypes.bool,
    children: PropTypes.node
};
const RentalServices = () => {
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());


    const popularCities = ['Mumbai', 'Delhi', 'Bangalore','Delhi-NCR', 'Chennai', 'Kolkata','Pune'];

    const allCities = [
        ...popularCities,
        'Ahmedabad',
        'Bhubaneswar',
        'Chandigarh',
        'Coimbatore',
        'Jaipur',
        'Kochi',
        'Mangalore',
        'Mysore',
        'Nagpur',
        'Surat',
        'Tirupati',
        'Trivandrum',
        'Vadodara',
        'Vijayawada',
        'Vizag',
    ];

    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };
    return (
        <motion.div
            initial={{
                y: 100,
            }}
            animate={{y: 0,}}
            transition={{duration: 1}}
            className={`flex flex-col lg:flex-row justify-center items-center gap-6 align-middle bg-white -mt-10 w-2/3 md:w-1/2 mx-auto rounded-xl drop-shadow-lg py-3 scale-y-90`}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel htmlFor="grouped-select">Location</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping" value={selectedCity} onChange={handleCityChange}>
                    <ListSubheader>Popular Cities</ListSubheader>
                    {popularCities.map((city) => (
                        <MenuItem key={city} value={city}>{city}</MenuItem>
                    ))}
                    <ListSubheader>Other Cities</ListSubheader>
                    {allCities
                        .filter((city) => !popularCities.includes(city))
                        .map((city) => (
                            <MenuItem key={city} value={city}>{city}</MenuItem>
                        ))}
                </Select>
            </FormControl>


            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DatePicker',
                        'MobileDatePicker',
                        'DesktopDatePicker',
                        'StaticDatePicker',
                    ]}

                >
                    <div className={`flex flex-col lg:flex-row gap-4`}>
                        <DemoItem>

                            <MobileDatePicker
                                label="Pickup Date"
                                value={startDate}
                                onChange={(newValue) => setStartDate(newValue)}


                            />

                        </DemoItem>
                        <DemoItem>
                            <MobileDatePicker
                                label="Return Date"
                                value={endDate}
                                onChange={(newValue) => setEndDate(newValue)}

                            />
                        </DemoItem>
                    </div>

                </DemoContainer>
            </LocalizationProvider>
            <button className={`${styles.searchButton} text-white px-9 h-14 mt-2`}>
                Search
            </button>
        </motion.div>
    );
};

export default RentalServices;
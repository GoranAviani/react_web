import React from 'react'
import Button from "@mui/material/Button";
import './Navigation.css'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Navigation = () => {

    return (
        <div className='Navigation'>
            <div className='Logo'>
                WollyBooly
            </div>

            <div className='CenterMenu'>
                Center Menu
            </div>

            <div className='RightSideMenu'>
                <Button size="large" startIcon={<Person2OutlinedIcon/>}>
                    Log in
                </Button>
            </div>


        </div>
    )
}

export default Navigation;
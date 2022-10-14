import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './BasicModal.css'
import useWindowDimensions from "../hooks/WindowDimension/useWindowDimensions";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import Spacer from "../Spacer";

const BasicModal = ({open, handleClose, title, component, imageSrc = null, showXClose = false}) => {
    const {isMobile} = useWindowDimensions()
    console.log({isMobile})
    console.log({imageSrc})

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='basicModalBox'>
                <div className='ModalXCloseButton'>
                    {showXClose && <Button
                        sx={{
                            borderRadius: 0,
                            color: "#000",
                            borderColor: "#000",
                            height: "30px",
                            minWidth: "30px",
                            width: "30px",
                            fontSize: "20px"
                        }}
                        variant="outlined"

                        onClick={() => {
                            handleClose()
                        }}
                    >X
                    </Button>}
                </div>
                {imageSrc &&
                    <div className="ModalComponentImage">
                        <img src={isMobile ? imageSrc.small : imageSrc.big}/>
                    </div>
                }

                {title &&
                    <div className="ModalComponentTitle">
                        <Typography variant={isMobile ? "h5" : "h4"}>
                            {title}
                        </Typography>

                    </div>}
                <Spacer size={isMobile ? 10 : 20}/>

                <div className={imageSrc ? 'ModalComponentSmallerSpace' : 'ModalComponentSpace'}>
                    {component}
                </div>
                {title ? <Spacer size={15}/> : <Spacer size={isMobile ? 30 : 35}/>}

                <div className='ModalComponentButtons'>

                    <Button
                        style={{
                            borderRadius: 0,
                            color: "#000",
                            borderColor: "#000",
                            padding: "15px 30px",
                            fontSize: "18px"
                        }} variant="outlined"
                        onClick={() => {
                            handleClose()
                        }}
                    >Close
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}

export default BasicModal
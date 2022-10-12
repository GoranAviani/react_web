import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './BasicModal.css'
import useWindowDimensions from "../hooks/WindowDimension/useWindowDimensions";
import {useState} from "react";

const BasicModal = ({open, handleClose, component, imageSrc = null, showXClose = false}) => {
    const {isMobile} = useWindowDimensions()

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
                <div className='ModalComponentSpace'>
                    {component}
                </div>
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
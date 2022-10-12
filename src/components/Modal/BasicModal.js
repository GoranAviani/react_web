import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './BasicModal.css'

const BasicModal = ({open, handleClose, component}) => {


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='basicModalBox'>
                <div className='ModalXCloseButton'>
                    <Button
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
                    </Button>
                </div>
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
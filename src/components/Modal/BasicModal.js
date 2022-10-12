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
                        variant="contained"
                        color="primary"
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
                        variant="contained"
                        color="primary"
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
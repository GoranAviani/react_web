import React from 'react'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import BasicModal from "../../Modal/Modal";
import OurWool from "../ExtraPages/OurWool";
import Button from "@mui/material/Button";

const QuickFactsInfoRightSide = ({text, linkText, linkUrl}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="quickFactsInfoRightSide">

            <Typography sx={{fontWeight: 'bold'}} variant="h6">
                {text}
            </Typography>

            <Link color="#000"
                  onClick={() => {
                      {
                          handleOpen()
                      }
                  }}
            >
                {linkText}
            </Link>
            <BasicModal open={open} handleClose={handleClose}/>
        </div>

    )
}
export default QuickFactsInfoRightSide
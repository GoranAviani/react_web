import React from 'react'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import BasicModal from "../../Modal/BasicModal";
import OurWool from "../ExtraPages/OurWool";
import Button from "@mui/material/Button";

const QuickFactsInfoRightSide = ({text, linkText, component}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (event, reason) => {
        if (reason && reason == "backdropClick")
            return;
        setOpen(false);
    }

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
            <BasicModal open={open} handleClose={handleClose} showXClose={true} component={component}/>
        </div>

    )
}
export default QuickFactsInfoRightSide
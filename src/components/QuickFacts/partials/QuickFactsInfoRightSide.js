import React from 'react'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const QuickFactsInfoRightSide = ({text, linkText}) => {

    return (
        <>
            <Typography sx={{fontWeight: 'bold'}} variant="h6"
                        component="div">
                {text}
            </Typography>

            <Link color="#000"
                  onClick={() => {
                      console.info("I'm a button.");
                  }}
            >
                {linkText}
            </Link></>
    )
}
export default QuickFactsInfoRightSide
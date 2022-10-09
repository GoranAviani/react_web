import React from 'react'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const QuickFactsInfoRightSide = ({text, linkText, linkUrl}) => {

    return (
        <div className="quickFactsInfoRightSide">

            <Typography sx={{fontWeight: 'bold'}} variant="h6">
                {text}
            </Typography>

            <Link color="#000"
                  href={linkUrl}
            >
                {linkText}
            </Link>
        </div>

    )
}
export default QuickFactsInfoRightSide
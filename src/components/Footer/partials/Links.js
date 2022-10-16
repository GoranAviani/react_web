import React from "react";
import Link from "@mui/material/Link";
import '../Footer.css'

const Links = ({linksArray}) => {

    return (
        <div className='Links'>
            {linksArray.map(() => (<Link color="#000"
                                         underline="none"
                                         href="/credits"
            >
                Credits
            </Link>))}


        </div>


    )

}

export default Links;
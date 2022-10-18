import React from "react";
import Link from "@mui/material/Link";
import './Links.css'

const Links = ({linksArray}) => {

    return (
        <div className='Links'>
            {Object.entries(linksArray).map(([name, link], index) => (
                <div className='Link'><Link key={index} color="#000"
                                            underline="none"
                                            href={link}
                >
                    {name}
                </Link></div>
            ))}


        </div>


    )

}

export default Links;
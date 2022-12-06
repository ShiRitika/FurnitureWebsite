import React from "react";
import { Link } from "react-router-dom";


function Page404() {
    return(
        <div align='center'>
            <h1>404 Page</h1>
            <p>URl not found</p>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Page404;
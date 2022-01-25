import React from "react";
import { Header } from '.'


const Layout = ({ children }) => {
    return (
        <>
            < Header />
            {children}
        </>
        // <div className="">

        // </div>
    );
}

export default Layout;
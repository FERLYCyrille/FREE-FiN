import React, { useState } from "react";
import Sidebar from "./sideFreelance";
import DashboardContent from "./DashboardContend";
import Navbar from "../dashboard/sections/navbar";

const DashboardPage = () => {
    const [selectedMenu, setSelectedMenu] = useState("dashboard");

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row h-screen">

                <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
                <DashboardContent selectedMenu={selectedMenu} />
            </div>
        </>
    );
};

export default DashboardPage;

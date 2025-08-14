import React from "react";
import ProfileSettings from "./ProfileSettings";
import DashboardHome from "./dashFreelanceHome"; // Exemple d'accueil
import MyServices from "./MyServices"; // Exemple de section services
import Payments from "./Payments"; // Exemple de section paiements

const DashboardContent = ({ selectedMenu }) => {
    return (
        <main className="flex-1 p-4">
            {selectedMenu === "dashboard" && <DashboardHome />}
            {selectedMenu === "services" && <MyServices />}
            {selectedMenu === "payments" && <Payments />}
            {selectedMenu === "settings" && <ProfileSettings />}
        </main>
    );
};

export default DashboardContent;

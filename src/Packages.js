import React from "react";
import "./Packages.css";
import PackagesCard from "./PackagesCard";
function Packages() {
    const list1 = ["1* Work Per Week", "Up To 3 Rooms", "Covid Cleaning", "Free Frangance",];
    return (
        <div className="packages">
            <div className="packages__Cards">
                <PackagesCard title="EASY" about="Starts from N30,000/ Month" link="#" linkText="Book Now"
                    options={list1}/>
                <PackagesCard title="EASY" about="Starts from N30,000/ Month" link="#" linkText="Book Now"
                    options={list1}/>
                <PackagesCard title="EASY" about="Starts from N30,000/ Month" link="#" linkText="Book Now"
                    options={list1}/>
            </div>
        </div>
    );
}

export default Packages;

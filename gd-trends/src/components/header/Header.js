import React from "react";
import "./header.css";
import logo from './GDTrends_logo.png';

const Header = () => (
    <div className="header">
        <div className="topLeft">
            <ul className="topList">
                <li className="topListItem">
                    <img className="GDLogo"
                    src={"https://wandisco.com/storage/temp/public/6a8/7c0/x3c4godaddy-logo-1-1__2160.png.pagespeed.ic.TSbJPWnZ61.png"} 
                    alt="GoDaddy Logo" /> 
                </li>
                <li className="topListItem">
                    |
                </li>
                <li className="topListItem">
                    GD Trends  
                </li>
            </ul>
        </div>
    </div>
  
)
export default Header; 

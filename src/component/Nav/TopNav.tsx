import React from "react";
import '../../styles/component/nav.css';


export interface PropsTopNav {

}

const TopNav: React.FC<PropsTopNav> = () => (
    <nav className="nav">
        <div className="border">Logo</div>
        <div>Menu</div>
        <div>Notification</div>
    </nav>
);

export default TopNav
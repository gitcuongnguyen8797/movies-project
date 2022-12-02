import React from "react";
import '../../styles/component/leftbar.css';

export interface PropsLeftBar {

}

const LeftBar: React.FC<PropsLeftBar> = () => (
    <div className="left-bar">
        {/* Logo Section */}
        <section className="left-bar__logo">
            <h1>Logo</h1>
        </section>
        {/* Menu Section */}
        <section className="left-bar__menu">
            <div className="left-menu">
                
                <ul className="menu"><h6 className="text-muted">Categories</h6>
                    <li className="menu-item">Now Playing</li>
                    <li className="menu-item">Top Rated</li>
                </ul>
            </div>
        </section>

        {/* Footer Section */}
        <section className="left-bar__footer">
            <div><h2 className="text-center">Footer</h2></div>
        </section>
    </div>
)

export default LeftBar;
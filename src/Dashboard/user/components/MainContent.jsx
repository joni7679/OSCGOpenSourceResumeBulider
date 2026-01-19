import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import Header from './Header';

function MainContent() {

    return (
        <main className="relative bg-white">
            <Header />
            <div className="flex min-h-screen transition-all duration-300 ">
                <div>
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default MainContent;

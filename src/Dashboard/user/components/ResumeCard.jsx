import React from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from "react-router-dom";

const ResumeCard = () => {
    return (
        <>
            <div className="mb-5">
                <h1 className="text-3xl text-black">My Resume</h1>
                <p className="text-md text-black">start creating ai resume to your next job role</p>
            </div>
            <Link to={`resume-Marker`} className="w-60 h-80 rounded-2xl overflow-hidden shadow-md bg-gray-200 flex items-center justify-center">
                <MdOutlineCreateNewFolder className="text-black text-4xl cursor-pointer" />
            </Link>
        </>
    );
};

export default ResumeCard;

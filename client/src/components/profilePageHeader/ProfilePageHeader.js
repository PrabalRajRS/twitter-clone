import React from "react";
import { Image, Nav } from "react-bootstrap";
import CustomWideButton from "../customWideButton/CustomWideButton";
import { AiOutlineSchedule } from "react-icons/ai"
import "./ProfilePageHeader.scss";

const ProfilePageHeader = ({ profileData }) => {
    return (
        <div className="container">
            <div className="cover-pic">
                <Image className="image" src={profileData.image} />
            </div>
            <div className="profile-pic">
                <Image className="image" src={profileData.image} />
            </div>
            <div className="edit-profile-button">
                <CustomWideButton className="small-white" buttonText="Edit Profile" />
            </div>
            <div className="profile-details">
                <h5 className="profile-name">{profileData?.profileName}</h5>
                <p className="user-name">@{profileData?.userName}</p>
                <p className="date"><AiOutlineSchedule /> Joined {profileData?.date || "11-01-2022"}</p>
                <div style={{ display: "flex" }}>
                    <p className="user-name">13 Following</p> &nbsp;&nbsp;&nbsp;&nbsp;
                    <p className="user-name">34 Followers</p>
                </div>
            </div>
            <Nav justify variant="pills" defaultActiveKey="/home" className="nav-bar">
                <Nav.Item>
                    <Nav.Link href="/home" eventKey="1">Tweets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2">Tweets & Replies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3">Media</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="4" >
                        Likes
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default ProfilePageHeader;
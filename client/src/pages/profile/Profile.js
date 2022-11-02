import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button, FormControl, Navbar } from "react-bootstrap";
import SideMenu from "../../components/sidemenu/SideMenu";
import { FiSearch } from 'react-icons/fi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import './Profile.scss';
import WhatsHappening from "../../components/whatsHappening/WhatsHappening";
import WhatsHappeningCard from "../../components/whatshappeningCard/WhatsHappeningCard";
import NewsFeed from "../../components/newsFeed/NewsFeed";
import { useLocation, useNavigate } from "react-router-dom";
import ProfilePageHeader from "../../components/profilePageHeader/ProfilePageHeader";

const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const profileData = location?.state?.item;

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate('/')
        } else {
            return;
        }
    }, [localStorage])
    return (
        <Container className="profile-container">
            <Row >
                <Col sm={3} xs={12} className="col-1">
                    <Row className="col-header">
                        <div>
                            <Image src="/twitter-logo.png" className="logo" />
                        </div>
                    </Row>
                    <div className="col-body sidebar fixed-top">
                        <SideMenu />
                        <Button className="tweet-button">Tweet</Button>
                    </div>

                </Col>
                <Col sm={5} xs={12} className="col-2">
                    <Row className="col-header">
                        <Col sm={1} xs={1} style={{ border: 'none', paddingTop: 10 }}>
                            <IoMdArrowRoundBack onClick={() => navigate(-1)} />
                        </Col>
                        <Col sm={11} xs={11} style={{ paddingTop: 10 }}>
                            <h5 className="page-title">{profileData.profileName}</h5>
                        </Col>
                    </Row>
                    <div className="col-body">
                        <ProfilePageHeader profileData={profileData} />
                        <NewsFeed profileData={profileData} />
                    </div>
                </Col>
                <Col sm={4} xs={12} className="col-3">
                    <Row className="col-header">
                        <div style={{ padding: "10px 50px 10px 30px" }}>
                            <div className="search-container">
                                <FiSearch className="search-icon" />
                                <FormControl className="search-bar" placeholder="Search Twitter" />
                            </div>
                        </div>
                    </Row>
                    <div className="col-body">
                        <div>
                            <WhatsHappeningCard />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;
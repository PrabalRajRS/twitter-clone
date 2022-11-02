import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button, FormControl, Navbar } from "react-bootstrap";
import SideMenu from "../../components/sidemenu/SideMenu";
import { FiSearch } from 'react-icons/fi';
import './Home.scss';
import WhatsHappening from "../../components/whatsHappening/WhatsHappening";
import WhatsHappeningCard from "../../components/whatshappeningCard/WhatsHappeningCard";
import NewsFeed from "../../components/newsFeed/NewsFeed";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.auth?.user);
    console.log("currentUser", currentUser)
    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate('/')
        } else {
            return;
        }
    }, [localStorage])
    return (
        <Container className="home-container">
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
                        <h5 className="page-title">Home</h5>
                    </Row>
                    <div className="col-body">
                        <WhatsHappening />
                        <NewsFeed />
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

export default Home;
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button, FormControl, Navbar, ListGroup, ListGroupItem } from "react-bootstrap";
import SideMenu from "../../components/sidemenu/SideMenu";
import { FiSearch } from 'react-icons/fi';
import './Home.scss';
import WhatsHappeningCard from "../../components/whatshappeningCard/WhatsHappeningCard";
import NewsFeed from "../../components/newsFeed/NewsFeed";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetApi } from "../../services/api.service";
import { baseUrl } from "../../services/apiUrl";
import { setUsers } from "../../redux/slice/users";
import Tweet from "../../components/Tweet/Tweet";


const Home = () => {

    const navigate = useNavigate();
    const currentUser = useSelector(state => state.auth?.user);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate('/')
        } else {
            return;
        }
    }, [localStorage])


    const getUserData = async () => {
        await GetApi(`${baseUrl}/users`)
            .then(response => {
                setUsers(response?.data);
            })
            .catch(error => console.log(error))
    }
    const [searchValue, setSearchValue] = useState("")
    const handleSearch = (e) => {
        setSearchValue(e.target.value)
        const filteredlist = users?.users.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredUsers(filteredlist)
    }

    useEffect(() => {
        getUserData()
    }, [navigate]);

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
                        <Tweet />
                        <NewsFeed />
                    </div>
                </Col>
                <Col sm={4} xs={12} className="col-3">
                    <Row className="col-header">
                        <div style={{ padding: "10px 50px 10px 30px" }}>
                            <div className="search-container">
                                <FiSearch className="search-icon" />
                                <FormControl
                                    type="search"
                                    onChange={handleSearch}
                                    className="search-bar"
                                    placeholder="Search Twitter" />
                            </div>
                            {
                                searchValue != ''
                                && <ListGroup className="search-list">
                                    {filteredUsers.map(user => (
                                        <ListGroupItem key={user._id} className="search-item" onClick={() => navigate(`/profile/${user._id}`)}>
                                            {user.name}
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            }
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
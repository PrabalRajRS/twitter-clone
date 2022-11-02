import React, { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRetweet } from 'react-icons/fa';
import { BsChat } from 'react-icons/bs';
import { BiUpload } from 'react-icons/bi'

import "./NewsFeed.scss";
import { useNavigate } from "react-router-dom";
import { GetApi } from "../../services/api.service";
import { baseUrl } from "../../services/apiUrl";

const NewsFeed = () => {
    const navigate = useNavigate();
    const items = [
        {
            id: 1,
            profileName: "Raj",
            userName: "Raj",
            topic: "Entertainment",
            description: "Fans wish Amala Paul a happy birthday",
            reTweets: "4576",
            likes: "1233",
            comments: "5456",
            image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
        }, {
            id: 2,
            profileName: "mukhesh",
            userName: "mukhesh",
            topic: "Games",
            description: "Akshay Kumar's Ram Setu hits the theatres",
            reTweets: "4576",
            likes: "1233",
            comments: "5456",
            image: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif"
        }, {
            id: 3,
            profileName: "Vimal",
            userName: "Vimal",
            topic: "Trending In india",
            description: "ब्रिटेन के 57वें प्रधानमंत्री बने ऋषि सुनक",
            reTweets: "4576",
            likes: "1233",
            comments: "5456",
            image: "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600"
        }, {
            id: 4,
            profileName: "surendar",
            userName: "surendar",
            topic: "Nasa Bites",
            description: "NASA Announced Its Unidentified Aerial Phenomena Research Team",
            reTweets: "4576",
            likes: "1233",
            comments: "5456",
            image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ];

    const [newsFeed, setNewsFeed] = useState();

    const handleClick = (route, item) => {
        navigate(route, {
            state: {
                item
            }
        });
    }


    const getNewsFeed = async () => {
        await GetApi(`${baseUrl}/newsFeed`)
            .then(response => {
                console.log(response)
                setNewsFeed(response?.newsFeed);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getNewsFeed();
    }, []);

    console.log("newsFeed", newsFeed)


    return (
        <div className="newsfeed">
            {
                items.map((item) => (
                    <Row className="container">
                        <Col sm={2} className="left-side">
                            <div className="image-container">
                                <Image className="image" src={item.image} />
                            </div>
                        </Col>
                        <Col sm={10} className="right-side">
                            <div className="card" key={item.id}>
                                {/* <p className="topic" onClick={() => handleClick("/profile", item)}>{item.topic}</p> */}
                                <p className="profileName" onClick={() => handleClick(`/profile/${item.id}`, item)}>{item.profileName}<i> @{item.userName}</i></p>
                                <p >{item.description}</p>
                                <div className="icons">
                                    <span><BsChat className="icon" />{item.comments}</span>
                                    <span><FaRetweet className="icon" />{item.reTweets}</span>
                                    <span><AiOutlineHeart className="icon" />{item.likes}</span>
                                    <span><BiUpload className="icon" /></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                ))}
        </div>
    )
}

export default NewsFeed;
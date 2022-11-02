import React, { useEffect, useState } from "react";
import { Button, Col, FormControl, Image, Row } from "react-bootstrap";
import { AiOutlineFileGif, AiOutlineSchedule } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsEmojiSmile, BsImage, BsListStars } from 'react-icons/bs';
import { FaGlobeAsia } from 'react-icons/fa';
import { PostApi } from "../../services/api.service";
import { baseUrl } from "../../services/apiUrl";
import './WhatsHappening.scss';




const WhatsHappening = () => {
    const items = [
        {
            id: 0,
            icon: <BsImage />,
        },
        {
            id: 1,
            icon: <AiOutlineFileGif />,
        },
        {
            id: 2,
            icon: <BsListStars />,
        },
        {
            id: 3,
            icon: <BsEmojiSmile />,
        },
        {
            id: 4,
            icon: <AiOutlineSchedule />,
        },
        {
            id: 5,
            icon: <BiMap />,
        }
    ];
    const [data, setData] = useState({
        content: "",
        likes: 0,
        reTweets: 0,
        comments: [],
        image: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handlePost = async (e) => {
        e.preventDefault();
        console.log(data.image?.files[0])
        const formData = new FormData();
        formData.append('content', data.content);
        formData.append('likes', data.likes);
        formData.append('reTweets', data.reTweets);
        formData.append('comments', data.comments);
        formData.append('image', data.image?.files[0]);
        console.log("formData", formData)

        await PostApi(`${baseUrl}/newsFeed`, formData)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        setData({ ...data, image: document.getElementById("input-file") });
    }, []);

    const handleUpload = () => {
        data?.image?.click();
    };

    const handleClick = (item) => {
        console.log(item.id)
        switch (item.id) {
            case 0:
                handleUpload()
                break;
            case 1:
                handleUpload();
                break;
            default:
                return

        }
    }

    return (
        <Row className="container">
            <Col sm={2} className="left-side">
                <div className="image-container">
                    <Image className="image" src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" />
                </div>
            </Col>
            <Col sm={10} className="post-area">
                <form onSubmit={handlePost} encType="multipart/form-data">
                    <FormControl onChange={handleChange} name="content" className='input' placeholder="What's Happening?" />
                    <div className="post-area-footer">
                        <Button className="status-button"><FaGlobeAsia /> Everyone can Reply</Button>
                        <div className="icons">
                            {
                                items.map((item) => (
                                    <div className="icon" onClick={() => handleClick(item)} key={item.id}>
                                        <input id="input-file" className="d-none" type="file" />
                                        {item.icon}
                                    </div>
                                ))
                            }
                        </div>
                        <Button className="tweet-button" type="submit">Tweet</Button>
                    </div>
                </form>
            </Col>
        </Row>
    )

}

export default WhatsHappening;
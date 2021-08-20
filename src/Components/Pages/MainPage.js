import React from 'react';
import Avatar from '../../images/avatar.png';
import {DataSite} from "../../DataSite";
import Social from "../../images/social.svg";
import '../../styles/mainPage.scss'

const MainPage = () => {
    const social = DataSite.social;

    return(
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <img className="avatar" src={Avatar}/>
                        <h1>Кайдаров Павел</h1>
                        <h2>Web-developer</h2>
                    </div>
                    <div className="col-2">
                        {social.map(item => {
                            return(
                                <div className="social-item" key={item.name}>
                                    <a href={item.link} className="social-link">
                                        <svg>
                                            <use xlinkHref={Social + item.img}/>
                                        </svg>
                                    </a>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainPage;
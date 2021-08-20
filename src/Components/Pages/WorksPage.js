import React from 'react';
import {DataSite} from "../../DataSite";
import logos from "../../images/works/logos.svg";
import '../../styles/worksPage.scss';

const WorksPage = () => {
    const works = DataSite.works;
    return(
        <>
            <div className="content">
                <div className="container">
                    <div className="row cards">
                        {works.map(item => {
                            return(
                                <div className="col-3 mb-3">
                                    <div className="card">
                                        <div className="card__logo">
                                            <svg>
                                                <use xlinkHref={logos + item.img}/>
                                            </svg>
                                        </div>
                                        <h3>{item.name}</h3>
                                        <a href={item.link} className="card__link">Смотреть</a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </>
    );
};

export default WorksPage;
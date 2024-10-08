import React from 'react';
import { Link } from 'react-router-dom';
import './RecentActivities.css';
import activities from './recentActivities.json'; // Adjust the path as needed

const RecentActivities = () => {
    return (
        <section className="recent-activities-section">
            <div className="recent-activities-content">
                <h2>Recent Activities</h2>
                <div className="activity-cards">
                    {activities.map((activity, index) => (
                        <div key={index} className="activity-card">
                            <img src={activity.image} alt={activity.title} className="activity-image" />
                            <div className="activity-info">
                                <h3>{activity.title}</h3>
                                {/* <p>{activity.subtitle}</p> */}
                                {/* <p>{activity.date}</p> */}
                                <Link 
                                    to={`/recent-events/${activity.link}`} 
                                >
                                    Read more
                                </Link>
                                {/* <p className="last-updated">Last updated: {activity.lastUpdated}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentActivities;

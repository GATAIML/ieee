import React from 'react';
// import { Link } from 'react-router-dom';
import './UpcomingEvents.css';
import Typewriter from "typewriter-effect";
// import activities from './recentActivities.json'; // Adjust the path as needed

const UpcomingEvents = () => {
    return (
        <section className="upcoming-events-section">
            <div className="upcoming-events-content">
                <h2>Upcoming Events</h2>
                <div className='typewriter'>
                    <Typewriter
                        options={{
                            strings: ["Updating Soon..........."],
                            autoStart: true,
                            loop: false,
                            delay: 80,
                            deleteSpeed: 30 
                        }}
                    />
                </div>
                {/* <div className="activity-cards">
                    {activities.map((activity, index) => (
                        <div key={index} className="activity-card">
                            <img src={activity.image} alt={activity.title} className="activity-image" />
                            <div className="activity-info">
                                <h3>{activity.title}</h3>
                                <p>{activity.subtitle}</p>
                                <p>{activity.date}</p>
                                <Link 
                                    to={`/recent-events/${activity.link}`} 
                                >
                                    Read more
                                </Link>
                                <p className="last-updated">Last updated: {activity.lastUpdated}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default UpcomingEvents;

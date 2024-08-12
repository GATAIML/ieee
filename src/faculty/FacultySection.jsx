import React from 'react';
import './Faculty.css';
import facultyMembers from './Faculty.json'; // Adjust the path as needed

const FacultySection = () => {
    return (
        <section className="faculty-section">
            <div className="faculty-content">
                <h2>Members</h2>
                <div className="faculty-cards">
                    {facultyMembers.map((member, index) => (
                        <div key={index} className="faculty-card">
                            <img src={member.photo} alt={member.name} className="faculty-photo" />
                            <div className="faculty-info">
                                <h3>{member.name}</h3>
                                <p>{member.designation}</p>
                                <div className="faculty-socials">
                                    {member.instagram && (
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </section>
    );
};

export default FacultySection;

import React from 'react';
import './EventDetails.css';

const TechFusion = () => {
    return (
        <section className="event-details-section">
            <div className="event-details-content">
                <h2>Tech Fusion</h2>
                <p className="event-subtitle">A Technical Quiz Competition</p>
                
                <img src="https://gat-aiml.vercel.app/contents/events/displayBanners/Tech Fusion.png" alt="Tech Fusion" className="event-details-image" />

                <section className="about-gat">
                    <h3>About GAT</h3>
                    <p>
                        Global Academy of Technology (GAT), established in 2001, has quickly risen to become one of the premier Engineering and Management Institutes in Bengaluru. GAT provides quality Education with a vibrant and nurturing environment to harness professional skills. The campus is spread over 10 acres, offering students ample opportunities to engage in a variety of academic and non-academic activities towards holistic development. Along with academic excellence, GAT places great emphasis on the overall development of the students by providing suitable exposure to industry and research, participation in various co-curricular and extracurricular activities along with mentoring and counseling support. GAT's commitment to holistic development has made it an ideal choice among students looking for comprehensive education.
                    </p>
                </section>

                <section className="about-department">
                    <h3>About the Department</h3>
                    <p>
                        The Artificial Intelligence and Machine Learning department is a community for academic excellence and innovation. The curriculum is designed to provide a strong foundation in core Computer Science and Artificial Intelligence and Machine Learning specialization concepts while allowing specialization in these fields. The students benefit from this dynamic learning environment. We are proud to host numerous events like AIfiesta, BoT lab inauguration, Webathon phase 1, and many more. The department has introduced various vibrant student clubs with facilitated guidance from the talented faculty. Ultimate support is provided for initiatives that aim to increase the representation of underrepresented groups in technical fields.
                    </p>
                </section>

                <section className="objectives">
                    <h3>Objectives</h3>
                    <ul>
                        <li>Enhancing Knowledge and Skills</li>
                        <li>Promoting Teamwork and Collaboration</li>
                        <li>Stimulating Intellectual Curiosity</li>
                        <li>Encouraging Healthy Competition</li>
                        <li>Identifying Talent and Building Confidence</li>
                    </ul>
                </section>

                <section className="about-tech-fusion">
                    <h3>About Tech Fusion</h3>
                    <p>
                        TechFusion, a technical quiz competition, serves as a dynamic platform for students to enhance their technical knowledge, problem-solving abilities, and teamwork skills. By featuring challenging questions across a spectrum of subjects and formats, including MCQs, practical problems, and rapid-fire rounds, it fosters intellectual curiosity and innovation while promoting healthy competition. Participants benefit from networking opportunities with peers and industry experts, recognition for their talents, and the chance to further their academic and professional aspirations. Through workshops, study materials, and collaborative team efforts, TechFusion inspires a culture of continuous learning and academic excellence, preparing students for success in the ever-evolving world of technology.
                    </p>
                </section>

                <section className="event-overview">
                    <h3>Event Overview</h3>
                    <div className="table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Round</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Round 1</td>
                                    <td>
                                        <p>The first round saw 36 teams participating in an MCQ round where the registered students had to answer 40 questions and get the maximum marks to qualify for the next round.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Round 2</td>
                                    <td>
                                        <p>For the second round, 21 teams qualified. The questions were presented on screens, and team members had to answer the questions within a 2-minute time constraint and submit their answers on a sheet.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Round 3</td>
                                    <td>
                                        <p>In the third round, 11 teams were selected. It was a coding round where questions were presented, and students had to solve them within a 1-minute time constraint to get selected for the next round.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Round 4</td>
                                    <td>
                                        <p>The final round was a rapid-fire round. Two finalists were selected, and the intense rapid-fire questions made it challenging to choose the winner. The winner, determined by a narrow score margin, was awarded a cash prize of ₹1000.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="outcomes">
                    <h3>Outcomes</h3>
                    <ul>
                        <li>Enhanced Technical Knowledge: Participants deepen their understanding of technical concepts and emerging trends through exposure to a diverse range of questions and topics covered during the competition.</li>
                        <li>Skill Development: Competitors sharpen critical thinking, problem-solving, and teamwork skills as they navigate through challenging quizzes and collaborate with their teammates to find solutions.</li>
                        <li>Recognition and Validation: Winning teams and standout individuals receive recognition for their achievements, boosting their confidence and validating their hard work and dedication in their respective fields.</li>
                        <li>Networking Opportunities: Participants forge connections with peers, faculty members, and industry professionals, expanding their professional network and potentially opening doors to future academic or career opportunities.</li>
                        <li>Inspiration and Motivation: The event serves as a source of inspiration and motivation for participants to continue pursuing excellence in their academic and professional pursuits, driving them to explore new avenues and push the boundaries of their knowledge and skills.</li>
                    </ul>
                </section>

                <section className="prize-distribution">
                    <h3>Prize Distribution</h3>
                    <ul>
                        <li>First Place: Anuj Jadhav and Bhavya Bhosale, CSE Department, GAT with a cash prize of ₹1000.</li>
                    </ul>
                </section>
            </div>
        </section>
    );
}

export default TechFusion;

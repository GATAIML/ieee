import React from 'react';
import './EventDetails.css';

const Webathon = () => {
    return (
        <section className="event-details-section">
            <div className="event-details-content">
                <h2>WEBATHON</h2>
                <p className="event-subtitle">Unleash your Creativity in the Ultimate Web Development Competition!</p>
                <img 
                    src="https://gat-aiml.vercel.app/contents/events/displayBanners/WEBATHON.png" 
                    alt="WEBATHON" 
                    className="event-details-image" 
                />
                
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
                        <li>Skill Development and Enhancement</li>
                        <li>Fostering Innovation and Creativity</li>
                        <li>Collaboration and Teamwork</li>
                        <li>Networking and Community Building</li>
                        <li>Industry Readiness and Exposure</li>
                    </ul>
                </section>

                <section className="about-webathon">
                    <h3>About Webathon</h3>
                    <p>
                        The inter-college webathon event on 12th and 13th July 2024 was an exhilarating two-day competition that brought together aspiring web developers from various institutions to test their skills and creativity. On the first day, the participants were fortunate to receive guidance from industry experts Sachin C Sardeshpande and Nisha Shree S. Their sessions were highly informative and motivational, providing the teams with crucial insights and best practices in web development. This day was dedicated to the initial phase of creating a working website, where teams collaborated intensively, exchanging ideas, and overcoming technical challenges.
                    </p>
                    <p>
                        The excitement carried over into the second day, where the participants were mentored by Arpita K Shiggavakar and Akhil JM. Their expertise helped the teams fine-tune their projects, focusing on functionality, user experience, and overall design. The competition reached its peak as the judges selected the top 21 teams for the final round, based on the creativity, innovation, and effectiveness of their web applications, and the top 3 teams were awarded a cash pool of ₹10,000. This webathon was not only a platform for students to showcase their technical skills but also a valuable opportunity for networking, learning from industry veterans, and experiencing the thrill of a real-world development scenario. The event successfully fostered a spirit of innovation and collaboration, setting a benchmark for future competitions.
                    </p>
                </section>

                <section className="event-overview">
                    <h3>Event Overview</h3>
                    <h4>Day 01:</h4>
                    <h5>Round 01:</h5>
                    <p>Idea Submission: Teams were tasked with presenting their innovative web application ideas. This round focused on the originality, feasibility, and potential impact of their concepts.</p>
                    <h5>Round 02:</h5>
                    <p>Evaluation of Front-End Design: Participants showcased their front-end designs using tools like Figma, Whimsical, and CSS. This round assessed their ability to create user-friendly and aesthetically pleasing interfaces.</p>
                    <h5>Round 03:</h5>
                    <p>Evaluation of Final Application: Teams presented their working websites, demonstrating functionality and user experience. The judges evaluated the overall execution and selected the top teams to advance.</p>
                    <h4>Day 02:</h4>
                    <p>Top 21 Teams Presentation: The finalists presented their projects, detailing the progress and improvements made since the initial rounds. Industry experts Arpita K and Akhil JM provided valuable feedback and guidance.</p>
                    <p>Final Evaluation and Awards: The judges assessed the final presentations, focusing on innovation, design, and functionality. The top 3 teams were awarded a cash prize pool of ₹10,000.</p>
                </section>

                <section className="outcomes">
                    <h3>Outcomes</h3>
                    <ul>
                        <li>Enhanced Technical Skills: Participants gained hands-on experience with web development tools and technologies, improving their coding, design, and problem-solving abilities.</li>
                        <li>Innovation and Creativity: The event encouraged students to think outside the box and develop unique web applications, fostering a spirit of innovation and creative thinking.</li>
                        <li>Improved Teamwork and Collaboration: Working in teams allowed participants to develop strong communication and collaboration skills, learning how to effectively share ideas and manage tasks.</li>
                        <li>Valuable Networking Opportunities: Students had the chance to interact with industry professionals and peers from other colleges, building a network that could benefit their future academic and professional endeavors.</li>
                        <li>Industry Exposure and Recognition: The event provided exposure to real-world development scenarios and industry expectations, with top teams receiving recognition and rewards, boosting their confidence and enhancing their resumes.</li>
                    </ul>
                </section>

                <section className="prize-distribution">
                    <h3>Prize Distribution</h3>
                    <ul>
                        <li><strong>FIRST PLACE:</strong> TEAM-25 - SHRIVATSA K S, RAGHAV S BHAT, G VISHNU DATTA. CASH PRIZE OF ₹5000</li>
                        <li><strong>SECOND PLACE:</strong> TEAM-54 - DHANUSH M, RISHABH BHARADWAJ R. CASH PRIZE OF ₹3000</li>
                        <li><strong>THIRD PLACE:</strong> TEAM-12 - SREYAS C, SUMAN NAIDU R. CASH PRIZE OF ₹2000</li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Webathon;

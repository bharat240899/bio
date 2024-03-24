import React, { useState } from 'react';

const TechnicalSkills = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    // Define categories and their respective skills
    const categories = [
        { title: 'Web Development', skills: ['HTML5', 'CSS', 'Bootstrap', 'SASS', 'SCSS', 'jQuery', 'React JS', 'Angular 9', 'Node JS', 'JSON', 'Responsive Web Design', 'AJAX'] },
        { title: 'Programming Languages', skills: ['Python', 'Java', 'C Programming'] },
        { title: 'UI/UX Design', skills: ['UI/UX Research and Design'] },
        { title: 'Web Technologies', skills: ['REST API', 'W3C Accessibility', 'B2C ecommerce', 'Content Management System', 'Cross Browser Testing and Automation'] },
        { title: 'Data Science & Machine Learning', skills: ['ML', 'Deep Learning', 'Data Analysis'] },
        { title: 'Design Tools', skills: ['Figma', 'Canva', 'Adobe'] },
        { title: 'Simulation Tools', skills: ['MATLAB', 'VHDL'] },
        { title: 'IDE Tools', skills: ['Visual Studio Code', 'Eclipse'] },
        { title: 'Version Control Tools', skills: ['GIT', 'Bitbucket', 'Jira'] },
        { title: 'Microsoft Tools', skills: ['Word', 'Excel', 'PowerPoint'] }
    ];

    return (
        <div className="common technical-skills default_spacing bg-black text-white rounded">
            <h2 className="secondary-gradient section-title text-center mb-4">Technical Skills <span>&lt;/&gt;</span></h2>

            {/* Iterate over categories */}
            {categories.map((category, index) => (
                <div className="skills-category mb-4" key={index}>
                    <button
                        className={`accordion-header btn btn-dark w-100 ${activeCategory === index ? 'active' : ''}`}
                        onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                        aria-expanded={activeCategory === index ? 'true' : 'false'}
                        aria-controls={`collapse-${index}`}
                    >
                        {category.title}
                        <span className="accordion-icon">{activeCategory === index ? '-' : '+'}</span>
                    </button>
                    <div
                        className={`collapse ${activeCategory === index ? 'show' : ''}`}
                        id={`collapse-${index}`}
                        aria-labelledby={`heading-${index}`}
                        data-parent="#accordion"
                    >
                        {/* Iterate over skills */}
                        <div className="row mt-2"> {/* Add margin-top here */}
                            {category.skills.map((skill, skillIndex) => (
                                <div className="col-md-6" key={skillIndex}>
                                    <div className="skill-card bg-secondary p-3 mb-2 rounded">
                                        <span className="repo-name">{skill}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechnicalSkills;

import React, { useState } from 'react';
import Messages from '../contents/Messages';

const TechnicalSkills = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <div className="common technical-skills default_spacing bg-black text-white rounded">
            <h2 className="secondary-gradient section-title mb-4">Technical Skills <span>&lt;/&gt;</span></h2>

            {/* Iterate over categories */}
            {Messages.homepage.categories.map((category, index) => (
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
                        <div className="d-flex flex-wrap mt-2">
                            {category.skills.map((skill, skillIndex) => (
                                <div className="col-md-auto m-2" key={skillIndex}> {/* Add mb-3 for uniform spacing */}
                                    <div className="skill-card bg-secondary p-3 rounded">
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

import React from 'react';

const Experience = ({ header, data }) => {
    return (
        <div className='common default_spacing'>
            <h3 className='primary-gradient'>{header}</h3>
            {data.map((experience, index) => (
                <div key={index} className="experience-card text-white border border-1 rounded p-4 mb-4 shadow-sm d-flex align-items-center">
                    <div className="experience-logo flex-shrink-0 me-4 max-w-100">
                        <img src={experience.logo} alt={experience.institution} className="logo-img img-fluid rounded" />
                    </div>
                    <div className="experience-info ms-5">
                        <h3 className="institution-name fs-5 mb-3">{experience.institution}</h3>
                        <p className="title fw-bold mb-3">{experience.title}</p>
                        <ul className="details fs-6 mb-3">
                            {experience.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                        <p className="dates text-secondary fs-6 fw-bold mb-0">{`${experience.startDate} - ${experience.endDate}`}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;

import Tcs from '../assets/Tcs.png';
import Cognizant from '../assets/Cognizant.png';
import WebDevelopment from '../assets/WebDevelopment.jpg';
import WebDesign from '../assets/WebDesign.jpg';
import SEO from '../assets/SEO.jpg';
import CMSImage from '../assets/CMS.jpg';
import TestingImage from '../assets/Testing.jpg';
import EditingImage from '../assets/Editing.jpg';
import TutoringImage from '../assets/Tutor.jpg';

const Messages = {
    homepage: {
        maingrid_banner: {
            title: "Welcome to my social space!",
            description: "I am a Software Engineer with a passion for front-end application design and development. With over 3 years of experience, I specialize in delivering engaging user experiences through efficient website development, feature optimization, and relentless debugging.",
        },
        promobanner:{
            promo_title : 'Looking for digital solutions to boost your business?',
            promo_description: 'Checkout my range of digital services that can potentially boost up your business online.'
        },
        categories: [
            { title: 'Web Development', skills: ['HTML5', 'CSS', 'Bootstrap', 'SASS', 'SCSS', 'jQuery', 'React JS', 'Angular 9', 'Node JS', 'JSON', 'Responsive Web Design', 'AJAX'] },
            { title: 'Programming Languages', skills: ['JavaScript', 'Python', 'Java', 'C Programming'] },
            { title: 'UI/UX Design', skills: ['Branding', 'Research', 'User Experience', 'Styleguides'] },
            { title: 'Web Technologies', skills: ['REST API', 'W3C Accessibility', 'B2C ecommerce', 'Content Management System', 'Cross Browser Testing and Automation'] },
            { title: 'Data Science & Machine Learning', skills: ['ML', 'Deep Learning', 'Data Analysis'] },
            { title: 'Design Tools', skills: ['Figma', 'Canva', 'Adobe'] },
            { title: 'Simulation Tools', skills: ['MATLAB', 'VHDL'] },
            { title: 'IDE Tools', skills: ['Visual Studio Code', 'Eclipse'] },
            { title: 'Version Control Tools', skills: ['GIT', 'Bitbucket', 'Jira'] },
            { title: 'Microsoft Tools', skills: ['Word', 'Excel', 'PowerPoint'] }
        ],
        gridbanner: {
            title: "Mission 2024",
            description1: "In the tumultuous year of 2024, I've encountered my fair share of obstacles, yet none have dampened my resolve to pursue my ultimate goal. From setbacks to triumphs, each experience has fueled my determination to bring my long-held vision to life: the creation of a digital services-focused firm. This dream has been a driving force within me for years, and now, I am fully committed to making it a reality.",
            description2: " As I embark on this exhilarating journey, I invite you to join me and stay updated on my progress. Through regular updates and insights, I'll share the milestones achieved, lessons learned, and the excitement of bringing my digital services-oriented firm to life. Together, let's witness the transformation of a dream into a thriving reality.Stay tuned for more updates on this remarkable journey.",
            project: {
                title1: "Ready Refresh by Blue Triton Brands(Formerly Nestlé Waters)",
                description1: "Ready Refresh is a service that provides home delivery of bottled water and beverage products. It offers a wide range of products, including bottled water, sparkling water, flavored beverages, and other refreshment options. Customers can customize their delivery schedule and order products online or through a mobile app for convenient home delivery. The service aims to provide convenience and hydration solutions to customers seeking quality bottled water and beverage products delivered directly to their doorstep.",
                title2: "The Coco Cola Company - Global Access Management",
                description2: "The Coca-Cola Company - Global Access Management is a comprehensive project designed to facilitate user access management on a global scale. It encompasses various functionalities aimed at creating, logging, and managing user accounts efficiently. Additionally, it provides robust social login features, enhancing user experience and engagement. With a focus on security and usability, this project aims to streamline access control processes while ensuring seamless user interactions across different platforms and regions."
            },
        },
        experiences: {
            header: "Experience",
            data: [
                {
                    logo: Tcs,
                    institution: "Tata Consultancy Services",
                    title: "Senior Front End Developer",
                    details: [
                        "Created and executed software solutions to enhance business operations and boost efficiency.",
                        "Worked closely with designers and developers to transform design concepts into functional web applications."
                    ],
                    startDate: "October 2022",
                    endDate: "August 2023"
                },
                {
                    logo: Cognizant,
                    institution: "Cognizant Technology Solutions",
                    title: "Programmer Analyst",
                    details: [
                        "Developed user-friendly web interfaces with HTML5, CSS3, and JavaScript, utilizing frameworks like React and Angular.",
                        "Operated in an agile setting as a Front End/UI developer, ensuring responsiveness, SEO, and accessibility.",
                        "Wrote compatible code for various browsers like Mozilla, Safari, and Chrome."
                    ],
                    startDate: "December 2020",
                    endDate: "September 2022"
                }
            ]
        },
    },
    services: {
        mainbanner: {
            title: 'Elevate Your Online Presence Now. ',
            description: `Expert Guidance for Digital Success. Let's Soar Together in the Digital World of Opportunities.`,
        },
        cardsData : [
            { title: 'Web Design', image: WebDesign, description: 'Creative and innovative web design solutions for your business.' },
            { title: 'Web Development', image: WebDevelopment, description: 'Expert web development services tailored to your needs.' },
            { title: 'SEO', image: SEO, description: 'Improve your website\'s search engine visibility with our SEO services.' },
            { title: 'CMS', image: CMSImage, description: 'Powerful content management system solutions to manage your website efficiently.' },
            { title: 'Testing', image: TestingImage, description: 'Comprehensive testing services to ensure the quality and reliability of your software applications.' },
            { title: 'Editing', image: EditingImage, description: 'Professional video editing services to enhance the quality of your videos.' },
            { title: 'Tutoring', image: TutoringImage, description: 'Personalized tutoring services to help you master various subjects and skills.' },
          ],
    },
    contact:{
        mainbanner:{
            title:`Let's Team!`,
            description:`Hey there! I'm excited to connect with you and explore potential collaborations. Whether you're interested in discussing projects, sharing ideas, or simply saying hello, I'm here to chat.`
        }
    }
}

export default Messages;

import aiwe from "../images/aiwe.png";
import personas from "../images/Personas.png";
import dubem from "../images/Dubem's journey map.png";
import vivian from "../images/vivians journey map.png";
import chart from "../images/chart.jpeg";
import color from "../images/color.png";
import sign from "../images/signin and signup screens.png";
import screens from "../images/home clubs and group screen.png";
import screens2 from "../images/Libary and profile.png";

const projects = [
    {
        img: aiwe,
        name: "Aiwe",
        description: "Aiwe is a connective space for students to learn, read, and discuss together on different courses.",
        roleDesc: "As a product designer, I conducted",
        roles: [
            {role: "User Research"},
            {role: "Branding"},
            {role: "Wireframing"},
            {role: "Protyping"},
            {role: "Ui/Ux design"},
        ],
        researchMethod: [
            {research: [
                {head: "• Quantitative Research"},
                {list: "° Surveys"},
                {list: "° Data Collection"},
                {list: "° Data analysis"},
            ]},
            {research: [
                {head: "• Qualitative Research"},
                {list: "° Observations"},
                {list: "° Interviews"}
            ]}
        ],
        challeneges: [
            {challenege: "Due to the pandemic, we have been restricted from social gatherings which has affected the learning of students in some ways."},
            {challenege: "Students love to connect with themselves especially to study to understand courses better, but because of the rule of social distancing, they can't anymore."},
            {challenege: "Again considering that these students studied with their peers, they are most likely to understand the courses better."}
        ],
        researches: [
            {research: "Using the most effective methods of research, I was able to understand my target market and make better decisions in design."},
            {research: "I conducted a question in my school, on twitter and whatsapp to enable students from other schools participate."},
            {research: "On analysis, a total of about 80 responses were recorded."},
            {research: "• 90% of students love to connect with each other."},
            {research: "• 75% of students do not study together."},
            {research: "• In this 75%, 64% would love to share and learn from other students."},
            {research: "• 60% of students prefer getting tutore by their peers than actually attending lectures."},
            {research: "Based on the responses, I realized that some students do not attend classes but would rather wait and have their peers tutor them to understand better."},
            {research: "Aside conduction question session, I also conducted an interview between two students from different schools Vivian and Dubem. I asked Dubemto participate in the interview because he tutuors and studies with other students before the pandemic, and Vivian because she doesn't discuss with any student."},
        ],
        extras: [
            {   head: "Key Findings",
                name: "Vivian- ",
                comment: " Sometimes after hours of classes, I still don't understand so courses so I need extra tutoring from my course mates."
            },
            {
                name: "Dubem- ",
                comment: " I usually meet with other students to study together but the pandemic has made it impossible."
            }
        ],
        personas: personas,
        jorneyMaps: [
            {
                name: "Vivian",
                img: vivian
            },
            {
                name: "Dubem",
                img: dubem
            }
        ],
        solutions: [
            {solution: "I designed Aiwe as a safe place or connective joint for students all over the world to be able to connect, tutor and discuss courses with themselves."},
            {solution: "They can download textbooks via pdfs from library spaces, make public posts about courses, join clubs linked to their courses and have a group discussion in the chat space."},
            {solution: "Since students love to study together, then Aiwe is the best place to be."},
        ],
        process: [
            {
                p: "Following the aims of the personas, I laid out the user flow of this product. Creating a user flow helped me point out the aim of this product.",
                img: chart
            },
            {
                p: "I sketched a low-fidelity wireframe to have a clearer aim of the layout and hierarchy of the design of this product. For the colors, I picked a shade of blue which represents stability, trust and serenity and white which represents purity, protection, brilliance, safety and perfection. I made a palette with these two colors and then proceeded to create the high-fidelity wire frame.",
                img: color
            },
            {
                img: aiwe
            },
            {
                img: sign
            },
            {
                img: screens
            },
            {
                img: screens2
            },
            {
                p: "Designing this product helped me understand how different aspects of a person's life are related to each other.",
            },
            {
                p: "With the responses I recieved, a lot of students love to study together and dicuss their ideas freely with other students.",
            },
            {
                p: "The Aiwe app would be of help to improve stidents knowledge and help them thrive and become better peopls.",
            },
        ],
        link: "/work/aiwe",
        mediumLink: "https://link.medium.com/gcPgG5F1whb"
    },
]

export {projects};
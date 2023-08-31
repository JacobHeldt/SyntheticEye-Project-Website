// All static Text shouwn on website
import imgslider1 from '../assets/imgslider1.png';
import imgslider2 from '../assets/imgslider2.png';
import imgslider3 from '../assets/imgslider3.png';
import jacobimg from '../assets/jacobimg.webp';
import noahimg from '../assets/noahimg.png';
import aigeneratedaudio from '../assets/aigeneratedautio.jpeg';
import aigenerateddeepfake from '../assets/aigenerateddeepfake.jpeg';
import aigeneratedface from '../assets/aigeneratedface.jpeg';
import aigeneratedimage from '../assets/aigeneratedimage.jpeg';
import aigeneratedtext from '../assets/aigeneratedtext.jpeg';


// Navbar items
// export const navLinks = [
//     {
//         id: "home",
//         title: "Home"
//     },
//     {
//         id: "project",
//         title: "Project"
//     },
//     {
//         id: "about_us",
//         title: "About us"
//     },
//     {
//         id: "models",
//         title: "Models"
//     }
// ]

export const navLinks = [
    {
        id: "aletheia",
        title: "Face Detection"
    },
    {
        id: "content-library",
        title: "Content Library"
    },
    {
        id: "privacy-policy",
        title: "Privacy Policy"
    }
]




export const learn_featured = [
    {
        title: "From Creation to Detection: AI's Central Role in Misinformation",
        link: "https://www.linkedin.com/pulse/from-creation-detection-ais-central-role-jacob-heldt%3FtrackingId=sXEbSOSOS8a5gPChd2mrow%253D%253D/?trackingId=sXEbSOSOS8a5gPChd2mrow%3D%3D",
        description: "AI can create and detect deepfakes, a threat to truth. SyntheticEye is an app to verify content authenticity.",
        date: "26 Aug 2023",
        time_to_read: "2min",
        author: "Jacob Heldt, Noah Brömme",
        icon: "FaEye"
    },
    {
        title: "The Dangers of AI generated Content",
        link: "https://www.linkedin.com/pulse/dangers-ai-generated-content-jacob-heldt/?trackingId=VUvznYHnQM6AHB1zg97uwA%3D%3D",
        description: "AI-generated content can spread misinformation, bias, plagiarism, and reduce human creativity. We need ethical guidelines and AI detectors.",
        date: "23 Jun 2023",
        time_to_read: "3min",
        author: "Jacob Heldt, Noah Brömme",
        icon: "FaNewspaper"
    },
    {
        title: "What are deepfakes – and how can you spot them?",
        link: "https://www.theguardian.com/technology/2020/jan/13/what-are-deepfakes-and-how-can-you-spot-them",
        description: "AI-generated fake videos are becoming more common and dangerous. They can deceive, harass and erode trust. How to detect and regulate them?",
        date: "13 Jan 2020",
        time_to_read: "10min",
        author: "The Guardian, Ian Sample",
        icon: "FaBalanceScaleLeft"
    },
    {
        title: "What Is AI-Generated Content?",
        link: "https://proofed.com/knowledge-hub/what-is-ai-generated-content/",
        description: "AI can generate or assist content creation, but has risks and limitations. Use with caution and proofread before publishing.",
        date: "21 Mr 2023",
        time_to_read: "7min",
        author: "Proofed",
        icon: "FaMagnifyingGlass"
    }
]
export const learn_standard = [
    {
        title: "How to spot AI-generated text",
        link: "https://www.technologyreview.com/2022/12/19/1065596/how-to-spot-ai-generated-text/",
        description: ""
    }
]




// Our project
export const project = [
    {
        id: "goal",
        bg: "",
        title: "Our Goal",
        text: "Our goal is to develop a comprehensive application that detects and distinguishes AI-generated content from human-generated content across various media formats, starting with images and expanding to video, text, and audio. Thus enabling anyone to recognize AI-generated content and combat the spread of misinformation in the digital world."
    },
    {
        id: "finalProduct",
        bg: "",
        text: "We want to develop an advanced and user-friendly application, that has the ability to easily detect AI-generated content. It will incorporate cutting-edge detection models and provide a seamless experience for users, enabling them to make informed decisions."
    },
    {
        id: "stepsInvolved",
        bg: "",
        text: "Specialized models are built for images, videos, text, and audio using machine learning and deep learning methods. Diverse datasets are acquired and utilized to train the detection models, enhancing their accuracy and reliability."
    }
]


// About Us
export const imageSlider = [
    {
        id: "img-1",
        source: imgslider1
    },
    {
        id: "img-2",
        source: imgslider2
    },
    {
        id: "img-3",
        source: imgslider3
    }
]

export const about = [
    {
        id: "noah",
        title: "Noah Brömme",
        content: "Hello! I have lived in NY for 9 years. I have found interest in technology and AI. I also play the piano and the guitar and I am amazed by the art of photography. With the rise of deepfakes and AI-generated content in our everyday lives, I found myself interested in these topics.",
        personimg: jacobimg
    },
    {
        id: "jacob",
        title: "Jacob Heldt",
        content: "Hello! After living in the Netherlands for 7 years, I now live in New York since 2 years and have developed passion for technology, creativity, and innovation. Machine Learning is a significant area of interest for me, and I am constantly striving to improve my understanding and expertise in this field. ",
        personimg: noahimg
    }
]


// Our Models
export const theModels = [
    {
        id: "imgDetection",
        title: "Image Detector",
        modelimg: aigeneratedimage,
        imgsubtitle: '"A renaissance painting of an elephant in a tuxedo" by bing image creator',
        content: 'A machine learning model that can detect AI generated images and can distinguish them from real images. Ranging from cars, houses, apples and all kinds of everyday objects'
    },
    {
        id: "faceDetection",
        title: 'AI Generated Face Detection',
        modelimg: aigeneratedface,
        imgsubtitle: '"portrait of a young man" by bing image creator',
        content: 'A machine learning model that can detect faces generated by AI and can distinguish them from real faces. This is useful for example when detecting fake profiles on social media platforms'
    },
    {
        id: "textDetection",
        title: 'Text Detector',
        modelimg: aigeneratedtext,
        imgsubtitle: '"Text" by bing image creator',
        content: 'A machine learning model that detects AI generated text. These texts can for example be based on ChatGPT generations.'
    },
    {
        id: "audioDetection",
        title: 'Audio Detector',
        modelimg: aigeneratedaudio,
        imgsubtitle: '"Audio" by bing image creator',
        content: 'A machine learning model that can detect AI generated audio and music. This can range from voices to generated music.'
    },
    {
        id: "deepfakeDetection",
        title: 'Deepfake Detector',
        modelimg: aigenerateddeepfake,
        imgsubtitle: '"Video" by bing image creator',
        content: 'A machine learning model that can detect advanced deepfakes. This is the highest form of AI generated content detection.'
    }
]



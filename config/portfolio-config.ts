export const portfolioConfig = {
  // Personal Information
  name: "Trang Nguyen",
  title: "Computer Engineering Student",
  email: "trangn12@uci.edu",
  phone: "(714)-552-7557",
  location: "Irvine, CA",
  github: "https://github.com/trangn12",
  linkedin: "https://www.linkedin.com/in/trang-nguyen-b93278252/",
  portfolio: "https://your-portfolio-url.com",

  about: `I'm a Computer Engineering student at the University of California, Irvine, expected to graduate in June 2026. 
  I'm passionate about developing innovative solutions in software development, embedded systems, and hardware-software integration. 
  With experience in various programming languages and frameworks, I've worked on projects ranging from AI-powered study tools to 
  MIPS pipelined processors.`,

  skillsBackground:
    "https://sjc.microlink.io/Ayrq0DUDHE0hEiNiQ5oWBt1kco-d2l9aPlR3oCKJknLx0OB_2CgOC4yigr1PkhBZtAZ3JgJ8-UtcT3f717MswA.jpeg",

  // Skills
  skills: [
    {
      title: "Programming Languages",
      description: "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS",
      icon: "Code",
    },
    {
      title: "Frameworks & Tools",
      description: "React, Node.js, Flask, JUnit, Git, Google Cloud Platform, Matlab, Visual Studio, IntelliJ",
      icon: "Wrench",
    },
    {
      title: "Hardware",
      description: "FPGA, Arduino, Verilog, Vivado, Circuit Design, Signal Processing",
      icon: "Cpu",
    },
    {
      title: "Other Skills",
      description: "R, Assembly,Data Structures, Linux, GTK",
      icon: "Layers",
    },
  ],

  // Projects
  projects: [
    {
      title: "Building Management System : Smart Room Monitor",
      description: `I developed a multi-sensor embedded system on a Raspberry Pi to monitor and automate room conditions for energy efficiency and security. The system utilized five sensors (PIR, DHT11, light, ultrasonic, and RGB color) to control lighting, HVAC, and alert mechanisms based on real-time environmental data. I implemented GPIO interrupt handling for responsive motion detection and displayed live system states on an I2C LCD. To enable remote monitoring and control, I integrated AWS IoT Core via MQTT, allowing sensor data publishing and time-stamped fire alerts. The project emphasized reliable event-driven design, cloud integration, and clear visual feedback.`,
      technologies: ["Python", "Raspberry Pi", "GPIO", "DHT11", "I2C LCD", "MQTT", "AWS IoT"],
      image: "https://i.pinimg.com/originals/43/d1/47/43d1471cf25af081f98d782f4b3e8e4b.png",
      video: "https://drive.google.com/drive/search?dmr=1&ec=wgc-drive-globalnav-goto&q=system",
    },
    {
      title: "LiveAid : Financial Impact Dashboard for Displaced Populations",
      description: `I collaborated in a cross-functional team to build LiveAid, a full-stack web dashboard aimed at tracking and analyzing the financial well-being of displaced populations. I contributed to both front-end and back-end development, leveraging Flask for server-side logic and crafting an interactive interface using JavaScript, HTML, and CSS. I led the integration of OpenAI, YouTube, and Yelp APIs to provide personalized educational and resource-based recommendations for users. To ensure performance and scalability, I optimized API usage and implemented persistent session storage for seamless cross-session interactions. Additionally, I introduced and guided the team in using Git version control, significantly improving code collaboration and reducing merge conflicts.`,
      technologies: ["Python", "Flask", "JavaScript", "HTML", "CSS", "REST APIs", "Git"],
      github: "https://github.com/xhcarina/Hacktech25-LiveAid",
      devpost: "https://devpost.com/software/live-aid",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-enaIi1enxJuLGS1es52SLW40NYX8hW.png",
      video: "https://www.youtube.com/embed/6_4x6UJs7hA",
    },
    {
      title: "Mocha Minds: A Self Study Tool Kit Using AI",
      description: `As part of a team, I developed a full-stack web application that integrates AI-driven tools to enhance self-learning experiences. We built the backend using Flask and designed an interactive front end with JavaScript, HTML, and CSS. I played a key role in integrating OpenAI, YouTube, and Yelp APIs to generate personalized recommendations while optimizing API calls to prevent excessive resource consumption. Additionally, I led the implementation of session storage to manage user data persistently, allowing seamless user interactions across sessions. To improve our development workflow, I trained the team in Git version control, streamlining collaboration and reducing merge conflicts.`,
      technologies: ["Python", "Flask", "JavaScript", "HTML", "CSS", "REST APIs", "Git"],
      github: "https://github.com/BaneBeetle/VenusHacks",
      devpost: "https://devpost.com/software/mochaminds",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JTxBUGuH8fly9wtJMz2tQXYiEvMnPq.png",
      video: "https://www.youtube.com/embed/19xaTrmU9SI?si=cIe3iGn4F4EVIvvA",
    },
    {
      title: "Chess Game Using C",
      description: `I collaborated with a team to develop a chess game in C, implementing advanced data structures to efficiently validate chess moves and enforce game rules. Initially designed as a console-based program, we transitioned the game to a graphical user interface (GUI) using GTK, significantly improving user experience. I also led efforts in managing the packaging and installation process for Linux systems, ensuring seamless deployment. Through effective teamwork, we optimized game logic and enhanced performance, reducing move validation time while maintaining accurate rule enforcement.`,
      technologies: ["C", "Data Structures", "Linux", "GTK", "Git"],
      github: "https://github.com/trangn12/chess-game",
      demo: "https://www.canva.com/design/DAGCtL19wJg/LMxQyph4SK1u2-czR-4MuA/view?utm_content=DAGCtL19wJg&utm_campaign=designshare&utm_medium=link&utm_source=viewer#10",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OFihmkPR89Km8LiDDLdnYS3NDGb5QD.png",
    },
    {
      title: "MIPS Pipelined Processor",
      description: [
        `I designed and implemented a 32-bit MIPS pipelined processor and synthesized a 32-bit ALU and counter module on the Basys 3 FPGA. This project required a deep understanding of computer architecture and digital logic to optimize instruction execution. I conducted extensive analysis of timing, power consumption, and resource utilization in Vivado to refine performance while minimizing hardware overhead. To validate the system, I implemented various test cases and monitored the output through FPGA LEDs, ensuring correct functionality. This project strengthened my expertise in FPGA design, Verilog coding, and hardware testing methodologies.`,
      ],
      technologies: ["Verilog", "Vivado", "FPGA"],
      github: "https://github.com/trangn12/mips-processor",
      image: "https://th.bing.com/th/id/OIP.hGz_QF_T-VEUbCaN5eoEAgHaEQ?w=261&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      title: "Audio-to-LED Real-Time Visualization System",
      description: `Working as part of a team, I developed a real-time audio visualization system that captures and processes audio signals using Fast Fourier Transform (FFT) to drive LED outputs. My role focused on signal processing and optimizing the synchronization between live audio input and LED patterns. We implemented noise reduction techniques and refined microphone calibration, significantly reducing false frequency triggers. Through collaborative testing and debugging, we achieved a highly responsive and accurate system that visually represents sound in real time, enhancing both aesthetics and functionality.`,
      technologies: ["Python", "Arduino", "Signal Processing"],
      github: "https://github.com/trangn12/audio-visualization",
      demo: "https://youtu.be/p5ENHWJ6zPc",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nJaCwZzTH4PJCLh2n1TG1dwmJegViJ.png",
      video: "https://www.youtube.com/embed/p5ENHWJ6zPc",
    },
    {
      title: "(In Progress) FemFit: AI-Powered Fitness Recommendation System",
      description: `As the lead developer, I built FemFit, an AI-powered fitness platform designed to provide personalized workout recommendations tailored to women's unique needs, including hormonal changes during their menstrual cycle. The system integrates wearable device data, user inputs, and predictive machine learning models to offer adaptive fitness plans. My focus was on developing the backend logic for real-time recommendations, implementing secure data handling, and creating a user-friendly interface for seamless interaction. Using AI-driven insights, FemFit empowers women to take control of their fitness and well-being with personalized guidance.`,
      technologies: ["Next.js", "React Native", "TensorFlow", "Firebase", "Apple HealthKit API", "Google Fit API"],
      github: "https://github.com/trangn12/femfit",
      demo: "https://femfit.vercel.app/",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YgY6nFjKs6i3slHRBo7Ux6i4tNODYt.png",
    },
    {
      title: "Tic-Tac-Toe",
      description: `I developed a console-based Tic-Tac-Toe game in C, leveraging structured programming techniques to create an interactive and user-friendly experience. By implementing fundamental game logic functionalities, I ensured proper turn-based gameplay, win-condition checks, and error handling for invalid moves. The project required designing an efficient control structure that managed user inputs, updated the game board dynamically, and validated winning conditions in real time. I also incorporated input validation and edge case handling, preventing unintended behavior such as overwriting existing moves or exceeding array bounds. To enhance user engagement, I designed an intuitive ASCII-based UI, providing clear game instructions and real-time feedback. Through this project, I strengthened my C programming skills, deepened my understanding of data structures, and gained experience in developing algorithmic solutions for interactive applications.`,
      technologies: ["C", "Linux"],
      github: "https://github.com/trangn12/tic-tac-toe",
      demo: "https://www.canva.com/design/DAGCtL19wJg/LMxQyph4SK1u2-czR-4MuA/view?utm_content=DAGCtL19wJg&utm_campaign=designshare&utm_medium=link&utm_source=viewer#28",
      presentation:
        "https://www.canva.com/design/DAGCtL19wJg/LMxQyph4SK1u2-czR-4MuA/view?utm_content=DAGCtL19wJg&utm_campaign=designshare&utm_medium=link&utm_source=viewer#10",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S0ouhkXn4jg0SDhGHDJW33N4qAAHQy.png",
    },
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of California, Irvine",
      duration: "Expected Graduation - June 2026",
      description:
        "Relevant coursework: Object Oriented Systems and Programming, Data Structures & Algorithms, Design & Analysis of Algorithms,Computer Organization, Compute Architecture, Discrete-Time Signals and Systems, Network Analysis",
    },
  ],

  // Work Experience
  experience: [
    {
      title: "Webmaster",
      company: "FSAE Electric Racing at UC Irvine",
      duration: "January 2025 – Present",
      description: `As the Webmaster for FSAE Electric Racing at UC Irvine, I led a comprehensive Next.js-based website overhaul that significantly improved routing efficiency, page load speeds, and accessibility for over 100 team members and sponsors. I implemented modern web development practices, including responsive design principles and performance optimizations, resulting in a more intuitive and faster user experience. Currently, I'm integrating backend form functionality and real-time update logs to support detailed documentation of electrical and mechanical progress. This system will enable team members to efficiently record and track development milestones, enhancing collaboration and knowledge transfer across engineering disciplines. Through this role, I've strengthened my full-stack development skills while directly contributing to the team's digital infrastructure and communication capabilities.`,
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Server Actions", "Web Performance"],
      image: "https://placeholder.svg?height=400&width=600&query=FSAE+Electric+Racing+UCI+team+with+electric+race+car",
      moreInfo: "https://www.uciracing.com/",
    },
    {
      title: "Technical Director",
      company: "UCI Engineering Student Council",
      duration: "June 2024 – Present",
      description: `As the Technical Director of the UCI Engineering Student Council, I oversee the development and maintenance of the council's digital infrastructure, ensuring smooth communication and engagement with the engineering student body. I manage the council's website, internal databases, and technical resources, optimizing workflow efficiency and accessibility for members and external partners. Additionally, I spearhead software development initiatives, implementing tools that streamline event planning, membership tracking, and outreach efforts. I collaborate closely with other board members to identify technical needs and propose innovative solutions that enhance the council's digital presence. Through this role, I have honed my leadership, problem-solving, and technical project management skills while making a tangible impact on the student engineering community.`,
      technologies: ["React", "Node.js", "Google Cloud Services"],
      image: "https://esc.eng.uci.edu/assets/img/mission/group-photo.png",
      moreInfo: "https://esc.eng.uci.edu/committee/cabinet.html",
    },
    {
      title: "Product Engagement and Strategy Specialist",
      company: "Goshsha",
      duration: "Jun. 2024 – Present",
      description: `As a Product Engagement and Strategy Specialist at Goshsha, I play a pivotal role in driving user adoption and engagement for the company's augmented reality (AR) product recognition platform. I develop and execute strategic outreach initiatives, collaborating with businesses, student organizations, and influencers to expand Goshsha's presence. My responsibilities include conducting market research and user feedback analysis to refine engagement strategies and improve the user experience. I also create compelling digital content and promotional campaigns, leveraging my strong communication skills to educate potential users on Goshsha's value proposition. This role has enhanced my expertise in growth strategy, product marketing, and consumer behavior analysis, positioning me at the intersection of technology and business development.`,
      technologies: ["Data Analysis", "Social Media", "User Experience"],
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQGVNbyUmKYvMw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1724796720490?e=1741219200&v=beta&t=wZxfUFbf_Csv0zbu5wa_HX81VFxdBonNdO-rR9BWA24",
      moreInfo:
        "https://www.linkedin.com/posts/trang-nguyen-b93278252_goshsha-productdiscovery-innovation-activity-7234321791937064960-nP5H?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Academic Success Coach",
      company: "UCI Engineering Undergraduate Advising Office",
      duration: "Sep 2024 - Present",
      description: `As an Academic Success Coach for the UCI Engineering Department, I mentor students struggling with coursework, study strategies, and time management. I conduct one-on-one coaching sessions and workshops, providing personalized guidance to help students overcome academic challenges and develop effective learning habits. Additionally, I work with faculty and department staff to identify common student pain points and design resources that support student success. Through this role, I have developed strong mentorship, communication, and problem-solving skills, making a direct impact on the academic growth and confidence of engineering students at UCI.`,
      technologies: ["NASPA Coaching", "Workshop Facilitation", "Academic Support"],
      image: "https://undergraduate.eng.uci.edu/files/2025/01/Cropped-Photo-of-Group-1536x986.jpg",
      moreInfo:
        "https://undergraduate.eng.uci.edu/students/engineering-student-success-coaches/#:~:text=Our%20Engineering%20Student%20Success%20Coaches%20provide%20one-on-one%20sessions,students%20to%20help%20address%20academic%20and%20personal%20needs.",
    },
    {
      title: "Chess Instructor",
      company: "Strategic Kids",
      duration: "Oct. 2022 – Aug. 2024",
      description: `As a Chess Instructor at Strategic Kids, I taught students of varying skill levels critical thinking, problem-solving, and strategic planning through the game of chess. I designed and led interactive lessons that covered chess fundamentals, opening principles, tactical patterns, and endgame strategies. I also facilitated structured gameplay and analysis sessions, helping students improve their decision-making and pattern recognition skills. By fostering a fun and engaging learning environment, I encouraged students to develop patience, resilience, and sportsmanship. This role reinforced my ability to communicate complex ideas effectively, adapt teaching methods to different learning styles, and inspire intellectual curiosity in young learners.`,
      technologies: ["Classroom Instruction", "Educational Program Design", "Event Management"],
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQFtqv-v-2Oihw/feedshare-shrink_800/feedshare-shrink_800/0/1696298846885?e=1741219200&v=beta&t=2RsBW829MgU25zK0U2-9sVByDytQX8b6oXf2HemRAJ0",
      moreInfo:
        "https://www.linkedin.com/posts/trang-nguyen-b93278252_another-fun-day-with-the-kids-in-origami-activity-7114793040921202688-Fvgf?utm_source=share&utm_medium=member_desktop",
    },
  ],
}

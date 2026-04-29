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
      description: "React, Node.js, Flask, JUnit, Git, Google Cloud Platform, Visual Studio, IntelliJ",
      icon: "Wrench",
    },
    {
      title: "Hardware",
      description: "FPGA, Arduino, Signal Processing",
      icon: "Cpu",
    },
    {
      title: "Other Skills",
      description: "R, Assembly,Data Structures, Linux, GTK, Verilog, Vivado",
      icon: "Layers",
    },
  ],

  // Projects
  projects: [
    {
      title: "Mocha Minds: A Self Study Tool Kit Using AI",
      description: `Developed a full-stack web application using Python Flask for the backend and JavaScript, HTML, and CSS for the front end. 
    Incorporated APIs from OpenAI, YouTube, and Yelp, delivering personalized, diverse results for users while ensuring efficient API usage, preventing resource depletion. 
    Led the implementation of session storage to manage user data, enabling the development of various features. 
    Trained the team in Git version control to streamline development and collaboration.`,
      technologies: ["Python", "Flask", "JavaScript", "HTML", "CSS", "REST APIs", "Git"],
      github: "https://github.com/trangn12/mocha-minds",
      devpost: "https://devpost.com/software/mochaminds#updates",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JTxBUGuH8fly9wtJMz2tQXYiEvMnPq.png",
      video: "https://www.youtube.com/embed/19xaTrmU9SI?si=cIe3iGn4F4EVIvvA",
    },
    {
      title: "Chess Game Using C",
      description: `Developed backend logic for chess movements using advanced data structures, ensuring accurate and efficient gameplay. 
    Transitioned the game from a console-based interface to a graphical user interface (GUI), enhancing user experience. 
    Managed the packaging and installation process for Linux systems, ensuring smooth deployment.`,
      technologies: ["C", "Data Structures", "Linux", "GTK", "Git"],
      github: "https://github.com/trangn12/chess-game",
      demo: "https://www.canva.com/design/DAGCtL19wJg/LMxQyph4SK1u2-czR-4MuA/view?utm_content=DAGCtL19wJg&utm_campaign=designshare&utm_medium=link&utm_source=viewer#10",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OFihmkPR89Km8LiDDLdnYS3NDGb5QD.png",
    },
    {
      title: "MIPS Pipelined Processor",
      description: [
        `Designed and implemented a 32-bit MIPS pipelined processor and 3-bit ALU on the Xilinx Basys3 FPGA using Verilog, 
    focusing on meeting timing constraints and efficient resource utilization.`,
        `Conducted comprehensive timing, power, and utilization analysis in Vivado, optimizing the design for performance and efficiency.`,
        `Verified hardware functionality by generating bitstreams and testing outputs through switches and LEDs, ensuring accurate execution of MIPS instructions.`,
      ],
      technologies: ["Verilog", "Vivado", "FPGA"],
      github: "https://github.com/trangn12/mips-processor",
      image: "https://th.bing.com/th/id/OIP.hGz_QF_T-VEUbCaN5eoEAgHaEQ?w=261&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      /*below is how to add images and text
      images: [
        {
          url: "https://th.bing.com/th/id/OIP.hGz_QF_T-VEUbCaN5eoEAgHaEQ?w=261&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          caption: "MIPS Processor Block Diagram",
        },
        {
          url: "https://www.researchgate.net/profile/Kirat-Singh-2/publication/273387993/figure/fig4/AS:286183030177792@1445242759113/Resulant-Waveform-of-Encrypted-Instruction_Q640.jpg",
          caption: "MIPS Processor Waveform Simulation",
        },
      ],*/
    },
    {
      title: "Audio-to-LED Real-Time Visualization System",
      description: `Developed a Python-based signal processing system using Fast Fourier Transform (FFT) to analyze real-time audio 
    frequencies and map them to LED colors and brightness. 
    Captured live audio input, process signals, and control LED arrays, achieving hardware-software synchronization. 
    Addressed challenges in noise reduction and microphone calibration, optimizing system performance for accurate and 
    dynamic audio-visual representation.`,
      technologies: ["Python", "Arduino", "Signal Processing"],
      github: "https://github.com/trangn12/audio-visualization",
      demo: "https://youtu.be/p5ENHWJ6zPc",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nJaCwZzTH4PJCLh2n1TG1dwmJegViJ.png",
      video: "https://www.youtube.com/embed/p5ENHWJ6zPc",
    },
    // Add more projects here as needed
    {
      title: "Tic-Tac-Toe",
      description: `C-based game`,
      technologies: ["C", "Linux"],
      github: "https://github.com/trangn12/tic-tac-toe",
      demo: "/projects/tic-tac-toe",
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
      description: "Relevant coursework: Digital Systems, Computer Architecture, Embedded Systems",
    },
  ],

  // Work Experience
  experience: [
    {
      title: "Technical Director",
      company: "UCI Engineering Student Council",
      duration: "June 2024 – Present",
      description: `Led the development of a new portfolio website to showcase ESC activities and support corporate sponsorship efforts 
    using tools such as React, Node.js, and Google Cloud Services. 
    Manage and update the ESC and P-Council websites, enhancing user interface and automating content management. 
    Oversee EScan, the registration system for E-Week, integrating student verification protocols and automating event entry.`,
      technologies: ["React", "Node.js", "Google Cloud Services"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6LGmOZMMN99pjQiZuaehzIoMgoiLE.png",
      moreInfo: "https://esc.eng.uci.edu/committee/cabinet.html",
    },
    {
      title: "Brand Ambassador",
      company: "Goshsha",
      duration: "Jun. 2024 – Present",
      description: `Led a campus outreach campaign to boost app visibility, focusing on targeted promotion strategies that increased app 
    downloads and user engagement by 20%. Created and optimized tech-related reels on Instagram and TikTok using data-driven insights, 
    driving a 25% increase in views and quadrupling user interactions by enhancing brand awareness by showcasing the app's key features. 
    Collected and relayed valuable user feedback to the app development team, resulting in feature updates and improvements.`,
      technologies: ["Data Analysis", "Social Media", "User Experience"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-gosshha-NTxBUGuH8fly9wtJMz2tQXYiEvMnPq.png",
      moreInfo:
        "https://www.linkedin.com/posts/trang-nguyen-b93278252_goshsha-productdiscovery-innovation-activity-7234321791937064960-nP5H?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Academic Success Coach",
      company: "UCI Engineering Undergraduate Advising Office",
      duration: "Sep 2024 - Present",
      description: `Provided one-on-one academic coaching to engineering students, helping them improve study strategies, time 
    management, and problem-solving skills. Conducted workshops and guided students to university resources, ensuring access to tutoring, 
    counseling, and academic support. Utilize NASPA-certified coaching techniques to support student success in overcoming academic challenges.`,
      technologies: ["NASPA Coaching", "Workshop Facilitation", "Academic Support"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-uci-advising-NTxBUGuH8fly9wtJMz2tQXYiEvMnPq.png",
      moreInfo:
        "https://undergraduate.eng.uci.edu/students/engineering-student-success-coaches/#:~:text=Our%20Engineering%20Student%20Success%20Coaches%20provide%20one-on-one%20sessions,students%20to%20help%20address%20academic%20and%20personal%20needs.",
    },
    // Add more experiences here as needed
  ],
}


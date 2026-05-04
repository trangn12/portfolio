export const portfolioConfig = {
  name: "Trang Nguyen",
  title: "Computer Engineering Student at UC Irvine",
  email: "trangn12@uci.edu",
  phone: "(714)-552-7557",
  location: "Irvine, CA",
  github: "https://github.com/trangn12",
  linkedin: "https://www.linkedin.com/in/trang-nguyen-b93278252/",
  portfolio: "https://your-portfolio-url.com",

  about:
    "Computer Engineering student at UC Irvine building across software, embedded systems, AI analytics, and product strategy. I like work that connects technical depth with clear user impact, from edge AI systems and IoT monitoring to student-facing platforms and product growth.",

  skills: [
    {
      title: "Programming Languages",
      description:
        "Core languages for software, systems, hardware, and data work.",
      icon: "Code",
      targets: ["Software", "Systems", "Hardware"],
      tools: ["Python", "C/C++", "JavaScript/TypeScript", "SQL", "Verilog", "Assembly"],
      proof: ["Python for AI/data pipelines", "C/C++ for embedded control", "Verilog/Assembly for hardware-level design"],
    },
    {
      title: "Software & Full-Stack Development",
      description:
        "Full-stack web systems from frontend to backend APIs.",
      icon: "Code",
      targets: ["Full Stack", "Web", "APIs"],
      tools: ["React", "Next.js", "Node.js", "Express.js", "Flask", "REST APIs", "Tailwind CSS", "HTML/CSS"],
      proof: ["React/Next.js dashboards", "Flask API services", "REST integrations across AI and external APIs"],
    },
    {
      title: "Embedded Systems & Hardware",
      description:
        "Real-time hardware control, sensors, and edge devices.",
      icon: "Cpu",
      targets: ["Embedded", "Hardware", "Robotics"],
      tools: ["ESP32", "Raspberry Pi", "Jetson Nano/Orin", "GPIO", "I2C", "SPI", "UART", "PWM", "Embedded C", "Real-Time Systems"],
      proof: ["ESP32 real-time control", "Raspberry Pi edge systems", "I2C/SPI/UART multi-sensor integration"],
    },
    {
      title: "AI & Machine Learning",
      description:
        "Computer vision, model evaluation, and deployment workflows.",
      icon: "Database",
      targets: ["AI", "ML", "Vision"],
      tools: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Ultralytics YOLO", "ONNX Runtime", "Model Evaluation", "Data Preprocessing"],
      proof: ["YOLO/OpenCV vision pipelines", "ONNX Runtime deployment", "model evaluation and preprocessing workflows"],
    },
    {
      title: "Cloud & DevOps",
      description:
        "Cloud platforms, containers, Linux environments, and deployment pipelines.",
      icon: "Layers",
      targets: ["Cloud", "DevOps", "Deploy"],
      tools: ["AWS", "Google Cloud Platform (GCP)", "Docker", "Linux", "CI/CD Pipelines"],
      proof: ["cloud-connected IoT workflows", "Linux-based deployment", "containerized and CI/CD-ready development"],
    },
    {
      title: "Data & Systems",
      description:
        "Databases, analysis, systems design, networking, and distributed applications.",
      icon: "Database",
      targets: ["Data", "Systems", "Networking"],
      tools: ["SQL/NoSQL Databases", "Data Analysis", "System Design", "Distributed Systems", "TCP/IP Networking"],
      proof: ["TCP networking for edge nodes", "SQL/NoSQL persistence", "distributed system coordination"],
    },
    {
      title: "Tools & Technologies",
      description:
        "Developer tooling, platforms, and engineering workflow tools.",
      icon: "Layers",
      targets: ["Tools", "Platforms", "Workflow"],
      tools: ["Git", "Postman", "MongoDB", "Firebase", "Vercel", "Vim", "Vivado", "Trello", "Alteryx Designer"],
      proof: ["Git workflow leadership", "API testing with Postman", "deployment through Vercel/Firebase"],
    },
    {
      title: "Product & Cross-Functional",
      description:
        "Product thinking, experimentation, research, collaboration, and communication.",
      icon: "Briefcase",
      targets: ["Product", "Research", "Leadership"],
      tools: ["A/B Testing", "User Research", "Data-Driven Decision Making", "Agile Development", "Technical Communication"],
      proof: ["A/B testing and product analytics", "user research for prioritization", "technical communication across teams"],
    },
  ],

  appliedStacks: [
    {
      project: "Multi-Edge Computing System",
      stack: "Jetson Orin, Raspberry Pi, Hailo AI, ONNX, TCP, React",
      impact: "Real-time distributed defect detection across edge devices.",
    },
    {
      project: "Building Management System",
      stack: "Raspberry Pi, GPIO, DHT11, PIR, MQTT, AWS IoT",
      impact: "Cloud-connected room monitoring with sensor alerts.",
    },
    {
      project: "FlightDashboard",
      stack: "React, Flask, Gemini Pro, Weather APIs, Globe.gl",
      impact: "AI-assisted route planning with live weather context.",
    },
  ],

  projects: [
    {
      title: "Multi-Edge Computing System",
      description:
        "Real-time edge AI defect detection across Jetson, Hailo, Raspberry Pi nodes, TCP networking, and a React dashboard.",
      technologies: ["Jetson Orin Nano", "Raspberry Pi 5", "Hailo AI", "ONNX", "TCP", "Python", "React", "SQLite"],
      demo: "https://noahmathew.github.io/SeniorWeb_EdgeCompute/",
      image: "/argus.png",
      imagePosition: "center top",
    },
    {
      title: "LiveAid: Humanitarian Analytics Platform (Hacktech Winner)",
      description:
        "AI dashboard for conflict impact forecasting, donor tracking, and NLP regional summaries.",
      technologies: ["Next.js", "Convex", "OpenAI", "Python", "Node.js", "Scikit-learn", "Tailwind", "MongoDB"],
      devpost: "https://devpost.com/software/live-aid",
      demo: "https://devpost.com/software/live-aid",
      image: "/project-liveaid.jpg",
    },
    {
      title: "Autonomous Drone Design and Flight",
      description:
        "Custom Ardupilot drone with ESP32 radio, GPS, LIDAR, PWM motor control, telemetry, and fail-safe tuning.",
      technologies: ["Ardupilot", "ESP32", "ExpressLRS", "PWM", "GPS", "Telemetry", "RF", "Motors", "ESCs"],
      image: "/project-autonomous-drone.jpeg",
    },
    {
      title: "FlightDashboard: AI Flight Advisory System",
      description:
        "AI flight planning tool with weather APIs, 3D route visualization, and Gemini Pro route briefings.",
      technologies: ["React", "Flask", "Python", "Gemini Pro", "Globe.gl", "Weather APIs"],
      github: "https://github.com/trangn12/flightleg-forecaster",
      image: "/project-flight-dashboard.png",
    },
    {
      title: "Building Management System: Smart Room Monitor",
      description:
        "Cloud-connected IoT room monitor using sensors, MQTT, AWS IoT, alerts, and LCD state visualization.",
      technologies: ["Raspberry Pi", "Python", "GPIO", "DHT11", "PIR", "I2C LCD", "MQTT", "AWS IoT"],
      demo: "https://drive.google.com/file/d/1tqRvFfZCiipXdtXio86g0N-MJRi58fQ-/view?usp=sharing",
      image: "/project-smart-room-monitor.png",
    },
    {
      title: "Analog Amplifier Characterization",
      description:
        "MOSFET amplifier simulation and lab validation across gain, bandwidth, biasing, and stability.",
      technologies: ["SPICE", "Oscilloscope", "Breadboard", "Function Generator", "Multimeter"],
      image: "/project-analog-amplifier.png",
    },
    {
      title: "Audio-to-LED Real-Time Visualization System",
      description:
        "Real-time FFT audio system that maps microphone input to responsive LED patterns with Arduino control.",
      technologies: ["Python", "Arduino", "Signal Processing", "FFT"],
      demo: "https://www.youtube.com/watch?v=p5ENHWJ6zPc",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nJaCwZzTH4PJCLh2n1TG1dwmJegViJ.png",
      video: "https://www.youtube.com/embed/p5ENHWJ6zPc",
    },
    {
      title: "MochaMinds: AI Self-Study Toolkit",
      description:
        "Full-stack study toolkit with AI-driven recommendations across OpenAI, YouTube, and Yelp APIs, plus session storage for persistent user data.",
      technologies: ["Python", "Flask", "JavaScript", "HTML", "CSS", "REST APIs", "OpenAI"],
      devpost: "https://devpost.com/software/mochaminds",
      demo: "https://devpost.com/software/mochaminds",
      image: "/project-mochaminds.jpg",
    },
    {
      title: "MIPS Pipelined Processor",
      description:
        "32-bit 5-stage pipelined MIPS processor in Verilog, synthesized and tested on a Basys 3 FPGA.",
      technologies: ["Verilog", "Vivado", "FPGA"],
      github: "https://github.com/trangn12/mips-processor",
      image: "/project-mips-processor.png",
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of California, Irvine",
      duration: "Expected June 2026",
      description:
        "Honors: Campus-Wide Honors Collegium Invitee, Dean's List. Coursework: Data Structures & Algorithms, Computer Architecture, Machine Learning for Engineers, Network Analysis, Signals & Systems, Object-Oriented Programming.",
    },
  ],

  experience: [
    {
      title: "Embedded Engineer",
      company: "FSAE Electric Racing at UC Irvine",
      duration: "December 2025 - Present",
      description:
        "Supported hardware-in-the-loop and vehicle-level testing by verifying GPS data integrity, failure modes, and communication robustness.\n\nInvestigated and debugged sensor discrepancies through firmware instrumentation and test logging.",
      technologies: ["HIL Testing", "GPS", "Firmware Instrumentation", "Sensor Debugging", "Test Logging"],
      image: "/placeholder.svg",
    },
    {
      title: "Engineering Student Success Coach",
      company: "UCI Samueli School of Engineering Undergraduate Advising Office",
      duration: "January 2025 - Present",
      description:
        "Mentor 30+ undergraduates each quarter in study strategies, technical skill building, and career readiness, helping students raise average course grades by one letter.\n\nConduct workshops on time management and internship readiness integrating engineering-specific tools.",
      technologies: ["Mentorship", "Workshop Facilitation", "Career Readiness", "Academic Coaching"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-uci-advising-NTxBUGuH8fly9wtJMz2tQXYiEvMnPq.png",
      moreInfo:
        "https://undergraduate.eng.uci.edu/students/engineering-student-success-coaches/",
    },
    {
      title: "Webmaster",
      company: "FSAE Electric Racing at UC Irvine",
      duration: "January 2025 - March 2026",
      description:
        "Rebuilt and deployed the team's official website using Next.js, enhancing visibility for 20+ sponsors and 80+ team members.",
      technologies: ["Next.js", "Web Deployment", "Sponsor Visibility", "Team Operations"],
      image: "/placeholder.svg",
    },
    {
      title: "Technical Director",
      company: "UCI Engineering Student Council",
      duration: "June 2024 - June 2025",
      description:
        "Developing a room-booking and event-management platform used by 3,000+ students and 500+ faculty, featuring a custom Next.js/TypeScript calendar with Firestore transactions to prevent double-booking.\n\nAutomating participant verification and reporting via Google Cloud Datastore, improving scheduling accuracy and saving 15+ admin hours per event cycle.",
      technologies: ["Next.js", "TypeScript", "Firestore", "Google Cloud", "Product Operations"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6LGmOZMMN99pjQiZuaehzIoMgoiLE.png",
      moreInfo: "https://esc.eng.uci.edu/committee/cabinet.html",
    },
    {
      title: "Technical Product & Strategy Specialist",
      company: "Goshsha",
      duration: "June 2024 - June 2025",
      description:
        "Led product strategy and feature prioritization using A/B testing, user research, and behavior analytics; increased app engagement by 25% and adoption by 200%.\n\nCoordinated with developers to implement scalable UI/UX updates based on real-time feedback, improving system stability and release velocity.",
      technologies: ["Product Strategy", "A/B Testing", "User Research", "Behavior Analytics", "UI/UX"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-gosshha-NTxBUGuH8fly9wtJMz2tQXYiEvMnPq.png",
      moreInfo:
        "https://www.linkedin.com/posts/trang-nguyen-b93278252_goshsha-productdiscovery-innovation-activity-7234321791937064960-nP5H?utm_source=share&utm_medium=member_desktop",
    },
  ],

  recommendations: [
    {
      title: "Academic Recommendation",
      author: "Engineering Advisor",
      description:
        "Recommendation letter highlighting academic strength, technical growth, and engineering potential.",
      file: "/Trang%20Nguyen%20LOR.pdf",
    },
    {
      title: "Professional Reference",
      author: "Goshsha CEO",
      description:
        "Professional reference highlighting product strategy, collaboration, ownership, and impact at Goshsha.",
      file: "/Trang%20Nguyen%20Reference%20-%20Goshsha%20CEO.pdf",
    },
    {
      title: "Faculty Recommendation",
      author: "Professor Li",
      description:
        "Faculty recommendation highlighting academic performance, engineering curiosity, and technical promise.",
      file: "/LetterFromProfessor%20Li%20(3).pdf",
    },
  ],
}

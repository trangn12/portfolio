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
      title: "Software Engineering",
      description:
        "Full-stack apps, APIs, and production-minded web systems.",
      icon: "Code",
      targets: ["SWE", "Full Stack", "Platform"],
      tools: ["React", "Next.js", "TypeScript", "Node.js", "Flask"],
    },
    {
      title: "Product & Project Management",
      description:
        "Feature planning, stakeholder communication, and team execution.",
      icon: "Briefcase",
      targets: ["PM", "TPM", "Project Management"],
      tools: ["Agile", "A/B Testing", "User Research", "Excel", "PowerPoint"],
    },
    {
      title: "Consulting & Strategy",
      description:
        "Turn ambiguous needs into clear recommendations and metrics.",
      icon: "Users",
      targets: ["Consulting", "Strategy", "Operations"],
      tools: ["Analytics", "Research", "Workshops", "Reporting", "Tableau"],
    },
    {
      title: "Data, AI & Analytics",
      description:
        "ML, dashboards, NLP summaries, and data-backed decisions.",
      icon: "Database",
      targets: ["Data", "AI", "Analytics"],
      tools: ["Python", "SQL", "Pandas", "Scikit-learn", "OpenAI"],
    },
    {
      title: "Embedded & Hardware Systems",
      description:
        "Sensor systems, FPGA work, IoT, and hardware debugging.",
      icon: "Cpu",
      targets: ["Embedded", "Hardware", "Robotics"],
      tools: ["Verilog", "Vivado", "Raspberry Pi", "Arduino", "MQTT"],
    },
    {
      title: "Communication & Leadership",
      description:
        "Mentorship, workshops, documentation, and cross-team coordination.",
      icon: "Layers",
      targets: ["Leadership", "Education", "Client-Facing"],
      tools: ["Mentorship", "Workshops", "Docs", "Coordination"],
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

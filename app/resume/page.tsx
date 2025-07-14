import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Wrench, Code, Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="flex justify-end mb-4">
          <Button asChild>
            <a
              href="https://drive.google.com/drive/folders/14fNsU2gLwbrU9Qsh-2Z7JvN_EoPTB6CN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" /> PDF Version
            </a>
          </Button>
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center">Trang Nguyen - Resume</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <GraduationCap className="mr-2" /> Education
          </h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">University of California, Irvine</h3>
              <p className="text-muted-foreground">Bachelor of Science in Computer Engineering</p>
              <p className="text-muted-foreground">Expected Graduation - June 2026</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Briefcase className="mr-2" /> Experience
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Webmaster</h3>
                <p className="text-primary">FSAE Electric Racing at UC Irvine</p>
                <p className="text-muted-foreground">January 2025 – Present</p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Led Next.js-based site overhaul to improve routing, page speed, and accessibility for 100+ team
                    members and sponsors.
                  </li>
                  <li>
                    Integrating backend forms and real-time update logs to support documentation of electrical and
                    mechanical progress.
                  </li>
                  <li>
                    Implemented responsive design principles and performance optimizations for an intuitive and faster
                    user experience.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Technical Director</h3>
                <p className="text-primary">UCI Engineering Student Council</p>
                <p className="text-muted-foreground">June 2024 – Present</p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Led the development of a new portfolio website to showcase ESC activities and support corporate
                    sponsorship efforts using tools such as React, Node.js, and Google Cloud Services.
                  </li>
                  <li>
                    Manage and update the ESC and P-Council websites, enhancing user interface and automating content
                    management.
                  </li>
                  <li>
                    Oversee EScan, the registration system for E-Week, integrating student verification protocols and
                    automating event entry.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Product Management and Strategy Specialist</h3>
                <p className="text-primary">Goshsha</p>
                <p className="text-muted-foreground">Jun. 2024 – Present</p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Led a campus outreach campaign to boost app visibility, focusing on targeted promotion strategies
                    that increased app downloads and user engagement by 20%
                  </li>
                  <li>
                    Created and optimized tech-related reels on Instagram and TikTok using data-driven insights, driving
                    a 25% increase in views and quadrupling user interactions by enhancing brand awareness by showcasing
                    the app's key features.
                  </li>
                  <li>
                    Collected and relayed valuable user feedback to the app development team, resulting in feature
                    updates and improvements
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Academic Success Coach</h3>
                <p className="text-primary">UCI Engineering Undergraduate Advising Office</p>
                <p className="text-muted-foreground">Sep 2024 - Present</p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Provided one-on-one academic coaching to engineering students, helping them improve study
                    strategies, time management, and problem-solving skills.
                  </li>
                  <li>
                    Conducted workshops and guided students to university resources, ensuring access to tutoring,
                    counseling, and academic support.
                  </li>
                  <li>
                    Utilize NASPA-certified coaching techniques to support student success in overcoming academic
                    challenges.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Chess Instructor</h3>
                <p className="text-primary">Strategic Kids</p>
                <p className="text-muted-foreground">Oct. 2022 – Aug. 2024</p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Increased class size by 50% by implementing proven classroom management strategies and fostering a
                    positive learning environment.
                  </li>
                  <li>
                    Enhanced students' strategic thinking and problem-solving skills through engaging and interactive
                    chess lessons.
                  </li>
                  <li>
                    Facilitated effective communication between the program, parents, and schools across Orange County,
                    ensuring smooth coordination and student success.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Code className="mr-2" /> Projects
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">LiveAid: Financial Impact Dashboard for Displaced Populations</h3>
                <p className="text-muted-foreground">March 2025</p>
                <div className="flex flex-wrap gap-2 my-2">
                  <Badge>Python</Badge>
                  <Badge>Flask</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>REST APIs</Badge>
                </div>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Developed a full-stack web dashboard for tracking and analyzing financial well-being of displaced
                    populations.
                  </li>
                  <li>
                    Led integration of multiple APIs to provide personalized educational and resource-based
                    recommendations.
                  </li>
                  <li>
                    Implemented persistent session storage and optimized API usage for improved performance and
                    scalability.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Mocha Minds: A Self Study Tool Kit Using AI</h3>
                <p className="text-muted-foreground">May 2024</p>
                <div className="flex flex-wrap gap-2 my-2">
                  <Badge>Python</Badge>
                  <Badge>Flask</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>REST APIs</Badge>
                </div>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Developed a full-stack web application using Python Flask for the backend and JavaScript, HTML, and
                    CSS for the front end.
                  </li>
                  <li>
                    Incorporated APIs from OpenAI, YouTube, and Yelp, delivering personalized, diverse results for users
                    while ensuring efficient API usage, preventing resource depletion
                  </li>
                  <li>
                    Led the implementation of session storage to manage user data, enabling the development of various
                    features.
                  </li>
                  <li>Trained the team in Git version control to streamline development and collaboration.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Chess Game Using C</h3>
                <p className="text-muted-foreground">April 2024 - May 2024</p>
                <div className="flex flex-wrap gap-2 my-2">
                  <Badge>C</Badge>
                  <Badge>Data Structures</Badge>
                  <Badge>Linux</Badge>
                  <Badge>GTK</Badge>
                  <Badge>Git</Badge>
                </div>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Developed backend logic for chess movements using advanced data structures, ensuring accurate and
                    efficient gameplay.
                  </li>
                  <li>
                    Transitioned the game from a console-based interface to a graphical user interface (GUI), enhancing
                    user experience
                  </li>
                  <li>Managed the packaging and installation process for Linux systems, ensuring smooth deployment.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">MIPS Pipelined Processor</h3>
                <p className="text-muted-foreground">Sep 2024 – Dec 2024</p>
                <div className="flex flex-wrap gap-2 my-2">
                  <Badge>Verilog</Badge>
                  <Badge>Vivado</Badge>
                  <Badge>FPGA</Badge>
                </div>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Designed and implemented a 32-bit MIPS pipelined processor and 3-bit ALU on the Xilinx Basys3 FPGA
                    using Verilog, focusing on meeting timing constraints and efficient resource utilization.
                  </li>
                  <li>
                    Conducted comprehensive timing, power, and utilization analysis in Vivado, optimizing the design
                  </li>
                  <li>
                    Verified hardware functionality by generating bitstreams and testing outputs through switches and
                    LEDs
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Wrench className="mr-2" /> Technical Skills
          </h2>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc list-inside">
                <li>
                  <strong>Languages:</strong> Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R, Assembly
                </li>
                <li>
                  <strong>Frameworks:</strong> React, Next.js, Node.js, Flask, JUnit
                </li>
                <li>
                  <strong>Developer Tools:</strong> Git, Docker, Kubernetes, Google Cloud Platform (GCP), Firebase, MongoDB, Postman, Bootstrap, jQuery, React
                </li>
                <li>
                  <strong>Practices & Concepts:</strong> REST APIs, WebSockets, CI/CD (GitHub Actions, Travis CI), Agile/Scrum, Object-Oriented Design (OOD), Data Structures & Algorithms
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

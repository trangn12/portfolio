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
            <a href="https://drive.google.com/drive/folders/14fNsU2gLwbrU9Qsh-2Z7JvN_EoPTB6CN" target="_blank" rel="noopener noreferrer">
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
                <h3 className="text-xl font-bold">Brand Ambassador</h3>
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
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Code className="mr-2" /> Projects
          </h2>
          <div className="space-y-6">
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
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Audio-to-LED Real-Time Visualization System</h3>
                <p className="text-muted-foreground">May 2024</p>
                <div className="flex flex-wrap gap-2 my-2">
                  <Badge>Python</Badge>
                  <Badge>Arduino</Badge>
                  <Badge>Signal Processing</Badge>
                </div>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Developed a Python-based signal processing system using Fast Fourier Transform (FFT) to analyze
                    real-time audio frequencies and map them to LED colors and brightness.
                  </li>
                  <li>
                    Captured live audio input, process signals, and control LED arrays, achieving hardware-software
                    synchronization.
                  </li>
                  <li>
                    Addressed challenges in noise reduction and microphone calibration, optimizing system performance
                    for accurate and dynamic audio-visual representation.
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
                  <strong>Frameworks:</strong> React, Node.js, Flask, JUnit
                </li>
                <li>
                  <strong>Developer Tools:</strong> Git, Google Cloud Platform, Visual Studio, IntelliJ
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}


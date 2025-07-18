"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  Star,
  Calendar,
  Users,
  Trophy,
  Code,
  Database,
  Palette,
  Globe,
} from "lucide-react";
import {
  firstName,
  heroSectionText,
  lastName,
  personalSlogan,
} from "@/data/personal";
import {
  githubURL,
  linkedinURL,
  emailAddress,
  phoneNumber,
  location,
  orbitviewURL,
} from "@/data/socials";
import {
  aboutMeText,
  aboutMeTitle,
  backgroundText,
  backgroundTitle,
  colloborationText,
  colloborationTitle,
  goalsText,
  goalsTitle,
} from "@/data/about";

export default function PersonalWebsite() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-800">
              {firstName} {lastName}
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Experience", "Skills", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  Available for new opportunities
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {firstName} {lastName}
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {heroSectionText}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 hover:bg-slate-50"
                >
                  <Download className="mr-2 w-4 h-4" /> Download Resume
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <a
                  href={githubURL}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={linkedinURL}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div
                className="relative z-10 transform transition-transform duration-300"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              >
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {aboutMeTitle}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {aboutMeText}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>{backgroundTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{backgroundText}</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>{colloborationTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{colloborationText}</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>{goalsTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{goalsText}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600">
              A showcase of my recent work and the impact I've made
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Project Name 1",
                description:
                  "A comprehensive description of your amazing project, highlighting the key features, technologies used, and the impact it made.",
                image: "🚀",
                tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                github: "https://github.com/yourusername/project1",
                live: "https://project1.vercel.app",
              },
              {
                title: "Project Name 2",
                description:
                  "Another fantastic project that demonstrates your skills and creativity. Explain the challenges you faced and how you solved them.",
                image: "🎨",
                tags: ["Python", "Machine Learning", "TensorFlow", "API"],
                github: "https://github.com/yourusername/project2",
                live: "https://project2.vercel.app",
              },
              {
                title: "Project Name 3",
                description:
                  "A third project showcasing different aspects of your expertise. This could be a mobile app, web application, or any other type of project.",
                image: "📱",
                tags: ["Vue.js", "Node.js", "MongoDB", "Express"],
                github: "https://github.com/yourusername/project3",
                live: "https://project3.vercel.app",
              },
              {
                title: "Project Name 4",
                description:
                  "Your fourth featured project. Remember to include metrics and results where possible to show the impact of your work.",
                image: "💡",
                tags: ["Flutter", "Dart", "Firebase", "API Integration"],
                github: "https://github.com/yourusername/project4",
                live: "https://project4.vercel.app",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-4">{project.image}</div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-blue-100 text-blue-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Experience
            </h2>
            <p className="text-xl text-slate-600">
              My professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                company: "Company Name",
                position: "Your Position",
                period: "2023 - Present",
                description:
                  "Brief description of your role and key responsibilities. Include specific achievements and metrics where possible.",
                achievements: [
                  "Increased efficiency by 40% through process optimization",
                  "Led a team of 5 developers on multiple projects",
                  "Implemented new technologies that reduced costs by 25%",
                ],
              },
              {
                company: "Previous Company",
                position: "Previous Position",
                period: "2021 - 2023",
                description:
                  "Another role description highlighting your growth and contributions to the organization.",
                achievements: [
                  "Developed and launched 3 major features",
                  "Improved user satisfaction scores by 30%",
                  "Mentored junior developers and interns",
                ],
              },
              {
                company: "Earlier Company",
                position: "Earlier Position",
                period: "2019 - 2021",
                description:
                  "Your earlier experience and how it shaped your career path.",
                achievements: [
                  "Successfully completed certification in [Technology]",
                  "Contributed to open-source projects",
                  "Participated in hackathons and coding competitions",
                ],
              },
            ].map((exp, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-slate-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                icon: <Code className="w-6 h-6" />,
                skills: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vue.js",
                ],
              },
              {
                category: "Backend",
                icon: <Database className="w-6 h-6" />,
                skills: [
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "Express",
                ],
              },
              {
                category: "Design",
                icon: <Palette className="w-6 h-6" />,
                skills: [
                  "Figma",
                  "Adobe XD",
                  "UI/UX Design",
                  "Prototyping",
                  "Wireframing",
                ],
              },
              {
                category: "Tools",
                icon: <Globe className="w-6 h-6" />,
                skills: ["Git", "Docker", "AWS", "Vercel", "VS Code"],
              },
            ].map((skillGroup, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-blue-600">{skillGroup.icon}</div>
                  </div>
                  <CardTitle>{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skillGroup.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between"
                      >
                        <span className="text-slate-700">{skill}</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className={`w-2 h-2 rounded-full ${
                                star <= 4 ? "bg-blue-600" : "bg-slate-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OrbitView Integration Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            My OrbitView Profile
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Discover WAY more about my professional journey through my OrbitView
            profile
          </p>

          <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-6xl">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Enhanced Professional Storytelling
                  </h3>
                  <p className="text-slate-600 mb-6">
                    My OrbitView profile showcases my career narrative,
                    achievements, and professional growth in an interactive and
                    engaging format.
                    <strong>
                      {" "}
                      It can answer some questions about my resume, if you have
                      any...
                    </strong>
                  </p>
                  <div
                    onClick={() => {
                      window.open(orbitviewURL, "_blank");
                    }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      View OrbitView Profile{" "}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-slate-500">
                  AI-powered storytelling and branding tools
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-600">
              I'm always open to discussing new opportunities and collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Get in touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-4" />
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      {emailAddress}
                    </a>
                  </div>
                  {phoneNumber && (
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-4" />
                      <span className="text-slate-700">{phoneNumber}</span>
                    </div>
                  )}
                  {location && (
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-4" />
                      <span className="text-slate-700">{location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Follow me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href={githubURL}
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:shadow-md transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={linkedinURL}
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:shadow-md transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:shadow-md transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              {firstName} {lastName}
            </div>
            <p className="text-slate-400 mb-6">{personalSlogan}</p>
            <Separator className="my-6 bg-slate-700" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                © 2024 {firstName} {lastName}. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm">
                Built with Next.js, deployed on Vercel
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

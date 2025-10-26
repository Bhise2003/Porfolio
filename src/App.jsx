import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, GraduationCap, Award, Phone, MapPin, ChevronDown, Sparkles } from 'lucide-react';






export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Developed a responsive online store with user authentication, product listing, shopping cart, and order management. Used REST APIs for frontend-backend communication.",
      tags: ["React.js", "Node.js", "MySQL", "REST API"],
      link: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Chatting Application",
      description: "Built a real-time chat application using Java Socket Programming with Swing UI. Designed client-server model to handle multiple users simultaneously with message broadcasting.",
      tags: ["Java", "Socket Programming", "Swing UI"],
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Personal Portfolio Website",
      description: "Created a portfolio website with integrated reusable components, smooth navigation, and responsive design. Deployed on GitHub Pages.",
      tags: ["React.js", "Tailwind CSS", "GitHub Pages"],
      link: "#",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Simple Calculator",
      description: "Designed a desktop calculator using Java Swing supporting basic arithmetic operations with error handling and reset functions.",
      tags: ["Java", "Swing"],
      link: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 85, icon: "JS" },
    { name: "React.js", level: 88, icon: "⚛️" },
    { name: "Java", level: 82, icon: "☕" },
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "HTML/CSS", level: 90, icon: "🎨" },
    { name: "Tailwind CSS", level: 85, icon: "💨" },
    { name: "MySQL", level: 75, icon: "🗄️" },
    { name: "Next.js", level: 70, icon: "▲" }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>

      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold transform hover:rotate-12 transition-transform duration-300">
                  AB
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur opacity-30 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold hidden sm:block">Anirudh Bhise</span>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                      : 'hover:bg-slate-800/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-slate-900/95 backdrop-blur-xl px-4 py-4 space-y-2">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.toLowerCase() 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                    : 'hover:bg-slate-800/50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="space-y-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center text-5xl sm:text-6xl font-bold animate-float">
                AB
              </div>
              <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse"></div>
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-spin-slow" />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                <span className="inline-block animate-slide-up bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  ANIRUDH
                </span>
                <br />
                <span className="inline-block animate-slide-up bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
                  BHISE
                </span>
              </h1>
              
              <div className="flex items-center justify-center space-x-2 text-2xl sm:text-3xl">
                <Code className="w-8 h-8 text-purple-400 animate-bounce" />
                <p className="font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Full Stack Web Developer
                </p>
              </div>

              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Passionate developer crafting innovative web solutions with modern technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="tel:9324282331" className="flex items-center space-x-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/20 hover:border-purple-500/60 hover:scale-105 transition-all">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">9324282331</span>
              </a>
              <a href="mailto:bhiseanirudh3@gmail.com" className="flex items-center space-x-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/20 hover:border-purple-500/60 hover:scale-105 transition-all">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm hidden sm:inline">bhiseanirudh3@gmail.com</span>
                <span className="text-sm sm:hidden">Email</span>
              </a>
              <div className="flex items-center space-x-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/20">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Kalyan East</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a href="#" className="group p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/20 hover:border-purple-500/60 hover:scale-110 transition-all">
                <Github className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
              </a>
              <a href="#" className="group p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/20 hover:border-purple-500/60 hover:scale-110 transition-all">
                <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="mailto:bhiseanirudh3@gmail.com" className="group p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/20 hover:border-purple-500/60 hover:scale-110 transition-all">
                <Mail className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div data-animate id="about-title" className={`text-center mb-16 transition-all duration-1000 ${isVisible['about-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-3 mb-4">
              <User className="w-10 h-10 text-purple-400" />
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
          </div>

          <div data-animate id="about-content" className={`transition-all duration-1000 delay-200 ${isVisible['about-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6">
                  I am a <span className="text-purple-400 font-semibold">final-year B.Com student</span> with a passion for technology and software development. 
                  Recently trained as a <span className="text-pink-400 font-semibold">Full Stack Developer</span>, I possess a solid foundation in Java, React.js, 
                  and modern web technologies.
                </p>
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8">
                  I am eager to leverage my programming knowledge, project experience, and problem-solving 
                  skills to contribute to innovative IT projects and advance my career in technology.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 transition-all hover:scale-105">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="w-6 h-6 text-purple-400 group-hover:rotate-12 transition-transform" />
                      <h3 className="text-xl font-bold text-purple-400">Technical Strengths</h3>
                    </div>
                    <p className="text-gray-300">Strong foundation in Java and React.js with hands-on project experience</p>
                  </div>
                  <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/60 transition-all hover:scale-105">
                    <div className="flex items-center space-x-3 mb-3">
                      <Sparkles className="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform" />
                      <h3 className="text-xl font-bold text-blue-400">Soft Skills</h3>
                    </div>
                    <p className="text-gray-300">Excellent time management, analytical thinking, and team collaboration skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div data-animate id="skills-title" className={`text-center mb-16 transition-all duration-1000 ${isVisible['skills-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-3 mb-4">
              <Sparkles className="w-10 h-10 text-purple-400" />
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills & Tech Stack
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                data-animate
                id={`skill-${index}`}
                className={`transition-all duration-1000 ${isVisible[`skill-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/60 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-2xl font-bold text-purple-400">{skill.level}%</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-400 transition-colors">{skill.name}</h3>
                  <div className="relative w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: isVisible[`skill-${index}`] ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div data-animate id="projects-title" className={`text-center mb-16 transition-all duration-1000 ${isVisible['projects-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-3 mb-4">
              <Code className="w-10 h-10 text-purple-400" />
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                data-animate
                id={`project-${index}`}
                className={`transition-all duration-1000 ${isVisible[`project-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group relative bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/60 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-slate-700/50 backdrop-blur-sm rounded-full text-sm border border-purple-500/20 group-hover:border-purple-500/60 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-pink-400 transition-colors"
                    >
                      <span className="font-semibold">View Project</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div data-animate id="education-title" className={`text-center mb-16 transition-all duration-1000 ${isVisible['education-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-3 mb-4">
              <GraduationCap className="w-10 h-10 text-purple-400" />
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Education & Training
              </h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div data-animate id="education-1" className={`transition-all duration-1000 ${isVisible['education-1'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/60 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">Bachelor of Commerce (B.Com)</h3>
                    <p className="text-xl text-gray-300">Saket College</p>
                  </div>
                  <span className="inline-block mt-2 sm:mt-0 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                    Pursuing Final Year
                  </span>
                </div>
                <p className="text-gray-400 flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kalyan, India</span>
                </p>
              </div>
            </div>

            <div data-animate id="education-2" className={`transition-all duration-1000 delay-200 ${isVisible['education-2'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/60 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">Full Stack Development</h3>
                    <p className="text-xl text-gray-300">EduCADD</p>
                  </div>
                  <span className="inline-block mt-2 sm:mt-0 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-semibold">
                    Certified
                  </span>
                </div>
                <p className="text-gray-400 flex items-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Dombivli, India</span>
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Hands-on training in Java, HTML, CSS, JavaScript, React.js, Node.js, Tailwind CSS. 
                  Practical exposure to frontend & backend development, database management, and project deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div data-animate id="contact-content" className={`transition-all duration-1000 ${isVisible['contact-content'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-12 sm:p-16 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
                I'm eager to contribute to innovative IT projects and advance my career in technology. 
                Let's connect and discuss how I can add value to your team!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:bhiseanirudh3@gmail.com"
                  className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:scale-110 transition-all hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Send Email</span>
                </a>
                <a 
                  href="tel:9324282331"
                  className="group px-8 py-4 bg-slate-700/50 border border-purple-500/30 rounded-full text-lg font-semibold hover:scale-110 transition-all hover:shadow-lg hover:shadow-purple-500/30 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Call Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-8 px-4 border-t border-purple-500/20 text-center text-gray-400 z-10">
        <p>&copy; 2024 Anirudh Bhise. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
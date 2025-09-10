import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';
import  ecommerce  from '../assets/ecommerce.png';
import address from '../assets/address.png';
import dribble from '../assets/dribble.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';


function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack clothing e-commerce website featuring dynamic product filtering, shopping cart, checkout, and user authentication. Built with React, Tailwind CSS, Node.js, Express, and MongoDB, with RESTful APIs and state management for seamless frontend-backend integration.",

      image: ecommerce,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Sitharatk/E-commerce-site",
      live: "https://e-commerce-site-coral-two.vercel.app/"
    },
    {
    title: "Dribbble Clone",
    description:
      "A full-stack Dribbble clone with a responsive UI built using React, Tailwind CSS, and JavaScript. Backend powered by Node.js, Express, and MongoDB. Includes features such as user authentication, post creation, likes, and profile management. State management handled with Context API and RESTful APIs for efficient data flow.",
    image: dribble,
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Context API"],
    github: "https://github.com/Sitharatk/dribbble_clone",
    live: "https://dribbble-clone-zeta.vercel.app/",
  },
    {
    title: "DDoS Attack Detection Model",
    description:
      "A secure website integrated with a machine learning model to detect and mitigate DDoS attacks in real-time. Introduces a novel approach by combining ML techniques with proxy servers to enhance detection speed and efficiency. Implemented the MLPODT (Multi-Layer Perceptron with Optimized Decision Tree) algorithm for real-time threat detection and mitigation.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
    tech: ["Python", "Machine Learning", "Proxy Servers", "Flask/Django"],
    github: "https://github.com/Fidahasm/An-Efficient-Model-For-DDoS-Attacks",
  },
  {
    title: "Address Comparison API",
    description:
      "An API built with Next.js and Google's Gemini AI for advanced address comparison and analysis. Features include accurate address comparison, confidence scoring, and reasoning for the analysis. Implemented robust error handling and deployed the API on Vercel for production use.",
    image:  address,
    tech: ["Next.js", "Google Gemini AI", "REST API", "Vercel"],
    github: "https://github.com/Sitharatk/Address_Comparison",
    live: "https://address-comparison.vercel.app/",
  },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-green-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
           
        
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['home', 'about', 'projects', 'experience', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
   

          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-blue-900  bg-clip-text text-transparent animate-pulse">
            Fathima Sithara
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Software Developer 
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional web applications that make a difference
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Sitharatk" className="text-white/80 hover:text-blue-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="#" className="text-white/80 hover:text-blue-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-white/80 hover:text-blue-400 transition-colors">
              <Mail size={28} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-16 bg-blue-900  bg-clip-text text-transparent">
    About Me
  </h2>
 
    <div>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
  I'm an adaptable <span className="font-semibold text-white">Software Developer</span> with a strong foundation in Computer Science and Engineering. 
  I specialize in building efficient, scalable, and user-friendly web applications, with experience working both 
  independently and as part of collaborative teams. 
</p>

<p className="text-lg text-gray-300 mb-6 leading-relaxed">
  With strong problem-solving, time management, and communication skills, I focus on delivering 
  high-quality solutions that align with business goals while creating meaningful user experiences.
</p>

<p className="text-lg text-gray-300 mb-6 leading-relaxed">
  My core expertise lies in <span className="text-white font-medium">JavaScript, React, Tailwind CSS, and Redux</span>, with additional experience in 
  backend technologies like <span className="text-white font-medium">Node.js and Express</span>. I'm always eager to learn new frameworks, tools, 
  and best practices to stay updated in the fast-evolving tech landscape.
</p>

<p className="text-lg text-gray-300 leading-relaxed">
  Beyond coding, I enjoy reading novels, exploring creative ideas, and continuously learning new skills that fuel my 
  curiosity. My long-term goal is to contribute to impactful projects that blend technology with innovation, 
  making a difference in how people interact with the digital world.
</p>

  </div>
</div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
  <div className="max-w-7xl mx-auto relative"> {/* <-- Added relative here */}
    <h2 className="text-4xl font-bold text-center mb-16 bg-blue-900  bg-clip-text text-transparent">
      Projects
    </h2>

    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      spaceBetween={30}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 1.5, spaceBetween: 25 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 2.5, spaceBetween: 30 },
        1280: { slidesPerView: 3, spaceBetween: 40 },
      }}
      className="pb-16 px-4"
      style={{
        '--swiper-navigation-color': '#60a5fa',
        '--swiper-pagination-color': '#60a5fa',
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="max-w-sm">
          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <div className="flex space-x-2">
                  <a 
                    href={project.github} 
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/50 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/50 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-blue-300 border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Navigation Buttons */}
   <div className="swiper-button-prev !left-4 !top-1/2 !w-12 !h-12 !mt-0 !bg-white/10 !backdrop-blur-sm !rounded-full !border !border-white/20 hover:!bg-blue-500/20 !transition-all !duration-300" />
    <div className="swiper-button-next !right-4 !top-1/2 !w-12 !h-12 !mt-0 !bg-white/10 !backdrop-blur-sm !rounded-full !border !border-white/20 hover:!bg-blue-500/20 !transition-all !duration-300" />
  </div>
</section>

{/* Experience Section */}
<section id="experience" className="py-20 px-4">
  <div className="max-w-5xl mx-auto ">
    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Experience
    </h2>

    <div className="space-y-8">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 ">
        <h3 className="text-2xl font-semibold text-white">MERN Stack Developer Intern</h3>
        <p className="text-gray-400">Sep 2024 – Feb 2025 | BridgeOn Solution, Malappuram, Kerala</p>
        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
          <li>Developed and maintained web applications using the MERN stack.</li>
          <li>Collaborated with cross-functional teams to deliver efficient and scalable solutions.</li>
          <li>Contributed to both frontend and backend development to ensure seamless user experiences.</li>
        </ul>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-white">Software Engineer Intern</h3>
        <p className="text-gray-400">July 2025 – Present | Zennode Technologies, Kozhikode, Kerala</p>
        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
         <li>Collaborating with senior developers to design, develop, and optimize scalable web applications.</li>

<li>Applying best practices in software engineering, including clean code principles, debugging, and performance improvements.</li>

<li>Gaining hands-on experience with modern development tools and workflows such as Git, code reviews, and Agile methodology.</li></ul>
      </div>
    </div>
  </div>
</section>

{/* Certifications & Achievements Section */}
<section id="certifications" className="py-20 px-4 bg-black/20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Certifications & Achievements
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-white">Deloitte Data Analytics Job Simulation</h3>
        <p className="text-gray-400">April 2025</p>
        <p className="mt-2 text-gray-300">Completed practical tasks in data analysis and forensic technology.</p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-white">Machine Learning and Data Science Internship</h3>
        <p className="text-gray-400">Sept 2023</p>
        <p className="mt-2 text-gray-300">Participated in a two-week training program on machine learning and data science concepts.</p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-white">Flutter Development Internship</h3>
        <p className="text-gray-400">May 2023</p>
        <p className="mt-2 text-gray-300">Completed a two-week hands-on internship focusing on building mobile applications using Flutter.</p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-white">Saylor Academy: Computer Architecture</h3>
        <p className="text-gray-400">May 2022</p>
        <p className="mt-2 text-gray-300">Completed a comprehensive course on Computer Architecture fundamentals.</p>
      </div>
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <Mail className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">sitharaaneestk@gmail.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <Github className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">@Sitharatk</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <Linkedin className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">in/sitharatk</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">

      </footer>
    </div>
  );
}

export default Portfolio;
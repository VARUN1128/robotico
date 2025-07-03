import React, { useState, useEffect, useRef } from "react";
import React, { useState, useEffect, useRef } from "react";

import "./App.css";
import FounderImage from "./assets/images/Founder.jpg";
import CTOImage from "./assets/images/CTO.jpg";
import HeadImage from "./assets/images/head.jpg";
import KAUImage from "./assets/images/KAU.png";
import KSMImage from "./assets/images/ksum.png";
import LivoImage from "./assets/images/live.png";
import NABARDImage from "./assets/images/NABARD.png";
import MakerVillageImage from "./assets/images/maker_village-org.png";
import AchievementOne from "./assets/images/award-1.jpeg";
import AchievementTwo from "./assets/images/award-2.jpeg";
import ImageModal from "./components/ImageModal";


function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sponsorImages = [
    MakerVillageImage,
    KAUImage,
    KSMImage,
    LivoImage,
    NABARDImage,
  ];
  const sliderRef = useRef(null);

  const achievements = [
    {
      title: "VAIGA 23",
      description:
        "1st price in the Kerala's largest 36hr non stop agri hackathon VAIGA 23 Organized by department of agriculture development and farmers welfare of Kerala",
      image: AchievementOne,
    },
    {
      title: "Rural Agri-Hackathon",
      description: "1st Place in Rural Agri-Hackathon (RIBC 3.0)",
      image: AchievementTwo,
    },
  ];

  const team = [
    {
      name: "Ashin P Krishna",
      title: "CEO & Founder",
      image: FounderImage,
    },
    {
      name: "Gokul Krishna",
      title: "CTO",
      image: CTOImage,
    },
    {
      name: "Alosh Denny",
      title: "Head of AI & ML",
      image: HeadImage,
    },
  ];

  // Auto scroll through partnerships
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % sponsorImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sponsorImages.length]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Add this function to handle image clicks
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Add this function to close the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - distance;
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      
      {/* Hero Section with gradient */}
      <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <nav className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold">Alter Sage Innovations</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#vision"
                className="hover:text-green-400 transition cursor-pointer"
              >
                Vision
              </a>
              <a
                href="#about"
                className="hover:text-green-400 transition cursor-pointer"
              >
                About
              </a>
              <a
                href="#partnerships"
                className="hover:text-green-400 transition cursor-pointer"
              >
                partnerships
              </a>
              <a
                href="#achievements"
                className="hover:text-green-400 transition cursor-pointer"
              >
                Achievements
              </a>
              <a
                href="#team"
                className="hover:text-green-400 transition cursor-pointer"
              >
                Team
              </a>
              <a
                href="#contact"
                className="hover:text-green-400 transition cursor-pointer"
              >
                Contact
              </a>
            </div>
            <button
              className="md:hidden cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu with blur effect */}
          {isMenuOpen && (
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/90 h-screen">
              <div className="flex flex-col space-y-6 p-8 mt-20">
                <a
                  href="#vision"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  About us
                </a>
                <a
                  href="#about"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                 Our Mission
                </a>
                <a
                  href="#partnerships"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  partnershipship
                </a>
                <a
                  href="#achievements"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  Achievements
                </a>
                <a
                  href="#team"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </div>
            </div>
          )}

          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Let's Explore the Future of Agricultural Robotics
            </motion.h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">
              With advanced robotics and AI, we're revolutionizing agriculture
              for a smarter, faster, and more sustainable future.
            </p>
              <button className="bg-green-500 hover:bg-green-400 text-white px-10 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">

              Learn More
            </button>
          </motion.div>
        </div>
      </header>

      {/* Mission Section */}
      <motion.section
        id="vision"
        className="py-20 md:py-32 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
         {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Us</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700">
            <p className="mb-6">
              At Altersage, we believe in fostering an environment of
              innovation, collaboration, and continuous growth. Our culture is
              built on the foundation of mutual respect, creative thinking, and
              a commitment to excellence in agricultural technology.
            </p>
          </div>
        </div>
      </section>
       
      </motion.section>
       {/* Marquee Section */}
       <div className="bg-[#1e1e1e] h-24 overflow-hidden whitespace-nowrap relative flex items-center">
        <div className="flex absolute whitespace-nowrap animate-marquee">
          <div className="flex space-x-12 text-white text-3xl font-medium mx-4 items-center">
            <span>Agricultural Innovation</span>
            <span>•</span>
            <span>Robotic Solutions</span>
            <span>•</span>
            <span>Smart Farming</span>
            <span>•</span>
            <span>Sustainable Agriculture</span>
            <span>•</span>
            <span>AI-Powered Systems</span>
            <span>•</span>
            <span>Precision Farming</span>
            <span>•</span>
            <span>Future of Agriculture</span>
            <span>•</span>
            <span>Farm Automation</span>
            <span>•</span>
            <span>Tech Innovation</span>
            <span>•</span>
            <span>Eco-Friendly Solutions</span>
          </div>
          <div className="flex space-x-12 text-white text-3xl font-medium mx-4 items-center">
            <span>Agricultural Innovation</span>
            <span>•</span>
            <span>Robotic Solutions</span>
            <span>•</span>
            <span>Smart Farming</span>
            <span>•</span>
            <span>Sustainable Agriculture</span>
            <span>•</span>
            <span>AI-Powered Systems</span>
            <span>•</span>
            <span>Precision Farming</span>
            <span>•</span>
            <span>Future of Agriculture</span>
            <span>•</span>
            <span>Farm Automation</span>
            <span>•</span>
            <span>Tech Innovation</span>
            <span>•</span>
            <span>Eco-Friendly Solutions</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-xl leading-relaxed text-gray-700 text-center px-6 md:px-12">
              At Altersage Innovations, our mission is to revolutionize
              agriculture by developing intelligent robotic solutions that
              empower farmers with automation, precision, and efficiency. We
              strive to integrate AI-driven technology to optimize resource
              usage, reduce environmental impact, and ensure sustainable farming
              for future generations.
            </p>
          </div>
        </div>
      </section>

      

      {/* partnerships Section with improved animation */}
      <motion.section
        id="partnerships"
        className="py-20 md:py-32 bg-gray-50 text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Our partnerships</h2>
          <div
            className="relative h-40 md:h-48 overflow-hidden cursor-grab active:cursor-grabbing"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div
              className="flex justify-center items-center space-x-24 transition-transform duration-1000 ease-in-out"
            >
              {[...Array(4)].map(() =>
                sponsorImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Sponsor ${index + 1}`}
                    className="h-24 md:h-32  transition-opacity duration-300 select-none"
                    draggable="false"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        id="achievements"
        className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            variants={fadeIn}
          >
            Our Achievements
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="relative w-full h-64 overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(achievement.image)}
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">

                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Add the modal component */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
        imageUrl={selectedImage}
      />

      {/* Team Section with hover effects */}
      <motion.section
        id="team"
        className="py-20 md:py-32 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            variants={fadeIn}
          >
            Our Team
          </motion.h2>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center text-center"
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-56 h-56 object-cover rounded-full mb-6 transition duration-300 group-hover:shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-lg">{member.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer with gradient */}
      <motion.footer
        id="contact"
        className="bg-gradient-to-b from-black to-gray-900 text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Alter Sage Innovations</h3>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2">
                🏢 Address: Top Floor, Computer Centre Building, IIMK Campus,
                PO, Kozhikode, Kerala 673570
              </p>
              <p className="mb-2">Phone: 9847429917</p>
              <p>Email: altersageinnovations@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Alter Sage Innovations. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;

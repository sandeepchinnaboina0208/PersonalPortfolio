import { FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <section 
      id="about" 
      className={`py-20 px-4 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mb-8"></div>
          
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
              <img 
                src="https://ik.imagekit.io/avpe74sdx/profile%20photo.png?updatedAt=1757611972565" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4"></h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I'm a driven and enthusiastic full-stack developer with expertise in building dynamic and user-friendly web applications. With proficiency in technologies like React, Django, I love transforming complex ideas into seamless digital experiences.
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I enjoy exploring emerging technologies,and contributing to open-source projects. I'm passionate about creating impactful solutions that make a difference in the tech community.
            </p>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              I thrive in collaborative environments and enjoy working with cross-functional teams to deliver high-quality software. My strong problem-solving skills and attention to detail allow me to build scalable, maintainable systems that meet both technical and business goals.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-2">Name:</h4>
                <p className="text-gray-600 dark:text-gray-300">Chinnaboina Penchala Sandeep</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Email:</h4>
                <p className="text-gray-600 dark:text-gray-300">sandeepchinnaboina286@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Location:</h4>
                <p className="text-gray-600 dark:text-gray-300">AndhraPradesh,India</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Availability:</h4>
                <p className="text-gray-600 dark:text-gray-300">Open to opportunities</p>
              </div>
            </div>

            <a 
              href="https://drive.google.com/uc?export=download&id=1aMoYCy_ZBuMNfjKjSqmAXRhk4-cZCNF9" 
              className="inline-flex items-center btn-primary"
              download
            >
              <FileText size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

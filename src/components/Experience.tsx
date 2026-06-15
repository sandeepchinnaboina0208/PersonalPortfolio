import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className={`py-20 px-4 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mb-8"></div>
          <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
            My professional journey has helped me gain practical experience and develop
            real-world problem-solving skills.
          </p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="timeline-content"
            >
              <div className="timeline-dot"></div>
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    theme === 'dark'
                      ? 'bg-primary-500/20 text-primary-300'
                      : 'bg-primary-100 text-primary-700'
                  }`}>
                    {exp.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <Briefcase size={16} className="mr-2" />
                    {exp.company}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-full ${
                          theme === 'dark'
                            ? 'bg-gray-600 text-gray-200'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Led development of scalable web applications using React, Next.js, and Node.js. Mentored junior developers and implemented best practices for code quality and performance.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      id: 2,
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      duration: '2021 - 2022',
      location: 'New York, NY',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive and user-friendly interfaces.',
      technologies: ['React', 'Vue.js', 'Express.js', 'MongoDB', 'Docker'],
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced bug reports by 60%',
        'Implemented automated testing'
      ]
    },
    {
      id: 3,
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      duration: '2020 - 2021',
      location: 'Austin, TX',
      description: 'Built responsive web applications and mobile-first designs. Worked closely with UX/UI designers to implement pixel-perfect interfaces.',
      technologies: ['React', 'JavaScript', 'Sass', 'Webpack', 'Jest'],
      achievements: [
        'Increased user engagement by 35%',
        'Optimized loading times by 50%',
        'Built reusable component library'
      ]
    }
  ]

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career
            as a full-stack developer.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 hidden md:flex items-start">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Briefcase className="text-white" size={24} />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  className="flex-1 glass-effect rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-blue-400 font-medium mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

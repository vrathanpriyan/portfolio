'use client'

import { motion } from 'framer-motion'
import { Code, Database, Server, Palette, Globe, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Palette,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 75 },
        { name: 'JavaScript', level: 95 }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'FastAPI', level: 75 },
        { name: 'GraphQL', level: 70 },
        { name: 'REST APIs', level: 95 }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'MySQL', level: 75 },
        { name: 'Prisma', level: 80 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Zap,
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 70 },
        { name: 'Vercel', level: 90 },
        { name: 'Linux', level: 75 }
      ]
    }
  ]

  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life and create
            amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-effect rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg mr-4 shadow-lg">
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-base font-semibold">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-visible">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full shadow-md flex items-center justify-end pr-2"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.span
                          className={`absolute right-3 top-1/2 -translate-y-1/2 font-bold text-sm select-none ${
                            skill.level >= 90 ? 'text-blue-200' : skill.level >= 75 ? 'text-purple-200' : 'text-gray-200'
                          }`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.span
                            initial={{ count: 0 }}
                            animate={{ count: skill.level }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut"
                            }}
                          >
                            {Math.round(skill.level)}%
                          </motion.span>
                        </motion.span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-10 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow">
              Always Learning
            </h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              Technology evolves rapidly, and I'm committed to continuous learning.
              I regularly explore new frameworks, attend conferences, and contribute
              to open-source projects to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills

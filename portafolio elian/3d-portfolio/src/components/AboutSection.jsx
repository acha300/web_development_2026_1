import { motion } from 'framer-motion'

export function AboutSection() {
  const skills = [
    { category: 'Game Development', items: ['Unity Engine', 'C# Scripting', 'Shader Graph', 'Physics Engine'] },
    { category: '3D Modeling', items: ['Blender', 'Rigging', 'Sculpting', 'Low Poly Optimization'] },
    { category: 'Art & Texturing', items: ['Blender', 'Rigging', 'Sculpting', 'Low Poly Optimization'] },
    { category: 'Interactive Web', items: ['Three.js', 'React Three Fiber', 'WebGL', 'Vite'] },
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }
  
  return (
    <section className="relative z-20 min-h-screen py-20 px-4 bg-gradient-to-b from-dark/0 to-dark/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 font-mono"
        >
          <span className="text-primary">// </span>Sobre mí
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 mb-8 leading-relaxed"
        >
          Estudiante de Ingeniería Multimedia apasionado por el desarrollo de videojuegos y el modelado 3D. Me especializo tanto en la programación de mecánicas en C# como en la creación de assets en Blender, con un interés especial en construir entornos interactivos escalables y eficientes. Utilizo mi pasión por los videojuegos como motor para desarrollar experiencias tridimensionales de alta calidad y gran impacto visual.
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 bg-secondary/50 backdrop-blur border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-primary font-bold mb-3 text-lg">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 p-6 rounded-lg"
        >
       
        </motion.div>
      </div>
    </section>
  )
}

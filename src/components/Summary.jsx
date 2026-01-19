import React from 'react'

function Summary() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Container */}
        <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <img 
            src="/bg-model.png" // Replace with your image path
            alt="Profile of a Full Stack Developer"
            className="w-60 border h-full object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
            Introduction
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who Am I?
          </h1>
          
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              I am a <span className="text-gray-900 font-medium">Full Stack Web Developer</span> with 
              a passion for building digital products that combine beautiful design with 
              robust architecture.
            </p>
            <p>
              With expertise in both frontend and backend technologies, I enjoy 
              bridging the gap between user experience and complex logic. My goal is 
              always to write clean, maintainable code that solves real-world problems.
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            {['React', 'Node.js', 'Tailwind', 'Next', 'TypeScript'].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Summary
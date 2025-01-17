import React from 'react';
import { Github, Linkedin, Mail, Database, Brain, LineChart, Calculator, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Vasudeva Reddy Kondreddy</h1>
            <p className="text-xl mb-8">Aspiring Data Scientist</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Computer Science and Engineering student with a strong foundation in Python, data analysis, and machine learning.
              Passionate about turning data into meaningful insights.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="p-2 hover:text-blue-200 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-2 hover:text-blue-200 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                alt="Profile"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                Currently pursuing my B.Tech in Computer Science and Engineering, I am developing strong 
                analytical skills and building a solid foundation in Python programming, statistical analysis, 
                and machine learning. I'm particularly skilled in data manipulation with Pandas and NumPy, 
                and creating insightful visualizations using Matplotlib and Seaborn. My background in 
                statistics and probability enables me to approach data problems with both theoretical 
                understanding and practical implementation skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Database className="w-8 h-8 text-blue-600" />}
              title="Programming"
              description="Python, Pandas, NumPy"
            />
            <SkillCard
              icon={<Brain className="w-8 h-8 text-blue-600" />}
              title="Machine Learning"
              description="Scikit-learn, Supervised Learning"
            />
            <SkillCard
              icon={<LineChart className="w-8 h-8 text-blue-600" />}
              title="Data Visualization"
              description="Matplotlib, Seaborn"
            />
            <SkillCard
              icon={<Calculator className="w-8 h-8 text-blue-600" />}
              title="Analytics"
              description="Statistics, Probability"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Data Analysis Project"
              description="Analyzed a large dataset using Pandas and NumPy to extract meaningful patterns and trends"
              image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
              tags={['Python', 'Pandas', 'NumPy']}
            />
            <ProjectCard
              title="Statistical Analysis"
              description="Applied statistical methods to analyze and interpret data, creating visualizations with Matplotlib and Seaborn"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              tags={['Statistics', 'Matplotlib', 'Seaborn']}
            />
            <ProjectCard
              title="ML Classification"
              description="Implemented machine learning models for classification problems using scikit-learn"
              image="https://images.unsplash.com/photo-1551636898-47668aa61de2"
              tags={['Machine Learning', 'scikit-learn']}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">B.Tech in Computer Science and Engineering</h3>
              <p className="text-gray-600">2022 - 2026 (Expected)</p>
              <ul className="list-disc list-inside mt-4 text-gray-600">
                <li>Focusing on Data Science and Machine Learning</li>
                <li>Relevant coursework: Python Programming, Statistics, Data Structures</li>
                <li>Currently pursuing second year</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">Looking for Data Science Internship Opportunities</p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
              contact@example.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, image, tags }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
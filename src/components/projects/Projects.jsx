import React from 'react'
import './projects.css'
import { FaTwitter, FaPaintBrush } from 'react-icons/fa'
import glowAiIcon from '../../assets/GlowAI.jpg' // Import your custom icon


const projectsData = [
  {
    id: 1,
    title: 'Glow AI',
    description: 'Generative AI skin care routine generator built with React and OpenAI API. Creates personalized routines based on user\'s budget and skin type.',
    icon: <img src={glowAiIcon} alt="Glow AI Icon" className="custom-icon circle-icon" />,
    link: 'https://www.glowai.xyz/',
    stats: '360,000+ unique visitors'
  },
  {
    id: 2,
    title: 'Twitter Sentiment Analysis',
    description: 'A short script utilizing the Twitter API and TextBlob library to perform sentiment analysis on public tweets, labeling them as positive or negative.',
    icon: <FaTwitter />,
    link: 'https://github.com/NavSudheer/Bitcoin-Sentiment-Analysis',
    stats: 'Analyzes public tweets in real-time'
  },
  {
    id: 3,
    title: 'Paint Scribble',
    description: 'Collaborated with a team of 4 as a full stack developer to create a paint application software. Integrated Java Swing to develop a user-friendly GUI API.',
    icon: <FaPaintBrush />,
    link: 'https://github.com/NavSudheer/Paint-program',
    stats: 'Full-featured paint application with custom GUI'
  }
]

const Projects = () => {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-stats">{project.stats}</div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
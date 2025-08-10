import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  date: string;
  venue: string;
  description: string;
  image: string;
  pdfLink: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'Healthy Beginnings: Bundles of Care',
      date: '2025-07-30',
      venue: 'Community Health Center',
      description: 'A comprehensive health awareness program focusing on maternal and child health care.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      pdfLink: '/pdf/sample-project-report.pdf'
    },
    {
      id: 2,
      title: 'Educational Support Initiative',
      date: '2025-08-15',
      venue: 'Local Schools',
      description: 'Providing educational resources and mentorship to underprivileged students.',
      image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=800',
      pdfLink: '/pdf/sample-project-report.pdf'
    },
    {
      id: 3,
      title: 'Environmental Conservation Drive',
      date: '2025-09-05',
      venue: 'Dharan Forest Area',
      description: 'Tree plantation and environmental awareness campaigns in local communities.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      pdfLink: '/pdf/sample-project-report.pdf'
    },
    {
      id: 4,
      title: 'Youth Leadership Workshop',
      date: '2025-10-12',
      venue: 'Bishnu Memorial School',
      description: 'Training programs to develop leadership skills among young people.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      pdfLink: '/pdf/sample-project-report.pdf'
    }
  ]);

  // Load projects from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
      try {
        const parsedProjects = JSON.parse(savedProjects);
        setProjects(parsedProjects);
      } catch (error) {
        console.error('Error loading projects from localStorage:', error);
      }
    }

    // Listen for storage changes (when admin updates projects)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'projects' && e.newValue) {
        try {
          const updatedProjects = JSON.parse(e.newValue);
          setProjects(updatedProjects);
        } catch (error) {
          console.error('Error parsing updated projects:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Custom event listener for same-tab updates
  useEffect(() => {
    const handleProjectsUpdate = (event: CustomEvent) => {
      setProjects(event.detail);
    };

    window.addEventListener('projectsUpdated', handleProjectsUpdate as EventListener);
    return () => window.removeEventListener('projectsUpdated', handleProjectsUpdate as EventListener);
  }, []);

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">Our Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover the impact we've made through our service projects and community initiatives.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-sky-100"
            >
              {/* Project Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-700 mb-3 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h3>
                
                {/* Date and Venue */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 text-sm text-slate-500">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(project.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.venue}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <button
                  onClick={() => {
                    if (project.pdfLink) {
                      window.open(project.pdfLink, '_blank');
                    } else {
                      alert('No PDF report available for this project.');
                    }
                  }}
                  disabled={!project.pdfLink}
                  className="inline-flex items-center w-full justify-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl hover:scale-105 transition-all duration-300 group shadow-lg"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  {project.pdfLink ? 'View Project Details' : 'No PDF Available'}
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
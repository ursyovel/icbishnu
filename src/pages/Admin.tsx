import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Calendar, MapPin, FileText, Image, Lock, Eye, EyeOff, Edit, Trash2, Plus, Save, Check } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  date: string;
  venue: string;
  description: string;
  image: string;
  pdfLink: string;
}

// Custom confirmation modal component
const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
      >
        <h3 className="text-xl font-bold text-slate-700 mb-4">{title}</h3>
        <p className="text-slate-600 mb-6">{message}</p>
        <div className="flex space-x-3">
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'Healthy Beginnings: Bundles of Care',
      date: '2025-07-30',
      venue: 'Community Health Center',
      description: 'A comprehensive health awareness program focusing on maternal and child health care.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      pdfLink: '/pdf/healthy-beginnings.pdf'
    },
    {
      id: 2,
      title: 'Educational Support Initiative',
      date: '2025-08-15',
      venue: 'Local Schools',
      description: 'Providing educational resources and mentorship to underprivileged students.',
      image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=800',
      pdfLink: '/pdf/education-support.pdf'
    },
    {
      id: 3,
      title: 'Environmental Conservation Drive',
      date: '2025-09-05',
      venue: 'Dharan Forest Area',
      description: 'Tree plantation and environmental awareness campaigns in local communities.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      pdfLink: '/pdf/environment-conservation.pdf'
    },
    {
      id: 4,
      title: 'Youth Leadership Workshop',
      date: '2025-10-12',
      venue: 'Bishnu Memorial School',
      description: 'Training programs to develop leadership skills among young people.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      pdfLink: '/pdf/leadership-workshop.pdf'
    }
  ]);

  const [projectData, setProjectData] = useState({
    title: '',
    date: '',
    venue: '',
    description: '',
    image: null as File | null,
    pdf: null as File | null
  });

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; projectId: number | null }>({
    isOpen: false,
    projectId: null
  });

  // Load projects from localStorage on component mount
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
  }, []);

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
    // Dispatch custom event for real-time updates
    window.dispatchEvent(new CustomEvent('projectsUpdated', { detail: projects }));
  }, [projects]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'powerinaction2025') {
      setIsLoggedIn(true);
      localStorage.setItem('isAdmin', 'true');
      
      // Check if there's a project to edit
      const editProject = localStorage.getItem('editProject');
      if (editProject) {
        const project = JSON.parse(editProject);
        setEditingProject(project);
        setProjectData({
          title: project.title,
          date: project.date,
          venue: project.venue,
          description: project.description,
          image: null,
          pdf: null
        });
        setShowAddForm(true);
        localStorage.removeItem('editProject');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      // Create file URLs - use blob URLs for uploaded files, fallback to defaults
      const imageUrl = projectData.image ? 
        URL.createObjectURL(projectData.image) : 
        'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800';
      
      const pdfUrl = projectData.pdf ? 
        URL.createObjectURL(projectData.pdf) : 
        null; // No PDF if none uploaded

      if (editingProject) {
        // Update existing project
        const updatedProjects = projects.map(p => 
          p.id === editingProject.id 
            ? {
                ...p,
                title: projectData.title,
                date: projectData.date,
                venue: projectData.venue,
                description: projectData.description,
                image: projectData.image ? imageUrl : p.image,
                pdfLink: projectData.pdf ? pdfUrl : p.pdfLink
              }
            : p
        );
        setProjects(updatedProjects);
        setEditingProject(null);
      } else {
        // Add new project
        const newProject: Project = {
          id: Date.now(),
          title: projectData.title,
          date: projectData.date,
          venue: projectData.venue,
          description: projectData.description,
          image: imageUrl,
          pdfLink: pdfUrl
        };
        setProjects(prev => [...prev, newProject]);
      }
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setShowAddForm(false);
      
      setProjectData({
        title: '',
        date: '',
        venue: '',
        description: '',
        image: null,
        pdf: null
      });
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 2000);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setProjectData({
      title: project.title,
      date: project.date,
      venue: project.venue,
      description: project.description,
      image: null,
      pdf: null
    });
    setShowAddForm(true);
  };

  const handleDelete = (id: number) => {
    setDeleteModal({ isOpen: true, projectId: id });
  };

  const confirmDelete = () => {
    if (deleteModal.projectId) {
      setProjects(prev => prev.filter(p => p.id !== deleteModal.projectId));
    }
    setDeleteModal({ isOpen: false, projectId: null });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'pdf') => {
    const file = e.target.files?.[0] || null;
    setProjectData(prev => ({ ...prev, [type]: file }));
  };

  const cancelEdit = () => {
    setEditingProject(null);
    setShowAddForm(false);
    setProjectData({
      title: '',
      date: '',
      venue: '',
      description: '',
      image: null,
      pdf: null
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Lock className="w-16 h-16 text-sky-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-slate-300">Enter your credentials to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-200"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-200 pr-12"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-sky-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-700 mb-4">Project Admin Panel</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600">Manage your club's projects</p>
          
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Project
            </button>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                localStorage.removeItem('isAdmin');
              }}
              className="text-sm text-slate-500 hover:text-slate-700 transition-colors px-4 py-2"
            >
              Logout
            </button>
          </div>
        </motion.div>

        {/* Success Message */}
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-8 text-center flex items-center justify-center"
          >
            <Check className="w-5 h-5 mr-2" />
            Project {editingProject ? 'updated' : 'saved'} successfully! Changes are now live on the Projects page. 🎉
          </motion.div>
        )}

        {/* Add/Edit Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-sky-100 mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-700 mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            
            <form onSubmit={handleProjectSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Event Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={projectData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition-all duration-200"
                  placeholder="Enter event title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Event Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={projectData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  value={projectData.venue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition-all duration-200"
                  placeholder="Enter venue location"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={projectData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition-all duration-200 resize-none"
                  placeholder="Enter project description"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Image className="w-4 h-4 inline mr-2" />
                  Event Picture (Upload new image)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'image')}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                />
                <p className="text-xs text-slate-500 mt-1">Upload an image file to replace the current project image</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  PDF Report (Upload new PDF)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'pdf')}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                />
                <p className="text-xs text-slate-500 mt-1">Upload a PDF file to add/replace the project report</p>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-green-400 to-green-500 text-white py-4 rounded-xl font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {editingProject ? 'Saving...' : 'Saving...'}
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5 mr-2" />
                      {editingProject ? 'Save Changes' : 'Save Project'}
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-6 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Projects List */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-sky-100">
          <h2 className="text-2xl font-bold text-slate-700 mb-6">Current Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-slate-700 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {new Date(project.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-slate-600 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  {project.venue}
                </p>
                <p className="text-sm text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        <ConfirmModal
          isOpen={deleteModal.isOpen}
          onClose={() => setDeleteModal({ isOpen: false, projectId: null })}
          onConfirm={confirmDelete}
          title="Confirm Delete"
          message="Are you sure you want to delete this project? This action cannot be undone and will remove it from the Projects page."
        />
      </div>
    </div>
  );
};

export default Admin;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

 // Store your GitHub username and token in environment variables for security
const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
          }
        );
        const data = await res.json();
        // Transform GitHub repo data to match your format
        const formatted = data.map(repo => ({
          title: repo.name,
          description: repo.description || 'No description',
          repoLink: repo.html_url,
        }));
        setRepos(formatted);
      } catch (err) {
        setRepos([]);
      }
      setLoading(false);
    };
    fetchRepos();
  }, []);

  return (
    <section className="py-20 bg-secondary text-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.repoLink}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                href={repo.repoLink}
                className="block transform hover:scale-105 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{repo.title}</h3>
                    <p className="mt-2 text-sm text-black">{repo.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
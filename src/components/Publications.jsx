import React from 'react';

const publications = [
  {
    title: 'Integration of Genetic Algorithms & Particle Swarm Optimization in 5G Networks',
    description: `
      Orchestrated the integration of Genetic Algorithms & particle swarm optimization in 5G networks, 
      boosting energy efficiency by 30% and enhancing overall network performance.
    `,
    link: 'https://bit.ly/3UAFrx5',
    conference: 'IEEE NKCON \'23, January 2024',
  },
  {
    title: 'AI-Driven Strategies to Reduce Energy Consumption in 5G Networks',
    description: `
      Researched and implemented AI-driven strategies to reduce energy consumption in 5G networks, 
      resulting in a 25% decrease in overall energy usage.
    `,
    link: 'https://bit.ly/47t1FUP',
    conference: 'IEEE ICONAT \'23, April 2023',
  },
];

const Publications = () => {
  return (
    <section className="py-20 bg-primary text-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Publications</h2>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="p-6 bg-secondary rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">{pub.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{pub.conference}</p>
              <p className="mb-4">{pub.description}</p>
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;


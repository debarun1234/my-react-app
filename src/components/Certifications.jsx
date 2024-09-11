import React from 'react';

const certifications = [
  {
    title: 'AGS Advanced Generative AI: Models and Architecture',
    issuer: 'Purdue University – Simplilearn',
    id: 'Certification Id: 6961374',
  },
  {
    title: 'AGS Essentials of Generative AI, Prompt Engineering & ChatGPT',
    issuer: 'Purdue University – Simplilearn',
    id: 'Certification Id: 6835121',
  },
  {
    title: 'PwC Switzerland - Power BI Job Simulation',
    issuer: 'PwC – Forage',
    id: 'Certification Id: QsDKnZa6aJJmmBYKq',
  },
  {
    title: 'Virtual Experience Participate – Software Engineer',
    issuer: 'JPMC',
    id: 'Certification ID: brNC3Nvi6yTpA5Yh5',
  },
  {
    title: 'Virtual Experience Participate – Quantitative Research',
    issuer: 'JPMC',
    id: 'Certification ID: cntgfdtikim4jojJH',
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    id: 'Certification ID: BN8J9CMANXQN',
  },
  {
    title: 'Virtual Experience Participate – Agile (Scrum)',
    issuer: 'JPMC',
    id: 'Certification ID: hAzifmFJwgwajgDPk',
  },
  {
    title: 'Microsoft Certified Systems Administrator: Machine Learning',
    issuer: 'Verzeo',
  },
];

const Certifications = () => {
  return (
    <section className="py-20 bg-primary text-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="p-6 bg-secondary rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              {cert.id && <p className="text-sm text-gray-500">{cert.id}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

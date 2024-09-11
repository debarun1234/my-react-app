import React from 'react';

const awards = [
  {
    title: 'First Runner-up',
    event: 'National Level Project Exhibition at The National Institute of Engineering Mysuru, 2022',
  },
  {
    title: 'National Creative Aptitude Exam 2022',
    event: 'Holding All India Rank: 79',
  },
  {
    title: 'Winner in Education Week event ‘Write Way,’',
    event: 'IEEE Education Society Ad Hoc Young Professionals Committee, 2023',
  },
];

const Awards = () => {
  return (
    <section className="py-20 bg-secondary text-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Awards</h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div key={index} className="p-6 bg-primary rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{award.title}</h3>
              <p className="text-gray-300">{award.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

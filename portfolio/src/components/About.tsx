export default function About() {
  const skills = [
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 95 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Git', level: 85 },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate frontend developer with 3+ years of experience building modern,
                responsive web applications. I specialize in React ecosystem and love creating
                intuitive user interfaces with great performance.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, I enjoy contributing to open-source projects, writing technical
                blogs, and exploring new web technologies.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
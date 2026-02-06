export default function About() {
  const technicalSkills = {
    Frontend: ['React', 'JavaScript', 'HTML/CSS', 'Vite'],
    Backend: ['Node.js', 'Express', 'REST APIs'],
    Database: ['MongoDB', 'Firebase'],
    Networking: ['CCNA 1 & 2 (Routing/Switching)', 'Wireshark'],
    Languages: ['Python', 'C'],
    Tools: ['Git', 'VS Code', 'Insomnia']
  };

  const otherSkills = [
    'Problem-Solving & Communication',
    'Teamwork: Agile project collaboration',
    'Time Management & Adaptability'
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>

        {/* Profile */}
        <div className="mb-16">
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Profile</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Computer Science student at Dedan Kimathi University of Technology (DeKUT) with practical experience in Full Stack Development, Networking, and IT Support. Demonstrated ability to develop scalable web applications and provide reliable technical solutions. Passionate about harnessing technology to enhance efficiency and address real-world challenges. Eager to apply technical skills and grow within a dynamic tech environment.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Experience</h3>
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="mb-6">
              <h4 className="text-xl font-bold text-blue-400 mb-2">AizoCraft Inc. | Freelancer</h4>
              <p className="text-gray-400 mb-4">2024 – PRESENT</p>
              <ul className="text-gray-300 space-y-2">
                <li>• Built Plasma Water Africa's corporate website (HTML/CSS/JavaScript), boosting client engagement by 40%.</li>
                <li>• Developed AgriCart: Multi-vendor e-commerce platform with inventory/order management (React, Node.js, MongoDB).</li>
                <li>• Created CMS/ERP system for construction operations, automating attendance tracking and inventory workflows.</li>
                <li>• Kenya Weather App with Python.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <h4 className="text-xl font-bold text-blue-400 mb-2">BSc. Computer Science</h4>
            <p className="text-gray-400 mb-4">Dedan Kimathi University of Technology (DeKUT) | 2021 – 2025</p>
            <p className="text-gray-300">Relevant Coursework: Database Systems, Computer Networks, Web Development</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm text-center">
              <h4 className="text-lg font-bold text-blue-400 mb-2">Cisco Certified Network Associate</h4>
              <p className="text-gray-300">CCNA 1 & 2 (Routing/Switching)</p>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm text-center">
              <h4 className="text-lg font-bold text-blue-400 mb-2">PLP Junior Software Developer</h4>
              <p className="text-gray-300">Software Development Certification</p>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm text-center">
              <h4 className="text-lg font-bold text-blue-400 mb-2">Cyber-Security</h4>
              <p className="text-gray-300">Entry Level (Cisco Netacad)</p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-blue-400 mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Other Skills</h3>
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex flex-wrap gap-4 justify-center">
              {otherSkills.map((skill) => (
                <span key={skill} className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

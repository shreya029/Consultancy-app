export default function Consultants(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-4">Consultants</h2>
      <p className="text-gray-600 mb-8">Discover experienced professionals across strategy, technology, finance, and operations. Browse featured profiles below and reach out to book a consultation.</p>

      <div className="mb-8 flex flex-col md:flex-row md:items-center gap-3">
        <input
          type="text"
          placeholder="Search by name, skill, or industry"
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <select className="border rounded-lg px-4 py-2">
          <option>All Specialties</option>
          <option>Strategy</option>
          <option>Technology</option>
          <option>Finance</option>
          <option>Operations</option>
        </select>
        <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Filter</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[{
          name: 'Aarav Mehta',
          role: 'Strategy Consultant',
          summary: '10+ years helping SMBs scale through market entry and pricing strategies.',
          tags: ['Growth', 'Pricing', 'Go-to-Market']
        },{
          name: 'Riya Sharma',
          role: 'Technology Consultant',
          summary: 'Cloud modernization and AI adoption for faster, reliable delivery.',
          tags: ['Cloud', 'AI/ML', 'DevOps']
        },{
          name: 'Kabir Singh',
          role: 'Financial Advisory',
          summary: 'Budget planning, valuations, and fundraising support for startups.',
          tags: ['Valuation', 'Fundraising', 'FP&A']
        }].map((c, i) => (
          <div key={i} className="border rounded-lg p-5 hover:shadow transition bg-white">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="text-sm text-gray-600">{c.role}</p>
              </div>
              <span className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded">Featured</span>
            </div>
            <p className="mt-3 text-gray-700 text-sm">{c.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map(t => (
                <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <button className="flex-1 px-3 py-2 border rounded-lg hover:bg-gray-50">View Profile</button>
              <button className="flex-1 px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Book Call</button>
            </div>
          </div>
        ))}
      </div>
    
      <div className="mt-10 text-center">
        <p className="text-gray-700">Are you a consultant? <a href="/consultant-register" className="text-blue-700 hover:underline">Join the network</a>.</p>
      </div>
    </div>
  );
}

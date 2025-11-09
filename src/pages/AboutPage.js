export default function AboutPage(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <p className="text-gray-700 mb-8">consultancy.co connects organizations with vetted experts to solve tough business problems—fast. We bring together strategy, technology, finance, and operations specialists so you get the right advice at the right time.</p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 border rounded-lg bg-white">
          <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700">Enable ambitious teams to make smarter decisions by providing access to proven consultants on-demand—without the overhead of traditional firms.</p>
        </div>
        <div className="p-6 border rounded-lg bg-white">
          <h3 className="text-lg font-semibold mb-2">What Makes Us Different</h3>
          <ul className="text-gray-700 space-y-2 list-disc pl-5">
            <li>Vetted experts with domain depth</li>
            <li>Clear pricing and flexible engagement models</li>
            <li>Fast matching powered by skills and outcomes</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">How We Work</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 border rounded-lg bg-white">
            <div className="text-blue-700 font-semibold">01</div>
            <p className="mt-2 font-medium">Define the problem</p>
            <p className="text-sm text-gray-600 mt-1">Share goals, constraints, and timelines so we can scope the work precisely.</p>
          </div>
          <div className="p-5 border rounded-lg bg-white">
            <div className="text-blue-700 font-semibold">02</div>
            <p className="mt-2 font-medium">Match with experts</p>
            <p className="text-sm text-gray-600 mt-1">We shortlist consultants with relevant outcomes and references.</p>
          </div>
          <div className="p-5 border rounded-lg bg-white">
            <div className="text-blue-700 font-semibold">03</div>
            <p className="mt-2 font-medium">Deliver results</p>
            <p className="text-sm text-gray-600 mt-1">Engage flexibly—from advisory calls to full project ownership.</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 border rounded-lg bg-white text-center">
          <div className="text-3xl font-bold text-blue-700">250+</div>
          <p className="text-gray-600">Vetted consultants</p>
        </div>
        <div className="p-6 border rounded-lg bg-white text-center">
          <div className="text-3xl font-bold text-blue-700">120+</div>
          <p className="text-gray-600">Projects delivered</p>
        </div>
        <div className="p-6 border rounded-lg bg-white text-center">
          <div className="text-3xl font-bold text-blue-700">95%</div>
          <p className="text-gray-600">Repeat clients</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Our Values</h3>
        <ul className="text-gray-700 space-y-2 list-disc pl-5">
          <li>Outcomes over hours</li>
          <li>Transparency and trust</li>
          <li>Craft, curiosity, and empathy</li>
        </ul>
      </div>
    </div>
  );
}

export default function Contact(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-600 mb-8">We'd love to hear from you. Reach out for project inquiries, partnerships, or general questions.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 border rounded-lg bg-white">
          <p className="text-sm text-gray-500">Email</p>
          <a href="mailto:hello@consultancy.co" className="text-blue-700 font-medium">hello@consultancy.co</a>
        </div>
        <div className="p-6 border rounded-lg bg-white">
          <p className="text-sm text-gray-500">Phone</p>
          <a href="tel:+919000000000" className="text-blue-700 font-medium">+91 90000 00000</a>
        </div>
        <div className="p-6 border rounded-lg bg-white">
          <p className="text-sm text-gray-500">Office</p>
          <p className="text-gray-700">Bengaluru, IN · Mon–Fri, 9:00–18:00 IST</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <form className="p-6 border rounded-lg bg-white">
          <h3 className="text-lg font-semibold mb-4">Send us a message</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input type="text" className="w-full border rounded-lg px-3 py-2" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input type="email" className="w-full border rounded-lg px-3 py-2" placeholder="name@email.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-600 mb-1">Subject</label>
            <input type="text" className="w-full border rounded-lg px-3 py-2" placeholder="How can we help?" />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea className="w-full border rounded-lg px-3 py-2 h-28" placeholder="Share a bit about your needs..." />
          </div>
          <button type="button" className="mt-5 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Submit</button>
          <p className="text-xs text-gray-500 mt-2">By submitting, you agree to be contacted about your request.</p>
        </form>

        <div className="p-6 border rounded-lg bg-white">
          <h3 className="text-lg font-semibold mb-4">FAQs</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">How quickly can we start?</p>
              <p className="text-sm text-gray-600">Most projects kick off within 3–5 business days after scoping.</p>
            </div>
            <div>
              <p className="font-medium">Do you offer short advisory calls?</p>
              <p className="text-sm text-gray-600">Yes, you can book 30–60 minute expert sessions or full projects.</p>
            </div>
            <div>
              <p className="font-medium">How are consultants vetted?</p>
              <p className="text-sm text-gray-600">We review experience, outcomes, references, and sample work before onboarding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

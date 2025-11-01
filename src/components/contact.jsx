export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h3>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded-lg" />
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}

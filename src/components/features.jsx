const features = [
  { title: "Career Recommendations", desc: "Get personalized job role suggestions based on your profile." },
  { title: "Course Recommendations", desc: "Learn in-demand skills from curated courses that match your goals." },
  { title: "Skill Gap Analysis", desc: "Identify your strengths and the areas you need to improve." },
  { title: "Personalized Roadmap", desc: "Follow a tailored roadmap to reach your dream career." },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Features</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-blue-50 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold text-blue-700 mb-2">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

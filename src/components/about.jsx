import aboutImage from "/resume.svg";
export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 text-center px-6">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">About NxtRole.AI</h3>
      <p className="max-w-3xl mx-auto text-gray-700">
        NxtRole.AI envisions a world where AI empowers students and professionals to make smarter career choices.
        We provide insights, recommendations, and actionable roadmaps so you can upskill, grow, and succeed in
        your chosen field.
      </p>
      <img
        src={aboutImage} alt="About NxtRole.AI" className="w-80 md:w-96"
        alt="About illustration"
        className="mx-auto mt-10 w-64 opacity-90"
      />
    </section>
  );
}

function MainSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <h3 className="text-3xl font-bold text-center mb-10">
        Our Popular Courses
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Master Chat GPT and AI</h4>
          <p className="text-gray-600 mb-4">
            Learn to leverage AI tools like Chat GPT for productivity and innovation.
          </p>
          <button className="text-blue-600 font-semibold">Learn More ..</button>
        </div>

        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Master Excel</h4>
          <p className="text-gray-500 mb-4">
            Become an Excel pro with advanced formulas and data analysis.
          </p>
          <button className="text-blue-600 font-semibold">Learn More ..</button>
        </div>

        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Power BI</h4>
          <p className="text-gray-600 mb-4">
            Master data visualization and analytics with Power BI.
          </p>
          <button className="text-blue-500 font-semibold">Learn More ..</button>
        </div>
      </div>
    </section>
  );
}
export default MainSection;
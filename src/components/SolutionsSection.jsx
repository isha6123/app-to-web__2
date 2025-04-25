import phoenixMallImg from "../assets/phoenix-mall.jpg";
import axaltaImg from "../assets/axalta.jpg";
import emaarImg from "../assets/emaar.jpg";

const solutions = [
  {
    image: phoenixMallImg,
    title: "Solving parking capacity problems in Phoenix Mall",
  },
  {
    image: axaltaImg,
    title: "Providing real-time parking visibility to AXALTA employees",
  },
  {
    image: emaarImg,
    title: "Automated solutions for residents of Emaar Palm Drive",
  },
];

const SolutionsSection = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Check out our impressive solutions <br /> to some crucial parking problems
        </h2>

        {/* Solutions Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center group">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-[200px] object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
              <p className="mt-4 text-lg font-semibold text-gray-900">{solution.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;


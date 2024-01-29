import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="isolate sm:mb-8 mb-14 flex-grow">
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-90 -z-10 transform-gpu overflow-hidden blur-xl sm:-top-80 opacity-40"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-4 sm:py-8 text-center">
            <h1 className="lg:text-4xl text-2xl font-bold tracking-tight text-gray-900">
              About
            </h1>
          </div>
          <div className="flex flex-col justify-center mx-auto items-center max-w-4xl gap-y-8 px-4">
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-2xl text-xl font-bold tracking-tight text-gray-900">
                Our Vision
              </h1>
              To be at the forefront of research and innovation in Artificial
              Intelligence (AI), ensuring its responsible deployment that aligns
              harmoniously with human values and societal needs.
            </div>
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-2xl text-xl font-bold tracking-tight text-gray-900">
                Our Mission
              </h1>
              <div className="flex flex-col gap-y-2">
                <span>
                  • To address the paramount challenges of integrating AI into
                  various facets of human life, ensuring its transparency,
                  privacy, security, responsibility, reliability, fairness, and
                  explainability.
                </span>
                <span>
                  • To champion responsible AI by rigorously addressing
                  technical challenges, such as managing intricate data sets,
                  ensuring robustness against noise and biases, and advancing
                  innovative model structures.
                </span>
                <span>
                  • To underscore the significance of continuous data
                  collection, integration, and the training of professionals,
                  ensuring they're equipped to navigate the constantly evolving
                  realm of AI.
                </span>
                <span>
                  • To bridge the gap between theoretical AI models and their
                  practical application, ensuring maximum societal benefit and
                  minimal risks.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-2xl text-xl font-bold tracking-tight text-gray-900">
                Our Values
              </h1>
              <div className="flex flex-col gap-y-2">
                <span>
                  • Innovation: Constantly pushing the boundaries of what's
                  possible in AI research.
                </span>
                <span>
                  • Integrity: Maintaining transparency and honesty in all our
                  endeavors.
                </span>
                <span>
                  • Collaboration: Engaging with diverse stakeholders, from
                  government bodies to the general public, to ensure AI serves
                  everyone.
                </span>
                <span>
                  • Excellence: Striving for the highest standards in research,
                  training, and application.
                </span>
                <span>
                  • Responsibility: Prioritizing the ethical considerations and
                  societal impacts of AI.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-2xl text-xl font-bold tracking-tight text-gray-900">
                Our History
              </h1>
              Founded in 2023, the National Institute of Artificial Intelligence
              (IAIA) is quickly becoming a beacon of excellence in the world of
              AI. Rooted in Brazil, we've collaborated with international
              bodies, governments, and industries to advance the safe and
              beneficial use of AI. Our legacy is built on pioneering research,
              groundbreaking innovations, and a commitment to shaping the future
              of AI in a way that benefits humanity as a whole.
            </div>
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-2xl text-xl font-bold tracking-tight text-gray-900">
                Join Us
              </h1>
              Whether you're a student looking to delve into the fascinating
              world of AI, a professional seeking collaboration, or a curious
              individual wanting to understand more about the technology that's
              reshaping our world - the IAIA welcomes you.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Institutions from "../../assets/institutions.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="isolate sm:mb-8 mb-14 flex-grow">
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
          <div className="py-8 sm:py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="lg:text-6xl text-4xl font-bold tracking-tight text-gray-900">
                  Welcome to Brazilian National Institute of Artificial
                  Intelligence
                </h1>
                <p className="mt-8 lg:text-lg text-base text-gray-600">
                  The National Institute of Artificial Intelligence addresses
                  the critical challenges of implementing Artificial
                  Intelligence (AI) in alignment with human values. Emphasizing
                  transparency, privacy, security, responsibility, reliability,
                  fairness, and explainability, the IAIA seeks to ensure that AI
                  systems are both comprehensible and trustworthy. It delves
                  deep into technical challenges, such as handling diverse and
                  complex data sets, ensuring robustness against noise and bias,
                  and developing innovative model structures.
                </p>
                <p className="mt-4 lg:text-lg text-base text-gray-600">
                  Beyond the technical realm, the IAIA also focuses on the
                  importance of data collection, integration, and the continuous
                  training of professionals in the ever-evolving landscape of
                  AI. The goal is to facilitate responsible AI that benefits
                  society while minimizing risks.
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        {/* Institutions */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              An emblem of our commitment to collective growth and shared
              knowledge, the institutions we partner with embody the
              collaborative spirit of the IAIA
            </h2>
          </div>
          <div className="mx-auto sm:mt-14 mt-8 max-w-2xl">
            <img src={Institutions} alt="Institutions" className="w-full" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

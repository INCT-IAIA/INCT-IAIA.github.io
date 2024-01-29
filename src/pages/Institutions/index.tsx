import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Institutions() {
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
              Institutions
            </h1>
          </div>
          <div className="flex flex-col justify-center mx-auto max-w-4xl gap-y-8 px-4">
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-2xl text-xl font-bold tracking-tight text-gray-900">
                Brazilian institutions
              </h1>
              <div className="flex flex-row gap-x-8">
                <div className="flex gap-x-4 clearfix font-normal">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Logo-ufpe-2-2.jpg"
                    className="w-36 shadow-lg rounded-lg"
                  />
                  <div className="flex flex-col">
                    <span className="mb-4 font-semibold">
                      Federal University of Pernambuco
                    </span>
                    <div>
                      <span className="font-medium">Website:</span>{" "}
                      <a
                        href="https://www.ufpe.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        www.ufpe.br
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">E-mail:</span>{" "}
                      <a
                        href="mailto:faleconosco@ufpe.br"
                        className="text-blue-500"
                      >
                        faleconosco@ufpe.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-2xl text-xl font-bold tracking-tight text-gray-900">
                International institutions
              </h1>
              <div className="flex flex-row gap-x-8">
                <div className="flex gap-x-4 clearfix font-normal">
                  <img
                    src="https://inct-iaia.github.io/images/ictintpic/Porto.jpg"
                    className="w-36 shadow-lg rounded-lg"
                  />
                  <div className="flex flex-col">
                    <span className="mb-4 font-semibold">
                      University of Porto
                    </span>
                    <div>
                      <span className="font-medium">Website:</span>{" "}
                      <a
                        href="https://www.up.pt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        www.up.pt
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">E-mail:</span>{" "}
                      <a href="mailto:up@up.pt" className="text-blue-500">
                        up@up.pt
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

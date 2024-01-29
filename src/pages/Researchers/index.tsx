import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Researchers() {
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
              Researchers
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto max-w-4xl gap-y-8 px-4">
            <div className="flex flex-col gap-y-8 sm:gap-x-8 sm:flex-row">
              <div className="flex gap-x-4 clearfix font-normal">
                <img
                  src="https://inct-iaia.github.io/images/teampic/alio.jpg"
                  className="w-36 h-36 object-cover shadow-md rounded-full"
                  alt="Adriano L I Oliveira"
                />
                <div className="flex flex-col">
                  <span className="mb-4 font-semibold">
                    Adriano L I Oliveira
                  </span>
                  <span className="font-medium">Associate Professor</span>
                  <div>
                    <span className="font-medium">E-mail:</span>{" "}
                    <a href="mailto:alio@cin.ufpe.br" className="text-blue-500">
                      alio@cin.ufpe.br
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-4 clearfix font-normal">
                <img
                  src="https://inct-iaia.github.io/images/teampic/cz.jpg"
                  className="w-36 h-36 object-cover shadow-md rounded-full"
                  alt="Cleber Zanchettin"
                />
                <div className="flex flex-col">
                  <span className="mb-4 font-semibold">Cleber Zanchettin</span>
                  <span className="font-medium">Associate Professor</span>
                  <div>
                    <span className="font-medium">E-mail:</span>{" "}
                    <a href="mailto:cz@cin.ufpe.br" className="text-blue-500">
                      cz@cin.ufpe.br
                    </a>
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

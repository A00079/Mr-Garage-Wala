import car1 from '../../../../assets/images/bike2.jpg';
import car2 from '../../../../assets/images/bike3.jpg';
import car3 from '../../../../assets/images/bike4.jpg';
import car8 from '../../../../assets/images/bike6.jpg';
import car4 from '../../../../assets/images/garage1.jpg';
import car5 from '../../../../assets/images/garage2.jpg';
import car6 from '../../../../assets/images/garage3.jpg';


/* This example requires Tailwind CSS v2.0+ */
export default function ClassicModels() {
  return (
    <div className="relative bg-gray-900 sm:py-40 pb-96 py-24 overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48" id='section2'>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-bold tracking-tight text-red-500 sm:text-6xl">
              About Us
            </h1>
            <h1  className="text-2xl font font-bold tracking-tight text-white sm:text-1xl">
              Welcome to #MG Family!
            </h1>

            <p className="mt-4 text-md font-medium text-gray-500">
              Mr Garagewala is an automotive solution to find the skilled mechanic for all repair works and services for your motorcycle and car. Our services includes general maintainance and checkup services, Restoration and customization, insurance work for your vehicle needs and many more.
            </p>
            <p className="mt-4 text-md font-medium text-gray-500" >
              Mr garagewala aims to find Simple-Smarter-Convenient solutions for many problems faced by vehicle owner i.e. Hustle to find right mechanic for your vehicle needs. Troubleshoot to find transparency during servicing and repair work. Improve and Inconvenient solutions for definite problems and worst experience.
            </p>
            <p className="mt-4 text-md font-medium text-gray-500" >
              We are here to serve your better for your vehicle care. We hope you enjoy our value for money services.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src={car1}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={car2}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={car3}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={car4}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={car5}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={car6}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={car8}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <a
                  href="#"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

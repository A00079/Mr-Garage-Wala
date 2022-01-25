import { Text } from '../../../../components';
import carHead1 from '../../../../assets/images/bikehead1.jpg'
import carHead2 from '../../../../assets/images/bike10.jpg'
import carHead3 from '../../../../assets/images/carhead3.jpg'
import Lottie from 'react-lottie';
import animationData from '../../../../assets/lotties/vission.json';
import animationData2 from '../../../../assets/lotties/mission.json';
const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function ShowCases() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <section id='section3'>
      <header >
        {/* <div class="w-full bg-center bg-cover h-60" style={{ backgroundImage: `url(${carHead1})` }}>
          <div class="flex items-center pl-20 justify-start w-full h-full bg-gray-700 bg-opacity-50">
            <div class="text-start">
              <h1 class="text-2xl font-semibold text-yellow-400 uppercase lg:text-3xl">Vision</h1>
              <h1 class="text-lg font-semibold pr-60 text-white lg:text-lg py-4">Mr Garagewala vision to make seamless process and solution for vehicle onwer’s to get them value for money service, Inorder to remove their headache to find right solution on right time</h1>
            </div>
          </div>
        </div>


        <div class="w-full bg-center bg-cover h-60 mt-5" style={{ backgroundImage: `url(${carHead2})` }}>
          <div class="flex items-center pl-20 justify-start w-full h-full bg-gray-700 bg-opacity-50">
            <div class="text-start">
              <h1 class="text-2xl font-semibold text-yellow-400 uppercase lg:text-3xl">Mission</h1>
              <h1 class="text-lg font-semibold pr-60 text-white lg:text-lg py-4">“To be undenably best/good in vehicle care services” our only mission to be most loved and preffered automotive solution company by motorcycle and car owners. Explore great customer experience and most satisfying customer base</h1>
            </div>
          </div>
        </div> */}
        {/* <div class="w-full bg-center bg-cover h-60 mt-5" style={{ backgroundImage: `url(${carHead3})` }}>
          <div class="flex items-center pl-20 justify-start w-full h-full bg-gray-700 bg-opacity-50">
            <div class="text-center">
              <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Build Your new <span class="text-blue-400 underline">Saas</span></h1>
              <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
          </div>
        </div> */}


        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Vision
              </h1>
              <p class="mb-8 leading-relaxed text-gray-300">Mr Garagewala vision to make seamless process and solution for vehicle onwer’s to get them value for money service, Inorder to remove their headache to find right solution on right time.</p>
              {/* <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
              </div> */}
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <div className="hidden sm:block md:block lg:block 2xl:block">
                <Lottie
                  options={defaultOptions}
                  height={300}
                  width={350}
                />
              </div>
              <div className="sm:hidden md:hidden lg:hidden 2xl:hidden">
                <Lottie
                  options={defaultOptions}
                  height={180}
                  width={250}
                />
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <div className="hidden sm:block md:block lg:block 2xl:block">
                <Lottie
                  options={defaultOptions2}
                  height={300}
                  width={490}
                />
              </div>
              <div className="sm:hidden md:hidden lg:hidden 2xl:hidden">
                <Lottie
                  options={defaultOptions2}
                  height={180}
                  width={250}
                />
              </div>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Mission
              </h1>
              <p class="mb-8 leading-relaxed text-gray-300">“To be undenably best/good in vehicle care services” our only mission to be most loved and preffered automotive solution company by motorcycle and car owners. Explore great customer experience and most satisfying customer base</p>
            </div>
          </div>
        </section>
      </header>
    </section>
  )
}

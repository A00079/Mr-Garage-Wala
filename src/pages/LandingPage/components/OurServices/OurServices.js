import React, { useState } from 'react';
import { Text } from '../../../../components';

export default function OurServices() {

  const [servicesData, setServiceData] = useState([
    {
      'title': 'General Service',
      'subcontent': [],
      'img': 'generalser.jpg'
    },
    {
      'title': 'Car Service',
      'subcontent': [],
      'img': 'car3.jpg'
    },
    {
      'title': 'Breakdown service',
      'subcontent': ['Tyre puncture/Replacement', 'Vehicle starting issue', 'Drive cable replacement (clutch/accelerator)', 'Others'],
      'img': 'breakdown.jpg'
    },
    {
      'title': 'Engine and Gear transmission',
      'subcontent': ['Clutch overhauling','Gear box overhauling','Half engine','Engine overhauling','Timing chain issue','Others-  Engine noise, Leakage, Unable to start, etc.'],
      'img': 'engin.jpg'
    },
    {
      'title': 'Wheels',
      'subcontent': ['Tyre puncture/Replacement','Wheel balancing','Wheel bearing replacement','Others – Wheel lock, etc.'],
      'img': 'wheels.jpg'
    },
    {
      'title': 'Brake system',
      'subcontent': ['Front/rear brake pad/shoe replacement','Brake cable','Front/rear brake disc/drum replacement ','Brake service (overhauling)','-	Others'],
      'img': 'break.jpg'
    },
    {
      'title': 'Electricals',
      'subcontent': ['Minor wiring issues','Battery charge/replacement','Self starter motor repair/replacement','Head light/tail light/indicator work/replacement','Others '],
      'img': 'Electricals.jpg'
    },
    {
      'title': 'Fittings',
      'subcontent': ['Part fittings','Seat replacement','Handle cone replacement','Others'],
      'img': 'fitting.jpg'

    },
    {
      'title': 'Oil coolent',
      'subcontent': ['Engine oil replacement','Other fluid Top-up (Break, Coolent, Gear oil, etc.)','-	Engine flushing','Others'],
      'img': 'oilcoolent.jpg'

    },
    {
      'title': 'Suspension system',
      'subcontent': ['Front fork overhauling','Suspension adjustment/replacement','Fork bend removal','	Others'],
      'img': 'Suspension.jpg'
    },
    {
      'title': 'Body work',
      'subcontent': ['Denting/Painting','Body part replacement'],
      'img': 'bodywork.jpg'
    },
    {
      'title': 'Insurance work',
      'subcontent': ['Consultation and purchase','Insurance claims'],
      'img': 'Insurance.jpg'

    },
  ])

  return (
    <section class="text-gray-600 body-font" id='section4'>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font font-bold tracking-tight text-red-500 sm:text-6xl">
            Our Services
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-white mt-2">Motorcycle and car services</p>
        </div>
        <div class="flex flex-wrap -m-4">
          {
            servicesData.map((el, index) => {
              return (
                <div class="p-4 w-full lg:w-1/2">
                  <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={`/static/images/${el.img}`} />
                    <div class="flex-grow sm:pl-8">
                      <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
                      <h3 class="text-indigo-100 mb-3">{el.title}</h3>
                      <ul>
                        {
                          el.subcontent.map((item, itemIndex) =>{
                            return(
                              <li className='text-sm font-semibold text-red-500'>- {item}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

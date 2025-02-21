import { CheckIcon, GlobeAltIcon, ChartBarIcon } from '@heroicons/react/20/solid'
import Battery from '@/components/icons/Battery'
import Design from '@/components/icons/Design'
import Safety from '@/components/icons/SafetyIcon'
import {
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
} from '@heroicons/react/20/solid'
import InfineonLogo from '@/components/logos/Infineon'
import Link from 'next/link'

const features = [
  {
    name: 'Seasoned Innovators.',
    description: 'Collaborate with experts to deliver high-performance applications.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Advanced Technologies.',
    description: 'Leverage cutting-edge Infineon solutions for faster time-to-market.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Specialized Support.',
    description: 'Rely on end-to-end guidance, from concept to deployment.',
    icon: FingerPrintIcon,
  },
]

const tiers = [
  {
    name: 'BMS Controls',
    id: 'tier-hobby',
    href: '/solutions/ecu8tr',
    buttonText: 'Discover BMS', 
    description:
      'Elevate your battery management capabilities. Ensure reliable power and maximize energy efficiency.',
    features: [
      'High-performance BMS and ECU design',
      'Enhanced battery longevity',
      'Tailored solutions for EVs and renewables',
      'Industrial-grade safety and performance',
    ],
    icon: <Battery className="h-20 w-20" aria-hidden="true" />,
  },
  {
    name: 'Safety-Critical Design',
    id: 'tier-team',
    href: '/about',
    buttonText: 'Explore safety', 
    description:
      'Drive safety and reliability with integrated systems that meet ISO 26262 standards.',
    features: [
      'Functional safety expertise for automotive and industrial control',
      'Compliance with ISO 26262 for highest reliability',
      'High-performance designs prioritizing occupant and environmental protection',
    ],
    icon: <Safety className="h-20 w-20" aria-hidden="true" />,
  },
  {
    name: 'Advanced Design Solutions',
    id: 'tier-enterprise',
    href: '/contact',
    buttonText: 'Get in touch', 
    description:
      'Discover the next generation of innovation with tailored advanced design solutions.',
    features: [
      'Next-generation electronic systems built to your unique vision',
      'Bold prototypes leveraging cutting-edge engineering and technology',
      'Advanced analytics',
      'Expert teams tackling complex challenges with ingenuity and creativity',
    ],
    icon: <Design className="h-20 w-20" aria-hidden="true" />,
  },
]

export default function Example() {
  return (
    <div className=" overflow-hidden bg-[#090A0B]">
      <div className="mx-auto max-w-7xl px-6 pb-96 text-center pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl relative z-30">
          <h2 className="text-base/7 font-semibold text-[#425ACA]">Services</h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Smarter energy solutions
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            Advanced BMS and ESS solutions designed for efficiency, safety, and seamless integration—optimizing performance and reliability.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#1188CA" />
                <stop offset={1} stopColor="#030C6C" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flow-root bg-white pb-24 sm:pb-32 relative z-10">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10 sm:p-8 w-full"
                >
                  <div>
                    <h3 id={tier.id} className="text-base/7 font-semibold text-[#425ACA] pb-8">
                      {tier.name}
                    </h3>
                    
                    {/* Here we render the tier-specific icon */}
                    <div className="mt-4 flex items-center justify-center">
                      {tier.icon}
                    </div>

                    <p className="mt-6 text-base/7 text-gray-600">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm/6 text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#425ACA]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-[#425ACA] px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425ACA]"
                  >
                    {tier.buttonText}
                  </Link>
                </div>
              ))}

              {/* The discounted notice - left unchanged */}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-base/7 font-semibold text-[#425ACA]">Our AURIX Expertise</h3>
                  <p className="mt-1 text-base/7 text-gray-600">
                  Unleash the full potential of Infineon’s AURIX™-MCUs with expert design support and tailored training, equipping you to harness cutting-edge technology for maximum performance and reliability.
                  </p>
                </div>
                <Link
                  href="/solutions/ecu8tr"
                  className="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-[#425ACA] ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425ACA]"
                >
                  See our solutions <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* TEST IFINEON SECITON */}

      <div className="bg-gradient-to-b from-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base/7 font-semibold text-[#425ACA]">Custom design</h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
              Infineon's Preferred Design House
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Unlock your design potential with Neutron Controls, your Infineon Preferred Design House for North America.
            </p>
          </div>
        </div>


        <div className="relative py-16 ">
          <div className="mx-auto flex max-w-7xl justify-center px-6 lg:px-8">
            <div className="relative w-[342px] h-[343px]">
              {/* Gradient Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4DE9FE] to-[#0419AE] blur-2xl"></div>

              {/* Computer Chip SVG */}
              <svg
                viewBox="0 0 342 344"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0"
                    y1="0"
                    x2="342"
                    y2="343"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#1c1c1c" />
                    <stop offset="100%" stopColor="#000000" />
                  </linearGradient>
                </defs>
                <rect width="342" height="343" fill="url(#gradient)" />
              </svg>

              {/* Centered container for logo and text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <InfineonLogo className="w-60 h-auto text-white" />
                <p className="mt-6 text-4xl font-semibold bg-gradient-to-tr from-[#4DE9FE] to-[#0419AE] bg-clip-text text-transparent opacity-70">
                  TriCore
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mx-auto mt-16 max-w-5xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#425ACA]" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        
      </div>



    </div>
  )
}
import ModalTrigger from '@/components/careers/ModalTrigger'
import Faq from '@/components/careers/Faq'

export default function HomePage() {
  return (
    <div>
      <div className="bg-[#090A0B] h-[10vh]" />
      <div className="bg-[#090A0B]">
        <div>
          <div className="overflow-hidden pt-32 relative z-30 mx-auto">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                  <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Become a Neutron
                  </h2>
                  <p className="mt-6 text-xl text-white">
                    Join Neutron Controls and help shape extraordinary solutions.
                    We’re seeking innovative engineering and design talent to drive
                    electrifying breakthroughs.
                  </p>
                  <p className="mt-6 text-base text-white">
                    Collaborate in a supportive environment using cutting-edge
                    technologies. Grow your skills through mentorship, training,
                    and real-world impact.
                  </p>
                  <div className="mt-10 flex">
                    {/* Renders our client-side modal trigger */}
                    <ModalTrigger />
                  </div>
                </div>

                {/* Images (example) */}
                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                  <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1152&q=80"
                      className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=604&q=80"
                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1152&h=842&q=80"
                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=604&q=80"
                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FAQ section */}
            <Faq />
          </div>
        </div>
      </div>
    </div>
  )
}
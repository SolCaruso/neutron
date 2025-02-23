'use client'

import { useState } from 'react'
import * as Headless from '@headlessui/react'
import clsx from 'clsx'

// Tailwind theme Dialog components (light mode only)
const sizes = {
  xs: 'sm:max-w-xs',
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-xl',
  '2xl': 'sm:max-w-2xl',
  '3xl': 'sm:max-w-3xl',
  '4xl': 'sm:max-w-4xl',
  '5xl': 'sm:max-w-5xl',
}

export function Dialog({ size = 'lg', className, children, ...props }) {
  return (
    <Headless.Dialog {...props}>
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-gray-900/25 px-2 py-2 transition duration-100 focus:outline-0 sm:px-6 sm:py-8 lg:px-8 lg:py-16 z-[80]"
      />
      <div className="fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0 z-[100]">
        <div className="grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_1fr] sm:p-4">
          <Headless.DialogPanel
            transition
            className={clsx(
              className,
              sizes[size],
              'row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-4 ring-1 shadow-lg ring-gray-950/10 sm:mb-auto sm:rounded-2xl',
              'transition duration-100 will-change-transform data-closed:translate-y-12 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:data-closed:translate-y-0 sm:data-closed:data-enter:scale-95'
            )}
          >
            {children}
          </Headless.DialogPanel>
        </div>
      </div>
    </Headless.Dialog>
  )
}

export function DialogTitle({ className, ...props }) {
  return (
    <Headless.DialogTitle
      {...props}
      className={clsx(className, 'text-lg font-semibold text-gray-900')}
    />
  )
}

export function DialogBody({ className, ...props }) {
  return <div {...props} className={clsx(className, 'mt-6')} />
}

// Custom FileInput component
function FileInput({ id, name, accept, onChange, fileName }) {
  return (
    <div className="mt-1">
      <label htmlFor={id} className="cursor-pointer inline-block rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700">
        Choose File
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
      />
      {fileName && <span className="ml-2 text-sm text-gray-600">{fileName}</span>}
    </div>
  )
}

// Modal form component
function ApplyModal({ isOpen, onClose }) {
  // Define job options with name and description.
  const jobOptions = [
    {
      name: 'General Application',
      description:
        'Seeking talented individuals with automotive industry experience to join our team. Apply now to unleash your potential with Neutron Controls!',
    },
    {
      name: 'Embedded Software Engineer',
      description:
        'Passionate about embedded software development? Join our automotive-focused team and shape the future of cutting-edge solutions.',
    },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: jobOptions[0].name,
    resume: null,
    coverLetter: null,
  })

  // Find the selected job object based on the name stored in formData.position.
  const selectedJob = jobOptions.find((job) => job.name === formData.position)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      setFormData({ ...formData, [name]: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="p-6">
        <DialogTitle className="mb-4">Join Our Team</DialogTitle>
        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            {/* Position */}
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Position
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 pr-12 appearance-none"
                style={{ backgroundPosition: 'right 1rem center' }}
              >
                {jobOptions.map((job) => (
                  <option key={job.name} value={job.name}>
                    {job.name}
                  </option>
                ))}
              </select>
              <div className="mt-2 text-sm text-gray-600">
                {selectedJob?.description}
              </div>
            </div>
            {/* Cover Letter (now first) */}
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                Upload Cover Letter
              </label>
              <FileInput
                id="coverLetter"
                name="coverLetter"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                fileName={formData.coverLetter ? formData.coverLetter.name : ''}
              />
            </div>
            {/* Resume */}
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                Upload Resume
              </label>
              <FileInput
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                fileName={formData.resume ? formData.resume.name : ''}
              />
            </div>
            {/* Buttons: Cancel on left, Submit on right */}
            <div className="flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md text-sm px-4 py-2 text-black/70 font-semibold hover:bg-gray-100 "
              >
                Cancel
              </button>
              <button
                type='submit'
                onClick={() => setIsModalOpen(true)}
                className="rounded-md bg-[#425ACA] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
              Submit <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </form>
        </DialogBody>
      </div>
    </Dialog>
  )
}

export default function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <div className="bg-[#090A0B] h-[10vh]" />
      <div className="bg-[#090A0B]">
        <div>
          <div className="overflow-hidden py-32 relative z-30 mx-auto">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                  <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Become a Neutron
                  </h2>
                  <p className="mt-6 text-xl text-white">
                    Join Neutron Controls and help shape extraordinary solutions. We’re seeking innovative engineering and design talent to drive electrifying breakthroughs.
                  </p>
                  <p className="mt-6 text-base text-white">
                    Collaborate in a supportive environment using cutting-edge technologies. Grow your skills through mentorship, training, and real-world impact.
                  </p>
                  <div className="mt-10 flex">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="rounded-md bg-[#425ACA] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                      Join our team <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                  <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                      className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
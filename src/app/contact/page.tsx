import React from 'react'
import { Building2, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className="relative isolate bg-[#D7D8D6]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-pretty text-4xl font-bold tracking-tight text-vacchio-black sm:text-5xl uppercase">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-vacchio-black/80">
              Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-vacchio-black/80">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <Building2 aria-hidden="true" className="h-7 w-6 text-vacchio-black/60" />
                </dt>
                <dd>
                  Ottawa, ON
                  <br />
                  Canada
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone aria-hidden="true" className="h-7 w-6 text-vacchio-black/60" />
                </dt>
                <dd>
                  <a href="tel:+1 (613) 698-6970" className="hover:text-vacchio-black">
                    +1 (613) 698-6970
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail aria-hidden="true" className="h-7 w-6 text-vacchio-black/60" />
                </dt>
                <dd>
                  <a href="mailto:carmen@zolas.ca" className="hover:text-vacchio-black">
                    carmen@zolas.ca
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-bold text-vacchio-black/80 uppercase">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white/50 px-3.5 py-2 text-base text-vacchio-black outline outline-1 -outline-offset-1 outline-vacchio-black/20 placeholder:text-vacchio-black/40 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-vacchio-black"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-bold text-vacchio-black/80 uppercase">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white/50 px-3.5 py-2 text-base text-vacchio-black outline outline-1 -outline-offset-1 outline-vacchio-black/20 placeholder:text-vacchio-black/40 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-vacchio-black"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-bold text-vacchio-black/80 uppercase">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/50 px-3.5 py-2 text-base text-vacchio-black outline outline-1 -outline-offset-1 outline-vacchio-black/20 placeholder:text-vacchio-black/40 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-vacchio-black"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-bold text-vacchio-black/80 uppercase">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white/50 px-3.5 py-2 text-base text-vacchio-black outline outline-1 -outline-offset-1 outline-vacchio-black/20 placeholder:text-vacchio-black/40 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-vacchio-black"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-bold text-vacchio-black/80 uppercase">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white/50 px-3.5 py-2 text-base text-vacchio-black outline outline-1 -outline-offset-1 outline-vacchio-black/20 placeholder:text-vacchio-black/40 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-vacchio-black"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-vacchio-black px-8 py-3 text-center text-sm font-bold text-white uppercase shadow-sm hover:bg-vacchio-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vacchio-black transition-all duration-200"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

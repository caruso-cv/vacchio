import React from 'react'
import { Building2, Mail, Phone } from 'lucide-react'
import ContactForm from '@/components/pages/contact/ContactForm'

export default function Contact() {
  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-pretty text-4xl font-bold tracking-tight text-vacchio-black sm:text-5xl uppercase">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-vacchio-black/80">
              Ready to bring your next project to life? Let&apos;s discuss how we can work together to create something amazing.
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
        <ContactForm />
      </div>
    </div>
  )
}

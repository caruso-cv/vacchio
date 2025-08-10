"use client"

import React, { useState } from 'react'
import { toast } from 'sonner'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    try {
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        description: 'Thank you for reaching out.',
        duration: 5000,
      })

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      })
      setErrors({})
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        description: 'There was an error sending your message.',
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm/6 font-bold text-vacchio-black/80 uppercase">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`block w-full rounded-md bg-white/50 px-3.5 py-2 text-base text-vacchio-black outline outline-1 -outline-offset-1 placeholder:text-vacchio-black/40 focus:outline focus:outline-2 focus:-outline-offset-2 transition-all duration-200 ${
                  errors.firstName 
                    ? 'outline-red-500 focus:outline-red-500' 
                    : 'outline-vacchio-black/20 focus:outline-vacchio-black'
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm/6 font-bold text-vacchio-black/80 uppercase">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`block w-full rounded-md bg-white/50 px-3.5 py-2 text-base text-vacchio-black outline outline-1 -outline-offset-1 placeholder:text-vacchio-black/40 focus:outline focus:outline-2 focus:-outline-offset-2 transition-all duration-200 ${
                  errors.lastName 
                    ? 'outline-red-500 focus:outline-red-500' 
                    : 'outline-vacchio-black/20 focus:outline-vacchio-black'
                }`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
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
                value={formData.email}
                onChange={handleInputChange}
                className={`block w-full rounded-md bg-white/50 px-3.5 py-2 text-base text-vacchio-black outline outline-1 -outline-offset-1 placeholder:text-vacchio-black/40 focus:outline focus:outline-2 focus:-outline-offset-2 transition-all duration-200 ${
                  errors.email 
                    ? 'outline-red-500 focus:outline-red-500' 
                    : 'outline-vacchio-black/20 focus:outline-vacchio-black'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm/6 font-bold text-vacchio-black/80 uppercase">
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-white/50 px-3.5 py-2 text-base text-vacchio-black outline outline-1 -outline-offset-1 outline-vacchio-black/20 placeholder:text-vacchio-black/40 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-vacchio-black transition-all duration-200"
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
                value={formData.message}
                onChange={handleInputChange}
                className={`block w-full rounded-md bg-white/50 px-3.5 py-2 text-base text-vacchio-black outline outline-1 -outline-offset-1 placeholder:text-vacchio-black/40 focus:outline focus:outline-2 focus:-outline-offset-2 transition-all duration-200 ${
                  errors.message 
                    ? 'outline-red-500 focus:outline-red-500' 
                    : 'outline-vacchio-black/20 focus:outline-vacchio-black'
                }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-vacchio-black px-8 py-3 text-center text-sm font-bold text-white uppercase shadow-sm hover:bg-vacchio-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vacchio-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
        </div>
      </div>
    </form>
  )
}

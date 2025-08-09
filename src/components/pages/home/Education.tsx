import React from 'react'

type EducationItem = {
  school: string
  program: string
  dates: string
}

const educationHistory: EducationItem[] = [
  {
    school: 'Carleton University',
    program: 'BCS Honours, Computer Science',
    dates: '2025 to 2029',
  },
  {
    school: 'Algonquin College',
    program: 'Interactive Multimedia and Design (IMD)',
    dates: '2023 to 2025',
  },
  {
    school: 'Algonquin College',
    program: 'Mobile/Web App Development & UX Design',
    dates: '2022 to 2023',
  },
  {
    school: 'Algonquin College',
    program: 'Business Management & Entrepreneurship',
    dates: '2014 to 2016',
  },
]

export default function Education() {
  return (
    <section className="mb-20">
      <h2 className="font-bold font-cantarell uppercase text-sm text-vacchio-black">Education</h2>

      <div className="mt-6 bg-[#E2E3E1]/20 backdrop-blur-lg rounded-lg overflow-hidden relative border z-20">
        <div className="pt-8 px-6">
          <ul className="divide-y divide-vacchio-black/10">
            {educationHistory.map(({ school, program, dates }) => (
              <li key={`${school}-${program}`} className="py-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <p className="text-xl font-bold text-vacchio-black">{school}</p>
                    <p className="text-base text-vacchio-black/70 mt-1">{program}</p>
                  </div>
                  <p className="text-base text-vacchio-black/60 whitespace-nowrap">{dates}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Badges moved above Bio in AboutMe */}
      </div>
    </section>
  )
}



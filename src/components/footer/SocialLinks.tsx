import GitHub from '../logos/GitHub'
import LinkedIn from '../logos/LinkedIn'
import CodePen from '../logos/CodePen'

export default function SocialLinks() {
  return (
    <div className="mt-auto mb-14">
      <div className="flex gap-4">
        <a 
          href="https://github.com/SolCaruso" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-vacchio-black/30 hover:text-vacchio-black/60 transition-all duration-100 ease-out-quad"
        >
          <GitHub />
        </a>
        <a 
          href="https://www.linkedin.com/in/carmenvac/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-vacchio-black/30 hover:text-vacchio-black/60 transition-all duration-100 ease-out-quad"
        >
          <LinkedIn />
        </a>
        <a 
          href="https://codepen.io/vacc0003" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-vacchio-black/30 hover:text-vacchio-black/60 transition-all duration-100 ease-out-quad"
        >
          <CodePen />
        </a>
      </div>
    </div>
  )
}

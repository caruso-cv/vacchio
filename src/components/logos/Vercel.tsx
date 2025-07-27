import * as React from "react";
import { cn } from "@/lib/utils";

interface VercelProps {
  className?: string;
  size?: number | string;
  color?: string;
}

const Vercel: React.FC<VercelProps> = ({ 
  className, 
  size = 24, 
  color = "currentColor" 
}) => {
  const sizeValue = typeof size === "number" ? `${size}px` : size;
  
  return (
    <svg 
      viewBox="0 0 256 222" 
      width={sizeValue}
      height={sizeValue}
      xmlns="http://www.w3.org/2000/svg" 
      preserveAspectRatio="xMidYMid"
      className={cn("inline-block", className)}
      style={{ color }}
      {...(color !== "currentColor" && { fill: color })}
    >
      <path fill="#fff" d="m128 0 128 221.705H0z" />
    </svg>
  );
};

export default Vercel; 
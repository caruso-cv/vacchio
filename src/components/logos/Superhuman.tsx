import * as React from "react";
import { SVGProps } from "react";

const Superhuman = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path strokeWidth={2} d="m16 12 4 3-8 7-8-7 4-3" />
    <path strokeWidth={2} d="M12 3 4 9l8 6 8-6zM12 15h8" />
  </svg>
);

export default Superhuman; 
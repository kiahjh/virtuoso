import React from "react";
import cx from "classnames";
import { montserrat } from "@/lib/fonts";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => (
  <div className={cx(`flex gap-2`, className)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="10000"
      height="10000"
      viewBox="0 0 10000 10000"
      xmlSpace="preserve"
      className="w-20 h-20 shrink-0"
    >
      <desc>Created with Fabric.js 3.5.0</desc>
      <defs></defs>
      <g transform="matrix(60.606 0 0 60.606 4999.995 4999.995)" id="803697">
        <g vectorEffect="non-scaling-stroke">
          <g transform="matrix(1 0 0 1 41.475 15.35)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(138,182,212)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-345.6, -379.95)"
              d="M 345.7 390.6 a 0.6 0.6 0 0 0 0.6 -0.6 v -1.3 l 0.4 0.4 a 0.6 0.6 0 0 0 0.9 -0.9 l -1.3 -1.3 v -1 l 1.7 1.7 a 0.6 0.6 0 0 0 0.9 -0.1 a 0.6 0.6 0 0 0 0 -0.8 l -2.6 -2.5 h 0 v -3.1 l 2.7 1.6 h 0 l 0.8 3.4 a 0.6 0.6 0 0 0 0.7 0.4 a 0.5 0.5 0 0 0 0.5 -0.7 l -0.6 -2.3 l 0.9 0.5 l 0.5 1.8 a 0.6 0.6 0 0 0 0.7 0.4 a 0.6 0.6 0 0 0 0.5 -0.7 l -0.2 -0.6 l 1.1 0.7 a 0.8 0.8 0 0 0 0.9 -0.3 a 0.5 0.5 0 0 0 -0.2 -0.8 l -1.1 -0.7 h 0.5 a 0.6 0.6 0 0 0 0.5 -0.8 a 0.6 0.6 0 0 0 -0.8 -0.4 l -1.7 0.5 l -1 -0.6 l 2.4 -0.6 a 0.7 0.7 0 0 0 0.4 -0.8 a 0.6 0.6 0 0 0 -0.7 -0.4 l -3.4 0.9 h -0.1 l -2.8 -1.6 l 2.8 -1.6 h 0 l 3.4 0.9 a 0.6 0.6 0 0 0 0.8 -0.4 c 0.1 -0.3 -0.1 -0.7 -0.4 -0.7 l -2.3 -0.7 l 0.8 -0.5 l 1.8 0.5 a 0.8 0.8 0 0 0 0.8 -0.5 a 0.5 0.5 0 0 0 -0.5 -0.7 l -0.6 -0.2 l 1.2 -0.7 a 0.5 0.5 0 0 0 0.2 -0.8 a 0.7 0.7 0 0 0 -0.9 -0.2 l -1.1 0.6 l 0.2 -0.5 a 0.6 0.6 0 0 0 -0.5 -0.8 c -0.3 -0.1 -0.6 0.1 -0.7 0.5 l -0.5 1.7 l -0.9 0.6 l 0.6 -2.4 a 0.6 0.6 0 0 0 -0.5 -0.7 a 0.6 0.6 0 0 0 -0.7 0.4 l -0.8 3.5 h 0 l -2.7 1.6 v -3.2 h 0 l 2.6 -2.5 a 0.6 0.6 0 0 0 0 -0.8 a 0.6 0.6 0 0 0 -0.9 -0.1 l -1.7 1.7 v -1.1 l 1.3 -1.2 a 0.6 0.6 0 0 0 -0.9 -0.9 l -0.4 0.4 v -1.3 a 0.6 0.6 0 0 0 -0.6 -0.6 a 0.6 0.6 0 0 0 -0.6 0.6 v 1.3 l -0.5 -0.4 a 0.6 0.6 0 1 0 -0.9 0.9 l 1.4 1.3 v 1 l -1.8 -1.7 a 0.5 0.5 0 0 0 -0.8 0.1 a 0.5 0.5 0 0 0 0 0.8 l 2.5 2.5 h 0.1 V 379 l -2.8 -1.7 h 0 l -0.8 -3.5 a 0.6 0.6 0 0 0 -0.8 -0.4 c -0.3 0 -0.5 0.4 -0.4 0.7 l 0.5 2.4 l -0.9 -0.6 l -0.4 -1.7 a 0.7 0.7 0 0 0 -0.8 -0.5 a 0.6 0.6 0 0 0 -0.4 0.8 v 0.5 l -1.1 -0.6 a 0.6 0.6 0 0 0 -0.6 1 l 1.1 0.7 l -0.6 0.2 c -0.3 0 -0.5 0.4 -0.4 0.7 s 0.4 0.5 0.7 0.5 l 1.8 -0.5 l 0.9 0.5 l -2.3 0.7 c -0.3 0 -0.5 0.4 -0.4 0.7 s 0.4 0.5 0.7 0.4 l 3.4 -0.9 h 0.1 l 2.7 1.6 l -2.7 1.6 h -0.1 l -3.4 -0.9 a 0.7 0.7 0 0 0 -0.8 0.4 a 0.9 0.9 0 0 0 0.5 0.8 l 2.3 0.6 l -0.9 0.6 l -1.8 -0.5 a 0.6 0.6 0 0 0 -0.7 0.4 a 0.6 0.6 0 0 0 0.4 0.8 h 0.6 l -1.1 0.7 a 0.5 0.5 0 0 0 -0.2 0.8 a 0.6 0.6 0 0 0 0.8 0.3 l 1.2 -0.7 l -0.2 0.6 c -0.1 0.3 0.1 0.7 0.4 0.7 a 0.6 0.6 0 0 0 0.8 -0.4 l 0.5 -1.8 l 0.8 -0.5 l -0.5 2.3 c -0.1 0.3 0.1 0.7 0.4 0.7 a 0.6 0.6 0 0 0 0.8 -0.4 l 0.8 -3.4 h 0 l 2.8 -1.6 v 3.1 H 345 l -2.5 2.5 a 0.5 0.5 0 0 0 0 0.8 a 0.5 0.5 0 0 0 0.8 0.1 l 1.8 -1.7 v 1 l -1.4 1.3 a 0.6 0.6 0 0 0 0.9 0.9 l 0.5 -0.5 V 390 a 0.6 0.6 0 0 0 0.6 0.6 Z"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 53.3522 -11.65)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(138,182,212)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-357.4772, -352.95)"
              d="M 357.5 358.2 a 0.3 0.3 0 0 0 0.3 -0.3 v -0.6 l 0.2 0.2 a 0.3 0.3 0 0 0 0.4 0 c 0.2 -0.1 0.2 -0.3 0.1 -0.5 l -0.7 -0.6 v -0.5 l 0.9 0.8 a 0.3 0.3 0 0 0 0.4 -0.4 l -1.3 -1.2 h 0 v -1.5 l 1.3 0.8 h 0 l 0.4 1.7 a 0.5 0.5 0 0 0 0.4 0.3 c 0.2 -0.1 0.3 -0.2 0.2 -0.4 l -0.2 -1.2 l 0.4 0.3 l 0.2 0.9 a 0.5 0.5 0 0 0 0.4 0.2 c 0.2 0 0.3 -0.2 0.2 -0.4 v -0.3 l 0.6 0.4 h 0.4 c 0.1 -0.2 0.1 -0.4 -0.1 -0.5 l -0.5 -0.3 h 0.2 a 0.3 0.3 0 0 0 0.3 -0.3 c -0.1 -0.2 -0.2 -0.3 -0.4 -0.2 l -0.9 0.2 l -0.4 -0.3 l 1.1 -0.3 c 0.2 -0.1 0.3 -0.2 0.2 -0.4 s -0.2 -0.2 -0.3 -0.2 l -1.7 0.5 h -0.1 l -1.3 -0.8 l 1.3 -0.8 h 0.1 l 1.7 0.4 c 0.1 0.1 0.3 0 0.3 -0.2 s 0 -0.3 -0.2 -0.3 l -1.1 -0.4 l 0.4 -0.2 l 0.9 0.2 l 0.4 -0.2 c 0 -0.2 -0.1 -0.3 -0.3 -0.4 h -0.3 l 0.6 -0.3 a 0.3 0.3 0 1 0 -0.3 -0.5 l -0.6 0.3 v -0.3 c 0.1 -0.1 0 -0.3 -0.2 -0.3 s -0.3 0 -0.4 0.2 l -0.2 0.8 l -0.4 0.3 l 0.2 -1.2 c 0.1 -0.1 0 -0.3 -0.2 -0.3 s -0.3 0 -0.4 0.2 l -0.4 1.7 h 0 l -1.3 0.8 v -1.6 h 0 l 1.3 -1.2 a 0.3 0.3 0 0 0 0 -0.4 h -0.4 l -0.9 0.8 v -0.5 l 0.6 -0.7 a 0.2 0.2 0 0 0 0 -0.4 H 358 l -0.2 0.2 V 348 a 0.3 0.3 0 0 0 -0.6 0 v 0.6 l -0.2 -0.2 h -0.4 a 0.2 0.2 0 0 0 -0.1 0.4 l 0.7 0.7 v 0.5 l -0.9 -0.8 h -0.4 a 0.3 0.3 0 0 0 0 0.4 l 1.3 1.2 h 0 v 1.7 l -1.4 -0.9 h 0 l -0.4 -1.7 c 0 -0.2 -0.2 -0.3 -0.3 -0.2 a 0.3 0.3 0 0 0 -0.3 0.3 l 0.3 1.2 l -0.4 -0.3 l -0.3 -0.8 c 0 -0.2 -0.2 -0.3 -0.3 -0.2 a 0.3 0.3 0 0 0 -0.3 0.3 v 0.3 l -0.5 -0.3 c -0.2 -0.1 -0.4 -0.1 -0.4 0.1 a 0.2 0.2 0 0 0 0.1 0.4 l 0.5 0.3 h -0.3 a 0.5 0.5 0 0 0 -0.2 0.4 c 0 0.1 0.2 0.2 0.4 0.2 l 0.9 -0.2 l 0.4 0.2 l -1.1 0.4 a 0.3 0.3 0 0 0 -0.3 0.3 c 0.1 0.2 0.3 0.3 0.4 0.2 l 1.7 -0.4 h 0 l 1.4 0.8 l -1.4 0.8 h 0 l -1.7 -0.5 c -0.2 0 -0.3 0 -0.4 0.2 a 0.5 0.5 0 0 0 0.2 0.4 l 1.2 0.3 l -0.5 0.3 l -0.8 -0.2 c -0.2 -0.1 -0.4 0 -0.4 0.2 s 0.1 0.3 0.2 0.3 h 0.3 l -0.5 0.3 c -0.2 0.1 -0.2 0.3 -0.2 0.5 h 0.5 l 0.5 -0.4 v 0.3 c -0.1 0.2 0 0.4 0.2 0.4 s 0.3 -0.1 0.3 -0.2 l 0.3 -0.9 l 0.4 -0.3 l -0.3 1.2 c 0 0.2 0.1 0.3 0.3 0.4 a 0.3 0.3 0 0 0 0.3 -0.3 l 0.4 -1.7 h 0 l 1.4 -0.8 V 355 h 0 l -1.3 1.2 a 0.3 0.3 0 0 0 0.4 0.4 l 0.9 -0.8 v 0.5 l -0.7 0.6 a 0.5 0.5 0 0 0 0 0.5 a 0.4 0.4 0 0 0 0.5 0 l 0.2 -0.3 v 0.7 a 0.3 0.3 0 0 0 0.3 0.3 Z"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 41.8919 -21.85)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(138,182,212)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-346.0169, -342.75)"
              d="M 346.1 346.6 a 0.2 0.2 0 0 0 0.2 -0.2 v -0.5 h 0.2 c 0 0.1 0.2 0.1 0.3 0 s 0.1 -0.2 0 -0.3 l -0.5 -0.4 v -0.4 l 0.6 0.6 c 0.1 0.1 0.3 0.1 0.3 0 s 0.1 -0.3 0 -0.3 l -0.9 -0.9 h 0 v -1.1 l 1 0.5 h 0 l 0.3 1.3 a 0.2 0.2 0 0 0 0.2 0.2 c 0.1 -0.1 0.2 -0.2 0.2 -0.3 l -0.2 -0.9 l 0.3 0.2 l 0.2 0.7 c 0 0.1 0.1 0.2 0.3 0.1 s 0.1 -0.1 0.1 -0.2 v -0.3 l 0.4 0.3 c 0.1 0.1 0.2 0 0.3 -0.1 a 0.4 0.4 0 0 0 -0.1 -0.3 l -0.4 -0.2 h 0.2 a 0.2 0.2 0 0 0 0.2 -0.2 c -0.1 -0.2 -0.2 -0.2 -0.3 -0.2 l -0.6 0.2 l -0.4 -0.2 l 0.9 -0.3 c 0.1 0 0.2 -0.1 0.1 -0.2 s -0.1 -0.2 -0.3 -0.2 l -1.2 0.3 h 0 l -1 -0.5 l 1 -0.6 h 0 l 1.2 0.3 c 0.2 0.1 0.3 0 0.3 -0.1 s 0 -0.3 -0.1 -0.3 l -0.9 -0.2 l 0.3 -0.2 h 0.7 c 0.1 0.1 0.2 0 0.3 -0.1 s -0.1 -0.3 -0.2 -0.3 h -0.2 l 0.4 -0.3 c 0.1 0 0.1 -0.2 0.1 -0.3 h -0.3 l -0.4 0.3 v -0.2 c 0.1 -0.2 0 -0.3 -0.1 -0.3 s -0.3 0 -0.3 0.2 l -0.2 0.6 l -0.3 0.2 l 0.2 -0.9 a 0.2 0.2 0 0 0 -0.2 -0.2 c -0.1 -0.1 -0.2 0 -0.2 0.1 l -0.3 1.3 h 0 l -1 0.6 v -1.2 h 0 l 0.9 -0.9 a 0.2 0.2 0 0 0 0 -0.3 c 0 -0.1 -0.2 -0.1 -0.3 0 l -0.6 0.6 v -0.4 l 0.5 -0.5 c 0.1 0 0.1 -0.2 0 -0.3 h -0.3 l -0.2 0.2 v -0.5 a 0.2 0.2 0 1 0 -0.4 0 v 0.5 l -0.2 -0.2 h -0.3 c -0.1 0.1 -0.1 0.3 0 0.3 l 0.5 0.5 v 0.4 l -0.7 -0.6 c 0 -0.1 -0.2 -0.1 -0.3 0 a 0.2 0.2 0 0 0 0 0.3 l 0.9 0.9 h 0.1 v 1.2 l -1 -0.6 h 0 l -0.3 -1.3 c -0.1 -0.1 -0.2 -0.2 -0.3 -0.1 a 0.2 0.2 0 0 0 -0.2 0.2 l 0.2 0.9 l -0.3 -0.2 l -0.2 -0.7 c 0 -0.1 -0.1 -0.1 -0.2 -0.1 s -0.2 0.1 -0.2 0.3 v 0.2 l -0.4 -0.3 c -0.1 0 -0.3 0 -0.3 0.1 a 0.2 0.2 0 0 0 0 0.3 l 0.5 0.3 H 343 a 0.2 0.2 0 0 0 -0.1 0.3 c 0 0.1 0.1 0.2 0.2 0.1 h 0.7 l 0.3 0.2 l -0.8 0.2 c -0.1 0 -0.2 0.1 -0.2 0.3 h 0.3 l 1.2 -0.3 h 0 l 1 0.6 l -1 0.5 h 0 l -1.2 -0.3 c -0.1 0 -0.3 0 -0.3 0.1 s 0.1 0.3 0.2 0.3 l 0.8 0.3 l -0.3 0.2 l -0.7 -0.2 c -0.1 0 -0.2 0 -0.2 0.2 s 0 0.2 0.1 0.2 h 0.2 l -0.4 0.2 a 0.2 0.2 0 0 0 0 0.3 a 0.2 0.2 0 0 0 0.3 0.1 l 0.4 -0.3 v 0.3 a 0.2 0.2 0 0 0 0.2 0.2 c 0.1 0.1 0.2 0 0.3 -0.1 v -0.7 l 0.3 -0.2 l -0.2 0.9 a 0.2 0.2 0 0 0 0.2 0.2 c 0.1 0.1 0.2 0 0.3 -0.1 l 0.3 -1.3 h 0 l 1 -0.6 v 1.2 h 0 l -1 0.9 v 0.3 c 0.1 0.1 0.3 0.1 0.3 0 l 0.7 -0.6 v 0.3 l -0.5 0.5 a 0.2 0.2 0 1 0 0.3 0.3 h 0.2 v 0.4 c 0 0.2 0.1 0.3 0.2 0.3 Z"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 22.8608 -36.75)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(138,182,212)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-326.9858, -327.85)"
              d="M 327 341.6 a 0.8 0.8 0 0 0 0.8 -0.8 v -1.7 l 0.6 0.5 a 0.8 0.8 0 0 0 1.1 -1.1 l -1.7 -1.6 v -1.4 l 2.3 2.1 a 0.8 0.8 0 0 0 1.1 -1.1 l -3.3 -3.2 h -0.1 v -4 l 3.5 2.1 h 0 l 1.1 4.4 a 0.8 0.8 0 0 0 0.9 0.6 a 0.9 0.9 0 0 0 0.6 -1 l -0.7 -3 l 1.1 0.7 l 0.6 2.3 a 0.9 0.9 0 0 0 1 0.6 a 0.7 0.7 0 0 0 0.5 -1 l -0.2 -0.8 l 1.5 0.9 a 0.8 0.8 0 0 0 1.1 -0.3 a 0.8 0.8 0 0 0 -0.3 -1.1 l -1.4 -0.8 l 0.7 -0.2 a 0.8 0.8 0 0 0 0.6 -1 a 0.8 0.8 0 0 0 -1 -0.5 l -2.2 0.5 l -1.2 -0.7 l 3 -0.8 a 0.7 0.7 0 0 0 0.5 -1 a 0.7 0.7 0 0 0 -0.9 -0.5 l -4.4 1.2 h -0.1 l -3.6 -2.1 l 3.6 -2.1 h 0.1 l 4.3 1.3 a 0.8 0.8 0 0 0 0.5 -1.6 l -3 -0.8 l 1.1 -0.6 l 2.3 0.5 a 0.8 0.8 0 0 0 1 -0.5 a 0.8 0.8 0 0 0 -0.6 -1 l -0.8 -0.2 l 1.5 -0.9 a 0.8 0.8 0 0 0 0.3 -1.1 a 0.8 0.8 0 0 0 -1.1 -0.2 l -1.4 0.8 l 0.2 -0.7 a 0.8 0.8 0 0 0 -0.6 -1 a 0.9 0.9 0 0 0 -1 0.6 l -0.6 2.3 l -1.2 0.7 l 0.8 -3.1 a 0.8 0.8 0 0 0 -0.6 -0.9 a 0.8 0.8 0 0 0 -1 0.5 l -1 4.5 h 0 l -3.5 2 v -4.1 h 0.1 l 3.3 -3.1 a 0.9 0.9 0 0 0 0 -1.2 a 0.8 0.8 0 0 0 -1.1 0 l -2.3 2.2 v -1.4 l 1.7 -1.7 a 0.8 0.8 0 0 0 -1.1 -1.1 l -0.6 0.6 v -1.7 a 0.8 0.8 0 0 0 -0.8 -0.8 a 0.9 0.9 0 0 0 -0.8 0.8 v 1.7 l -0.5 -0.6 a 0.9 0.9 0 0 0 -1.2 0 a 0.8 0.8 0 0 0 0 1.1 l 1.7 1.8 v 1.3 L 324 318 a 0.8 0.8 0 0 0 -1.1 0 a 0.9 0.9 0 0 0 0 1.2 l 3.3 3.1 h 0 v 4.2 l -3.5 -2.1 h 0 l -1.1 -4.5 a 0.7 0.7 0 0 0 -0.9 -0.5 a 0.8 0.8 0 0 0 -0.6 0.9 l 0.7 3.1 l -1.2 -0.7 l -0.6 -2.3 a 0.8 0.8 0 0 0 -0.9 -0.6 a 0.8 0.8 0 0 0 -0.6 1 l 0.2 0.7 l -1.5 -0.8 a 0.7 0.7 0 0 0 -1 0.2 a 0.8 0.8 0 0 0 0.2 1.1 l 1.5 0.9 l -0.8 0.2 a 0.8 0.8 0 0 0 -0.6 1 a 0.9 0.9 0 0 0 1 0.5 l 2.4 -0.5 l 1.1 0.6 l -3 0.8 a 0.9 0.9 0 0 0 -0.6 1 a 1 1 0 0 0 1 0.6 l 4.4 -1.3 h 0.1 l 3.5 2.1 l -3.5 2.1 h -0.1 l -4.4 -1.2 a 0.8 0.8 0 0 0 -1 0.5 a 0.9 0.9 0 0 0 0.6 1 l 3 0.8 l -1.2 0.7 l -2.3 -0.5 a 0.7 0.7 0 0 0 -0.9 0.5 a 0.8 0.8 0 0 0 0.5 1 l 0.8 0.2 l -1.5 0.8 a 0.8 0.8 0 0 0 -0.2 1.1 a 0.7 0.7 0 0 0 1 0.3 l 1.5 -0.9 l -0.2 0.8 a 0.9 0.9 0 0 0 0.6 1 a 0.8 0.8 0 0 0 0.9 -0.6 l 0.7 -2.3 l 1.1 -0.7 l -0.7 3 a 0.8 0.8 0 0 0 0.6 1 a 0.8 0.8 0 0 0 0.9 -0.6 l 1.1 -4.4 h 0 l 3.5 -2.1 v 4 h 0 l -3.3 3.2 a 0.8 0.8 0 0 0 1.1 1.1 l 2.2 -2.1 v 1.3 l -1.7 1.7 a 0.8 0.8 0 0 0 0 1.1 a 0.9 0.9 0 0 0 1.2 0 l 0.5 -0.6 v 1.8 a 0.9 0.9 0 0 0 0.8 0.8 Z"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 32.275 -8.3514)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(138,182,212)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-336.4, -356.2485)"
              d="M 344.8 363.3 a 2.6 2.6 0 0 1 -2.6 -2.6 a 0.5 0.5 0 0 1 1 0 a 1.6 1.6 0 1 0 3.2 0 a 1.6 1.6 0 0 0 -1.6 -1.5 H 331.9 a 0.5 0.5 0 0 1 -0.5 -0.5 a 0.6 0.6 0 0 1 0.5 -0.5 h 13 a 2.7 2.7 0 0 1 2.5 2.5 a 2.6 2.6 0 0 1 -2.6 2.6 Z m -3.9 -7.3 h -15 a 0.5 0.5 0 0 1 0 -1 h 15 a 1.8 1.8 0 0 0 1.9 -1.9 a 1.9 1.9 0 0 0 -1.9 -1.9 a 2 2 0 0 0 -1.9 1.9 a 0.5 0.5 0 0 1 -1 0 a 2.9 2.9 0 1 1 3 2.9 Z m -6.4 -3.1 h -8.6 a 0.5 0.5 0 0 1 -0.5 -0.5 a 0.5 0.5 0 0 1 0.5 -0.5 h 8.6 a 0.8 0.8 0 0 0 0.9 -0.8 a 0.9 0.9 0 0 0 -0.9 -0.9 a 0.9 0.9 0 0 0 -0.8 0.9 a 0.6 0.6 0 0 1 -0.5 0.5 a 0.5 0.5 0 0 1 -0.5 -0.5 a 1.8 1.8 0 0 1 1.8 -1.9 a 1.8 1.8 0 0 1 1.9 1.9 A 1.8 1.8 0 0 1 334.5 352.9 Z"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -0.025 -0.2)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `#739A84`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-304.1, -364.4)"
              d="M 275 421.9 a 48.2 48.2 0 0 1 -5.4 -1 c -3.9 -1.1 -6.2 -2.4 -6.9 -3.7 s -1 -2.1 -0.9 -2.2 s 0.6 1.1 2.1 2.4 s 4.3 2 8.8 1.9 a 21.8 21.8 0 0 1 8.2 1 a 29.9 29.9 0 0 1 8.4 4.6 a 25.9 25.9 0 0 1 3.2 2.8 c 0.1 -0.2 -1.1 -1 -3.7 -2.4 s -7.2 -2.6 -13.8 -3.4 m 40.8 5.8 q 0.3 -1.5 9.6 -6.6 a 20.5 20.5 0 0 1 10.1 -1.8 c 4.5 0.1 7.5 -0.5 8.9 -1.9 s 2.1 -2.1 2 -2.4 s -0.2 1.2 -1.5 2.9 s -5.1 3 -11.5 3.9 h -0.1 c -6.7 0.8 -11.3 2 -13.8 3.4 s -3.8 2.2 -3.7 2.4 m -21.1 -8.1 c 2.9 1.2 5.2 2.2 6.9 3.1 a 56.2 56.2 0 0 0 -4.7 -3.2 q -8.2 -4.5 -13.2 -4.8 c -3.4 -0.2 -5.2 -0.2 -5.2 0 a 23.9 23.9 0 0 1 12.5 0.3 a 31 31 0 0 1 9.3 4.4 a 15.1 15.1 0 0 1 2.1 1.4 l -1.5 -1.5 c -4.2 -3.4 -7.9 -5.5 -11.2 -6.3 s -5.1 -1.1 -5.3 -1 a 19.3 19.3 0 0 1 11.5 2.3 a 33.3 33.3 0 0 1 7.3 4.9 l 0.9 0.9 l 0.9 -0.8 c 1.4 -1.5 3.9 -3.1 7.3 -5 a 19.6 19.6 0 0 1 11.6 -2.3 c -0.2 -0.1 -2 0.2 -5.4 1.1 s -7.1 2.9 -11.3 6.4 l -1.4 1.3 l 1.9 -1.3 a 35.9 35.9 0 0 1 9.4 -4.4 a 23.6 23.6 0 0 1 12.7 -0.4 c -0.1 -0.2 -1.9 -0.1 -5.3 0.1 s -8 1.8 -13.6 5 a 45.7 45.7 0 0 0 -4.2 2.9 c 1.5 -0.8 3.6 -1.7 6 -2.8 a 45 45 0 0 1 21.5 -3.6 l 2.2 0.3 h -2.1 c -3.4 -0.3 -9.1 1 -17 3.7 a 61.6 61.6 0 0 0 -13.2 7.4 a 60.2 60.2 0 0 0 -14.3 -7.8 c -7.4 -2.4 -12.6 -3.5 -15.8 -3.3 h -2.1 l 2.2 -0.3 a 44.1 44.1 0 0 1 20.6 3.3 M 256.7 317 c 13.2 -12.8 29 -19.4 47.4 -19.6 s 34.3 6.7 47.4 19.6 a 67.1 67.1 0 0 1 5.7 88.3 a 45.7 45.7 0 0 1 -3.3 3.6 c -0.9 0.9 -5.4 4.9 -4.3 2.9 s 0.8 -2.3 1 -6.2 c 0.1 -0.6 -1 2.5 -3.5 5.5 s -41.9 6.6 -43 -32 c 0 -0.7 -4.5 -16.7 0 -25.4 a 11.8 11.8 0 0 0 1.8 -4.8 a 7.9 7.9 0 0 0 -0.5 -3 c -0.3 -1 -1 -2.5 -1.5 -3.7 s -1.9 -3.3 0.3 -2.7 a 2.7 2.7 0 0 1 1.7 1 c -0.1 -0.3 -0.1 -1.7 -0.3 -2.9 s -1.1 -1.4 -1.1 -1.4 s 0.2 -24.8 0.1 -24.8 c -1.7 -1.1 -2 0.6 -2.3 1.4 c -0.7 -1.5 -1.6 -2 -2.8 -1.5 a 6.8 6.8 0 0 0 -2.1 1.2 a 2.3 2.3 0 0 0 -3.1 0.3 a 9.2 9.2 0 0 0 -1.4 1.6 c -0.8 -0.8 -1.8 -0.8 -3.1 0.1 a 13.4 13.4 0 0 0 -2 1.6 c -2.2 -0.6 -3.9 -0.5 -5.2 0.3 a 7.5 7.5 0 0 0 -2 1.3 c -2.1 0.1 -3.1 0.9 -3 2.3 a 6.1 6.1 0 0 0 0.4 2.5 c -2.9 0.4 -4.2 1.1 -4 2.3 s 0.5 1.7 0.7 1.8 a 1.8 1.8 0 0 0 -1.9 1.7 a 5.1 5.1 0 0 0 0 1.9 a 1.7 1.7 0 0 0 -2.1 1.2 a 8.4 8.4 0 0 0 -0.4 1.8 q -1.7 -1.6 -2.7 -0.3 c -0.8 0.9 -1.2 1.4 -1.2 1.6 s -1.8 -0.9 -2.4 0 a 5.5 5.5 0 0 0 -1 1.8 q -4.5 1.2 -3.9 2.7 q -2.2 0.3 -2.1 2.1 a 5.2 5.2 0 0 0 0.5 2 c -2 0.7 -2.8 1.6 -2.4 2.8 c -2.7 0.4 -4.1 1.5 -4.1 3.2 a 6.7 6.7 0 0 0 0.3 2.8 c -1.8 0 -2.6 0.5 -2.3 1.7 c -1.9 1.4 -2.1 2.5 -0.7 3.2 a 8 8 0 0 0 2.6 1.2 c 1.5 1.1 2.5 1.1 2.9 0 c 0.4 2.2 1 3.5 1.8 3.6 c -1.8 1.4 -2.5 2.3 -1.9 2.8 a 1.8 1.8 0 0 0 -2 1.4 c -0.4 1 -0.6 1.6 -0.5 1.8 c -1.9 -1 -3 -0.9 -3.3 0.1 c -2.1 -0.2 -3.2 0.7 -3.3 2.6 a 10.6 10.6 0 0 0 0.3 3.4 c -1.1 1.7 -1.1 2.9 -0.1 3.7 a 6.8 6.8 0 0 0 2 1.1 c -0.2 1.3 0.8 1.9 2.8 1.7 l 3.4 -0.3 c -0.8 1.7 -0.7 2.7 0.3 3.1 a 6.6 6.6 0 0 0 2 0.5 c 0.1 2.2 0.5 3 1.4 2.5 c -0.4 2.4 -0.1 3.7 0.9 3.7 c 0.4 1.8 1 2.3 1.8 1.4 a 10.3 10.3 0 0 0 1.4 -1.6 c 2.7 0.3 4.5 0 5.5 -1 c 0.8 1.5 1.5 2 2.3 1.3 a 4.8 4.8 0 0 0 1.3 -1.3 a 2.9 2.9 0 0 0 3.4 0.9 a 7.2 7.2 0 0 0 2.2 -0.9 c -0.3 2.2 0 3.5 1 4 s 1.6 0.6 1.8 0.5 c 1.2 2.4 2.2 2.8 2.9 1.4 a 11.4 11.4 0 0 0 1.2 -2.7 c 1.7 1.5 2.7 1.7 3.2 0.6 a 6.3 6.3 0 0 0 0.7 -1.9 c 1.5 1.2 2.7 1.4 3.5 0.6 s 1.4 -1.5 1.4 -1.7 s 1.8 2.3 2.7 2.4 s 2.2 -2.2 3.5 -2.2 s 3.4 3.2 3.8 4 c 1.4 3 3.2 2.8 3.9 6.2 s 0.3 7.8 -3.4 13.4 a 13 13 0 0 1 -1 1.5 c -2.4 -2.3 -6 -3.7 -10 -5.1 s -8.5 -0.6 -13.5 2.2 l -2.2 1.2 q -10.2 2.7 -13.8 -1.8 c -2.5 -3 -3.7 -4.9 -3.6 -5.5 c 0.1 2.9 0.4 5 1 6.2 a 22.6 22.6 0 0 1 -4 -2.7 c -2.3 -2.4 -3.8 -4.1 -4.6 -5.1 a 66.5 66.5 0 0 1 -12.9 -39.6 c 0.2 -18.4 6.8 -34.2 19.6 -47.4 m 47.4 -22.6 q -29.7 0.8 -49.5 20.5 t -20.5 49.5 q 0.8 29.7 20.5 49.5 t 49.5 20.5 q 29.8 -0.7 49.5 -20.5 t 20.5 -49.5 q -0.7 -29.7 -20.5 -49.5 t -49.5 -20.5"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 18.225 11.8)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(134,101,39)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-322.35, -376.4)"
              d="M 323.1 380.3 l -1.4 -0.4 l -0.7 -0.2 l -0.8 -0.2 a 10.1 10.1 0 0 0 -3 -0.2 a 12.6 12.6 0 0 0 -5.2 2 a 15.6 15.6 0 0 0 -1.9 1.3 c 0.1 1 0.6 1.8 0.7 2.6 l 0.3 -0.3 l 1.7 -1.5 a 11 11 0 0 1 4.5 -2.1 a 12.7 12.7 0 0 1 2.8 -0.2 l 0.7 0.2 h 0.7 l 1.6 0.4 a 6.1 6.1 0 0 0 3 -0.5 a 10.5 10.5 0 0 0 2.7 -2 a 18.7 18.7 0 0 0 3.5 -5.3 a 29.5 29.5 0 0 0 1.8 -4.5 c 0.3 -1.2 0.5 -1.8 0.5 -1.8 l -0.6 1.7 a 33.8 33.8 0 0 1 -1.9 4.3 a 18.8 18.8 0 0 1 -3.6 4.9 a 7.3 7.3 0 0 1 -2.5 1.5 a 5.7 5.7 0 0 1 -2.9 0.2"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -11.925 -16.5)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(255,255,255,0)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-292.2, -348.1)"
              d="M 284.6 349.6 l 1.1 0.3 h 0.6 l 0.6 0.2 l 1.4 0.5 l 1.4 0.5 l 1.4 0.7 l 1.5 0.7 l 1.2 0.8 l 1.8 1.1 l 0.5 0.5 a 16.8 16.8 0 0 1 1.8 2.1 a 10 10 0 0 1 0.8 1.4 l 1.1 -1.8 l -0.5 -0.6 a 11.4 11.4 0 0 0 -2.2 -2.2 l -0.6 -0.5 l -0.6 -0.4 l -1.1 -1.1 a 9.8 9.8 0 0 1 -1.7 -2.3 a 6.2 6.2 0 0 1 -0.9 -2.7 a 7.5 7.5 0 0 1 0.1 -2.6 a 12.3 12.3 0 0 1 0.8 -2.3 a 11.8 11.8 0 0 1 2.1 -3.1 l 1 -1 l -1.1 0.9 a 22.2 22.2 0 0 0 -2.4 3 a 16 16 0 0 0 -1 2.3 a 7 7 0 0 0 -0.3 2.9 a 10.9 10.9 0 0 0 0.7 3 a 14 14 0 0 0 1.5 2.4 l -0.8 -0.4 l -1.4 -0.6 l -1.5 -0.6 l -1.5 -0.5 L 287 350 l -0.7 -0.2 h -0.6 l -1.1 -0.2 h 0"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -16.125 -4.65)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(255,255,255,0)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-288, -359.95)"
              d="M 279.2 352.7 a 3.6 3.6 0 0 0 0.4 0.9 a 4.7 4.7 0 0 0 0.5 1 l 0.6 1.1 l 0.7 1.1 l 0.8 1.2 l 0.9 1.2 l 0.9 1.1 l 1.1 1.2 l 2.3 2.1 a 38.7 38.7 0 0 0 9.4 6 l 0.5 0.2 l 0.6 0.3 c -0.2 -0.9 -0.4 -1.7 -0.5 -2.5 l -0.6 -0.2 a 39.3 39.3 0 0 1 -8.6 -4.8 a 22.3 22.3 0 0 1 -2.4 -1.9 l -1.1 -1 l -1 -1.1 l -1 -1 l -0.8 -1.1 l -0.8 -1 a 4.1 4.1 0 0 0 -0.7 -1.1 a 4.1 4.1 0 0 1 -0.5 -0.9 a 4.1 4.1 0 0 1 -0.5 -0.9 l -0.8 -1.5 l -0.5 -1.3 a 13.1 13.1 0 0 0 0.4 1.4 l 0.7 1.5"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -7.175 16.9508)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(255,255,255,0)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-296.95, -381.5508)"
              d="M 268.5 372.6 a 17.1 17.1 0 0 0 6.5 3.7 a 14.2 14.2 0 0 0 4.2 0.8 a 16.6 16.6 0 0 0 4.4 -0.3 l 2.1 -0.3 l 2.1 -0.3 h 4 a 18.4 18.4 0 0 1 5.6 1.6 l 1 0.5 c 0.5 0.3 0.6 1 0.7 1.5 c 1.1 4.7 1.9 10.7 6.8 15.9 c 8.2 8.6 -3.2 20 -3.2 20 l 1.9 1.5 c 0.3 0.1 3.9 -4.3 6.5 -6.8 s 2.7 -8.5 1.8 -14.6 c 0.5 0.4 3.2 3.6 6.9 9.4 a 22.3 22.3 0 0 1 3.9 -0.9 a 66.7 66.7 0 0 0 -9 -15.5 a 47.3 47.3 0 0 1 -2.8 -3.9 c 3 6.9 4.9 10.4 5.5 10.5 c -4.2 -5.1 -7.1 -9.5 -8.6 -13.3 s -2.2 -5.8 -2.1 -6 a 0.1 0.1 0 0 0 0.1 -0.1 a 13 13 0 0 1 1.7 -2.8 l 0.6 -0.7 a 11.7 11.7 0 0 1 3 -2.2 a 11 11 0 0 1 5.2 -1 a 10.8 10.8 0 0 0 3.1 -0.2 a 9 9 0 0 0 2.8 -0.8 a 12.3 12.3 0 0 0 4.1 -3.1 a 20 20 0 0 0 1.9 -3.1 l 0.5 -1.2 l -0.6 1.2 a 13.4 13.4 0 0 1 -2.1 2.8 a 10.7 10.7 0 0 1 -4.1 2.6 a 11.8 11.8 0 0 1 -2.7 0.6 a 13.4 13.4 0 0 1 -2.8 -0.1 a 12.2 12.2 0 0 0 -6 0.7 l -2.5 1.3 l -0.8 0.7 h -0.2 c 0.1 -0.1 0.1 -0.3 0.2 -0.5 a 8.8 8.8 0 0 1 0.5 -1.5 l 0.3 -1.2 v 0.2 a 11.7 11.7 0 0 0 0.5 -2 a 19.7 19.7 0 0 0 0.7 -2.6 v -0.3 h 0.1 c 0 -0.1 0.1 -0.2 0.2 -0.4 l 0.5 -0.7 a 3.7 3.7 0 0 1 0.6 -1 l 0.8 -1 a 9.4 9.4 0 0 1 0.9 -1.2 l 1.1 -1.1 l 1.2 -1.1 l 0.6 -0.6 l 0.7 -0.4 l 0.6 -0.5 l 0.7 -0.4 l 0.7 -0.4 l 0.6 -0.4 l 0.6 -0.3 l 0.6 -0.2 l 1.1 -0.4 l 0.9 -0.3 l 0.7 -0.2 l -0.8 0.2 l -0.8 0.2 l -1.1 0.3 l -0.6 0.2 l -0.7 0.3 l -0.7 0.3 l -0.7 0.3 l -0.7 0.4 l -0.7 0.5 l -0.7 0.4 l -0.7 0.5 l -1.3 1.1 l -1.2 1.1 l -1 1.1 l -0.9 1 l 0.3 -2.3 a 24.5 24.5 0 0 0 0.2 -2.7 a 21.8 21.8 0 0 0 0.1 -2.5 a 17 17 0 0 1 -0.1 -2.2 l -0.3 -1.9 c 0 -0.2 -0.1 -0.5 -0.1 -0.7 a 6.4 6.4 0 0 0 -0.2 -0.7 a 11.3 11.3 0 0 0 -0.2 -1.2 a 10.9 10.9 0 0 0 0.1 1.2 c 0 0.2 0.1 0.5 0.1 0.7 a 1.7 1.7 0 0 1 0.1 0.7 a 12.8 12.8 0 0 0 0.1 1.9 a 15.5 15.5 0 0 0 -0.1 2.2 l -0.3 2.4 c -0.1 0.9 -0.3 1.7 -0.4 2.6 l -0.6 2.6 c -0.3 0.9 -0.5 1.8 -0.8 2.6 a 18.3 18.3 0 0 1 -0.8 2.5 l -0.9 2.2 a 17.1 17.1 0 0 1 -0.7 1.8 a 0.4 0.4 0 0 0 -0.1 0.3 L 305 372 a 29.7 29.7 0 0 1 -1.4 -6.7 c 0 -0.7 0.5 -1.4 0.6 -2.1 a 27 27 0 0 1 0.4 -2.8 c 0.3 -0.9 0.1 -2.5 1 -2.2 s -0.1 -0.4 -0.1 -0.4 s -0.3 -1.3 -0.1 -1.8 l 0.4 -0.7 l 0.4 -0.7 c 0.4 -1 -1.2 -1.7 -1.4 -1.4 s -0.5 1.4 -0.9 1.8 a 4.3 4.3 0 0 1 -0.4 0.7 a 39.9 39.9 0 0 0 -1.4 4.1 a 0.6 0.6 0 0 0 -0.1 0.4 c -1.5 7.7 -1.2 14.1 0.8 19.4 s 1.9 8.8 2.3 9.1 c -3.3 -4.1 -4.4 -8.6 -5.8 -12 c -0.2 -0.4 -0.2 -0.8 -0.5 -1.1 s -1.1 -0.4 -1.8 -0.6 l -0.9 -0.3 l -2.1 -0.3 h -2.1 a 31.1 31.1 0 0 0 -4.3 0.3 l -2.2 0.4 l -1 0.3 l -1.1 0.3 a 18.4 18.4 0 0 1 -4.1 0.5 a 13.3 13.3 0 0 1 -4 -0.5 a 14.2 14.2 0 0 1 -3.6 -1.4 a 11.5 11.5 0 0 1 -2.8 -1.9 a 10.7 10.7 0 0 1 -2.2 -2 a 11 11 0 0 1 -1.4 -1.8 a 14.3 14.3 0 0 1 -1 -1.6 l 1 1.7 a 17.1 17.1 0 0 0 3.3 4"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 14.9206 11.4264)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(134,101,39)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-319.0456, -376.0264)"
              d="M 307.3 388.7 c -3.9 -8.6 -6.2 -25.4 0.1 -38.2 a 9.4 9.4 0 0 0 -1.4 -6.8 c -1.6 -2.7 -1.1 -2.5 0.5 0 c 7 11.4 -2 9.3 0 30.3 c 3.4 -9.3 6.1 -19.9 4.8 -29.9 a 52.4 52.4 0 0 1 0.3 16.3 c 2.5 -4 6.3 -8 11.2 -9 c -5.6 1.7 -9.5 7 -11.7 12.1 c -0.5 3 -1.3 6.4 -2 9.1 c 6.5 -7.1 15.3 1.6 19.3 -11.3 c -3.2 13.8 -13.3 5.6 -18.7 14 c -2.4 4.6 -2.4 3.4 -0.3 10.3 c 6.5 20.1 25.7 24.7 25.2 24.7 C 330.8 410.3 317.6 411.1 307.3 388.7 Z"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 2.4294 -39.2361)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `#739A84`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-306.5544, -325.3639)"
              d="M 304.5 311.4 s 2.4 0.4 2.6 1.7 a 2.4 2.4 0 0 1 -0.2 1.8 s 1.9 2.3 2.1 3.9 s -3.1 2.3 -3.1 2.3 s 3.3 2.8 2.8 4.3 s -2.9 1.9 -2.9 1.9 s 1.8 2.3 1.3 3.5 s -1.6 0.8 -1.6 0.8 s 2 2.8 1.3 3.8 a 1.1 1.1 0 0 1 -0.7 0.3 c -0.5 0.2 0 0.6 0.1 1.6 a 1.8 1.8 0 0 1 -2.1 2 Z"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -0.025 -0.2006)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(138,182,212,0)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-304.1, -364.3994)"
              d="M 303.7 291.9 a 72.5 72.5 0 1 0 72.9 72.5 C 376.6 324.3 343.7 291.9 303.7 291.9 Z m 0.4 142.2 a 69.7 69.7 0 0 1 -0.4 -139.4 c 38.5 0 70.1 31.2 70.1 69.7 A 69.7 69.7 0 0 1 304.1 434.1 Z"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -0.025 -0.0005)">
            <path
              style={{
                stroke: `none`,
                strokeWidth: 1,
                strokeDasharray: `none`,
                strokeLinecap: `butt`,
                strokeDashoffset: 0,
                strokeLinejoin: `miter`,
                strokeMiterlimit: 4,
                fill: `rgb(134,101,39)`,
                fillRule: `nonzero`,
                opacity: 1,
              }}
              transform=" translate(-304.1, -364.5995)"
              d="M 303.7 289.6 a 75 75 0 1 0 75.4 75 C 379.1 323.2 345.1 289.6 303.7 289.6 Z m 0.4 147.1 a 72.1 72.1 0 0 1 -0.4 -144.2 c 39.8 0 72.5 32.3 72.5 72.1 A 72.1 72.1 0 0 1 304.1 436.7 Z"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
    <div className={cx(`flex flex-col justify-center items-start`)}>
      <span className={cx(`text-4xl font-bold text-primary-800`, montserrat)}>
        Virtuoso
      </span>
      <span className="text-sm -mt-1 text-black/90 uppercase">landscaping</span>
    </div>
  </div>
);

export default Logo;

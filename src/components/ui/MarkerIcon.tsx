import React from "react";

export default function MarkerIcon() {
  return (
    <svg width="38" height="36">
      <defs>
        <filter
          x="-17.2%"
          y="-16.4%"
          width="134.4%"
          height="156.8%"
          filterUnits="objectBoundingBox"
          id="a"
        >
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy="5"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <path
          d="m794.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 824 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z"
          id="b"
        />
      </defs>
      <g transform="matrix(1 0 0 -1 -789 156)" fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#a)" />
        <path
          stroke="#000"
          strokeWidth="3"
          d="M807.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 819 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 790.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

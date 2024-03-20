const Pin = () => {
  return (
    <div className="absolute w-[60px] h-[60px] top-[23rem] z-50">
      <svg
        // width="85"
        // height="106"
        viewBox="0 0 85 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_81_67)">
          <path
            d="M77 42.4498C77 61.4758 65.7875 71.3014 43.3625 98C21.3688 71.3014 8 61.4758 8 42.4498C8 23.4237 23.4462 8 42.5 8C61.5538 8 77 23.4237 77 42.4498Z"
            fill="white"
          />
          <path
            d="M74.5 42.4498C74.5 51.3418 71.9234 58.0704 66.5291 65.9334C62.6379 71.6055 57.392 77.7214 50.6597 85.5704C48.4014 88.2032 45.9758 91.0311 43.378 94.1026C39.1978 89.0956 35.3489 84.6969 31.882 80.7348C31.394 80.1771 30.9136 79.6281 30.4409 79.0872C26.0866 74.105 22.4168 69.8498 19.438 65.8536C13.5351 57.9345 10.5 51.2375 10.5 42.4498C10.5 24.8078 24.8235 10.5 42.5 10.5C60.1765 10.5 74.5 24.8078 74.5 42.4498Z"
            stroke="white"
            strokeWidth="5"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_81_67"
            x="0"
            y="0"
            width="85"
            height="106"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_81_67"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_81_67"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Pin;

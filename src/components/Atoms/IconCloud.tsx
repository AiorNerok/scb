type Props = {
  color?: string;
};

export const IconCloud = ({ color }: Props) => {
  return (
    <svg
      width="53"
      height="44"
      viewBox="0 0 53 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_85_1328)">
        <path
          d="M48.3544 22.2115C47.7175 20.1188 46.6642 18.2937 45.2679 16.8093C43.4797 14.7896 41.1037 13.4025 38.4336 12.7941C37.0864 6.71054 33.314 2.33034 27.9495 0.699939C22.1195 -1.10081 15.3588 0.651271 11.121 5.0558C7.39768 8.92497 6.1729 14.2542 7.61814 19.9241C2.71901 21.1165 0.293947 25.1803 0.0244956 29.0495C-2.28133e-08 29.3172 0 29.5605 0 29.8039C0 34.3788 3.01296 39.5133 9.72476 40H35.1512C38.6296 40 41.961 38.7103 44.5086 36.3985C48.5013 32.9187 49.9711 27.4921 48.3544 22.2115Z"
          fill={color}
        />
        <path
          d="M47.876 22.3571L47.8763 22.3579C49.4385 27.4604 48.0159 32.6785 44.18 36.0216L44.18 36.0215L44.1726 36.0282C41.7173 38.2563 38.5058 39.5 35.1512 39.5H9.74305C3.35446 39.0281 0.5 34.165 0.5 29.8039C0.5 29.5584 0.500292 29.3368 0.522415 29.0951L0.522533 29.0951L0.523288 29.0843C0.780652 25.3886 3.08838 21.5412 7.73638 20.4099L8.22749 20.2904L8.10265 19.8006C6.69466 14.2769 7.89256 9.13179 11.4813 5.4025L11.4813 5.40246C15.5886 1.13358 22.153 -0.567151 27.8019 1.17767L27.8041 1.17833C32.9719 2.74894 36.6315 6.96894 37.9455 12.9022L38.0139 13.2113L38.3226 13.2816C40.8938 13.8675 43.1768 15.2017 44.8936 17.1408L44.8985 17.1464L44.9037 17.1519C46.245 18.5778 47.2605 20.3347 47.876 22.3571Z"
          stroke="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_85_1328"
          x="0"
          y="0"
          width="53"
          height="44"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_85_1328"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_85_1328"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

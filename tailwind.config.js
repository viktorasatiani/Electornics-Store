/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#bfbfbf",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        helpCenter: "url(/src/assets/images/helpCenterImage.webp)",
        heroImg1: "url(/src/assets/images/image1.webp)",
        heroImg2: "url(/src/assets/images/image2.webp)",
        heroImg3: "url(/src/assets/images/image3.webp)",
        mobileIMG: "url(/src/assets/images/mobileIMG.webp)",
        headphone: "url(/src/assets/images/HeadphoneIMG.webp)",
        computers: "url(/src/assets/images/computers.webp)",
      },
      keyframes: {
        bgImgChange: {
          "0%, 30%": { backgroundImage: "url(/src/assets/images/image1.webp)" },
          "30%, 60%": {
            backgroundImage: "url(/src/assets/images/image2.webp)",
          },
          "60%, 90%": {
            backgroundImage: "url(/src/assets/images/image3.webp)",
          },
          "90%, 100%": {
            backgroundImage: "url(/src/assets/images/image1.webp)",
          },
        },
      },
      animation: {
        bgImgChange: "bgImgChange 15s linear infinite",
      },
    },
  },
  plugins: [],
};

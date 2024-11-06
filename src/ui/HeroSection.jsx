import LinkButton from "./LinkButton";

function HeroSection() {
  return (
    <div className="animate-bgImgChange flex h-full bg-heroImg1 bg-cover py-24">
      <div className="ml-60 flex-shrink">
        <span className="bg-red-600 px-2 py-[1px] text-xl text-white">
          Best Prices
        </span>
        <p className="mt-5 text-6xl font-semibold leading-[4rem] tracking-wide">
          Incredible Prices <br /> on All Your <br /> Favorite Items
        </p>
        <p className="my-6 text-xl font-light">
          Get more for less on selected brands
        </p>
        <LinkButton color="violet" size="large">
          Shop Now
        </LinkButton>
      </div>
    </div>
  );
}

export default HeroSection;

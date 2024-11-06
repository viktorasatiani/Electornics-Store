import LinkButton from "./LinkButton";

function ComputersShop() {
  return (
    <div className="m-auto grid h-auto grid-cols-[2.5fr_1.5fr] gap-4 bg-white 2xl:container">
      <div
        className="bg-computers bg-cover"
        style={{ clipPath: "polygon(0px 0px, 80% 0px, 100% 100%, 0% 100%)" }}
      ></div>
      <div className="w-full">
        <div className="flex flex-col gap-8 p-32 text-black">
          <h2 className="text-4xl font-medium">
            Save up to
            <span className="text-7xl">$150</span>
          </h2>
          <p className="text-3xl font-semibold">
            on selected laptop <br /> & tablets brands
          </p>
          <p className="text-base font-light">Terms and conditions apply</p>
          <LinkButton to={"/computers"} color="violet" size="large">
            Shop
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default ComputersShop;

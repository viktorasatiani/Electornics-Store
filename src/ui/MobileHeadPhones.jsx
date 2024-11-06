import LinkButton from "./LinkButton";

function MobileHeadPhones() {
  return (
    <div className="grid grid-cols-2 gap-10 px-20 pt-10 text-white">
      <div className="bg-mobileIMG bg-cover pl-32 pt-32">
        <p className="mb-2 text-xl">Holiday Deals</p>
        <p className="mb-3 text-5xl font-semibold leading-[3.5rem] tracking-wide">
          Up to <br /> 30% Off
        </p>
        <p className="mb-6 text-xl">Selected Smartphone Brands</p>
        <LinkButton color="red" size="large" to="/mobile">
          Shop
        </LinkButton>
      </div>
      <div className="bg-headphone bg-cover bg-[right_1px] pl-28 pt-32">
        <p className="mb-2 text-xl">Holiday Deals</p>
        <p className="mb-3 text-5xl font-semibold leading-[3.5rem] tracking-wide">
          Up to <br /> 30% Off
        </p>
        <p className="mb-6 text-xl">Selected Smartphone Brands</p>
        <LinkButton color="red" size="large" to="/headphones">
          Shop
        </LinkButton>
      </div>
    </div>
  );
}

export default MobileHeadPhones;

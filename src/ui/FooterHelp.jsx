import LinkButton from "./LinkButton";

function FooterHelp() {
  return (
    <div className="grid h-auto grid-cols-[2fr_3fr] gap-4 bg-black">
      <div className="w-full">
        <div className="flex flex-col gap-8 p-32 text-white">
          <h2 className="text-4xl font-medium">
            Need Help? Check <br /> Out Our Help Center
          </h2>
          <p className="text-base">We can provide you 24/7 Help Service</p>
          <LinkButton to={"/help"} color="white" size="medium">
            Go to Help Center
          </LinkButton>
        </div>
      </div>
      <div
        className="bg-helpCenter bg-cover"
        style={{ clipPath: "polygon(0% 0px, 100% 0%, 100% 100%, 15% 100%)" }}
      ></div>
    </div>
  );
}

export default FooterHelp;

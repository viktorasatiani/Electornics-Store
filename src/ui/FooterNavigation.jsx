import FooterShopNav from "./FooterShopNav";
import PolicyNav from "./PolicyNav";
import StoreLocation from "./StoreLocation";
import SupportNav from "./SupportNav";

function FooterNavigation() {
  return (
    <div className="grid grid-cols-4 border-b-2 border-b-primaryColor px-32 py-16">
      <StoreLocation />
      <FooterShopNav />
      <SupportNav />
      <PolicyNav />
    </div>
  );
}

export default FooterNavigation;

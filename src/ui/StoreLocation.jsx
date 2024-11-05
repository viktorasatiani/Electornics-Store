import SocialNetBox from "./SocialNetBox";

function StoreLocation() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-xl font-semibold">Store Location</h2>
      <address className="flex flex-col gap-1 font-light">
        <p>500 Terry Fancine Street</p>
        <p>San Francisco, CA 94158</p>
        <p>info@mysite.com</p>
        <p>123-456-7890</p>
      </address>
      <SocialNetBox />
    </div>
  );
}

export default StoreLocation;

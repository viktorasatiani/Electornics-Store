import NavigationSecondary from "./NavigationSecondary";

function SupportNav() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-xl font-semibold">Customer Support</h2>
      <NavigationSecondary footer={true} />
    </div>
  );
}

export default SupportNav;

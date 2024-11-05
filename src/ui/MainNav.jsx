import MainNavLink from "./MainNavLink";

function MainNav({ main }) {
  const productsCategory = [
    "Shop All",
    "Computers",
    "Table",
    "Drones & Camreas",
    "Audio",
    "Mobile",
    "T.V & Home Cinema",
    "Wearable Tech",
    "Sale",
  ];
  const condition = main
    ? "justify-stretch bg-primaryColor items-center pl-12 gap-7 h-12"
    : "flex-col gap-3";
  return (
    <ul className={`flex ${condition} `}>
      {productsCategory.map((category) => (
        <MainNavLink to={`${category.toLocaleLowerCase()} `} key={category}>
          {category}
        </MainNavLink>
      ))}
    </ul>
  );
}

export default MainNav;

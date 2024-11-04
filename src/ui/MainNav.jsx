import MainNavLink from "./MainNavLink";

function MainNav() {
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
  return (
    <ul className="bg-primaryColor flex h-12 items-center justify-stretch gap-7 pl-12">
      {productsCategory.map((category) => (
        <MainNavLink to={`${category.toLocaleLowerCase()} `} key={category}>
          {category}
        </MainNavLink>
      ))}
    </ul>
  );
}

export default MainNav;

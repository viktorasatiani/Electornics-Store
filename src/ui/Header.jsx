import HeaderNavSecondary from "./HeaderNavSecondary";
import InlineSearchNav from "./InlineSearchNav";
import MainNav from "./MainNav";

function Header() {
  return (
    <header className="grid grid-rows-3 font-nunito">
      <HeaderNavSecondary />
      <InlineSearchNav />
      <MainNav main={true} />
    </header>
  );
}

export default Header;

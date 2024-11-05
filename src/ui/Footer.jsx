import FooterHelp from "./FooterHelp";
import FooterNavigation from "./FooterNavigation";
import FooterPaymentsLogos from "./FooterPaymentsLogos";

function Footer() {
  return (
    <footer className="grid grid-rows-[3fr_3fr_1fr]">
      <FooterHelp />
      <FooterNavigation />
      <FooterPaymentsLogos />
    </footer>
  );
}

export default Footer;

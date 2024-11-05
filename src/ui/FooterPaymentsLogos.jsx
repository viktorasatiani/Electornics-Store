import Visa from "../assets/logos/Visa.webp";
import masterCard from "../assets/logos/brand-mastercard@3x.webp";
import amex from "../assets/logos/brand-amex@3x.webp";
import chinaunionpay from "../assets/logos/brand-chinaunionpay@3x.webp";
import jcb from "../assets/logos/brand-jcb@3x.webp";
import Diners from "../assets/logos/Diners.webp";
import Discover from "../assets/logos/Discover.webp";
import PayPal from "../assets/logos/PayPal.webp";
function FooterPaymentsLogos() {
  const imgPaths = [
    Visa,
    masterCard,
    amex,
    chinaunionpay,
    jcb,
    Diners,
    Discover,
    PayPal,
  ];
  return (
    <div>
      <div className="flex flex-col gap-10">
        <p className="text-center font-light">
          We accept the following paying methods
        </p>
        <div className="flex items-center justify-center gap-20">
          {imgPaths.map((imgpath) => (
            <img src={imgpath} alt={imgpath} key={imgpath} className="h-8" />
          ))}
        </div>
        <p className="text-center">&copy; By Viktor Asatiani</p>
      </div>
    </div>
  );
}

export default FooterPaymentsLogos;

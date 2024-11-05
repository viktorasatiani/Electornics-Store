import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function SocialNetBox() {
  return (
    <div className="flex gap-4">
      <FaFacebookF size={22} />
      <FaYoutube size={25} />
      <FaInstagram size={25} />
      <FaSquareXTwitter size={24} />
    </div>
  );
}

export default SocialNetBox;

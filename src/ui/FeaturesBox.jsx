import { MdAccessTime, MdDeliveryDining } from "react-icons/md";
import FeatureItem from "./FeatureItem";
import { BsBoxSeam } from "react-icons/bs";
import { IoReceiptOutline } from "react-icons/io5";

const features = [
  {
    icon: <MdDeliveryDining size={60} />,
    text: "Curb-side pickup",
  },
  {
    icon: <BsBoxSeam size={60} />,
    text: "Free shipping on orders over $50",
  },
  {
    icon: <IoReceiptOutline size={60} />,
    text: "Low prices guaranteed",
  },
  {
    icon: <MdAccessTime size={60} />,
    text: "Available to you 24/7 ",
  },
];

function FeaturesBox() {
  return (
    <div className="m-auto my-10 grid grid-cols-4 bg-white py-20 2xl:container">
      {features.map((feature) => (
        <FeatureItem
          icon={feature.icon}
          text={feature.text}
          key={feature.text}
        />
      ))}
    </div>
  );
}

export default FeaturesBox;

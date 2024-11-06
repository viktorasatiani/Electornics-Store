import CategoryItem from "./CategoryItem";

function ShopByCategory() {
  const categories = [
    {
      text: "Computers",
      to: "/computers",
      src: "/src/assets/images/category/computer.webp",
    },
    {
      text: "Mobile",
      to: "/mobile",
      src: "/src/assets/images/category/phone.webp",
    },
    {
      text: "Drones & Cameras",
      to: "/drones-cameras",
      src: "/src/assets/images/category/drone.webp",
    },
    {
      text: "Sale",
      to: "/sale",
      src: "/src/assets/images/category/sales.webp",
    },
    {
      text: "Tablets",
      to: "/tablets",
      src: "/src/assets/images/category/tablets.webp",
    },
    {
      text: "Best Sellers",
      to: "/bestsellers",
      src: "/src/assets/images/category/bestsellers.webp",
    },
    {
      text: "T.V & Home Cinema",
      to: "/tv-cinema",
      src: "/src/assets/images/category/tv.webp",
    },
    {
      text: "Wearable Tech",
      to: "/wearable",
      src: "/src/assets/images/category/watches.webp",
    },
    {
      text: "Speakers",
      to: "/speakers",
      src: "/src/assets/images/category/speakers.webp",
    },
    {
      text: "Headphones",
      to: "/headphones",
      src: "/src/assets/images/category/headphones.webp",
    },
  ];
  return (
    <div className="m-auto mb-16 grid grid-cols-5 grid-rows-2 content-center gap-y-10 bg-white py-12 2xl:container">
      {categories.map((category) => (
        <CategoryItem
          text={category.text}
          to={category.to}
          src={category.src}
          key={category.text}
        />
      ))}
    </div>
  );
}

export default ShopByCategory;

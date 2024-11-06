function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center justify-center gap-4">
      {icon}

      <p className="font-semibold">{text}</p>
    </div>
  );
}

export default FeatureItem;

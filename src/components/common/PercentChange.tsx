const PercentageChange: React.FC<{
  value: number;
  direction: "up" | "down";
}> = ({ value, direction }) => {
  const positive = direction === "up";
  return (
    <div
      className={`flex items-center gap-1 font-medium ${
        positive ? " text-[#2EB200]" : "text-[#FF6154]"
      }`}   
    >
      <span className="text-base">{positive ? "▲" : "▼"}</span>
      {value}%
    </div>
  );
};

export default PercentageChange;
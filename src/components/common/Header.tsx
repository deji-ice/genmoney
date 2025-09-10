import { ArrowRight } from "lucide-react";

type HeaderProps = {
  title: string;
  icon?: boolean;
};

const Header = ({ title, icon = true }: HeaderProps) => {
  return (
    <header className="flex items-center font-family-open-sauce justify-between mb-6 px-6">
      <h2 className="text-2xl font-semibold">{title}</h2>

      {icon && (
        <ArrowRight role="button" className="font-light text-[#2B2829]" />
      )}
    </header>
  );
};

export default Header;

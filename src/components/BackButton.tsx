import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  label?: string;
  onClick?: () => void;
}

function BackButton({ label = "Back", onClick }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      className="w-fit rounded-lg bg-green-500 px-5 py-2 text-white hover:cursor-pointer hover:bg-green-500/80"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default BackButton;

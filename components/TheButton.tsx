export default function TheButton({
  onClick,
  children,
  className,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  const defaultButtonType: "button" | "submit" | "reset" = "button";

  return (
    <button type={defaultButtonType} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

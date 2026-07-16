export default function TheButton({ children }: { children: React.ReactNode }) {
  const defaultButtonType: "button" | "submit" | "reset" = "button";

  return <button type={defaultButtonType}>{children}</button>;
}

interface IconButtonProps {
  alt: string;
  iconPath: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({
  iconPath,
  onClick,
  alt,
}: IconButtonProps) {
  return (
    <>
      <button onClick={onClick}>
        <img src={iconPath} alt={alt} />
      </button>
    </>
  );
}

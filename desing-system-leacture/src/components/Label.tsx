interface ILableProps {
  htmlFor?: string;
  children: string;
}

export default function Label({ htmlFor, children }: ILableProps) {
  return (
    <>
      <label className="text-sm text-primary" htmlFor={htmlFor}>
        {children}
      </label>
    </>
  );
}

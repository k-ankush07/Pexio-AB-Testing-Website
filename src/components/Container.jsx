export default function Container({
  as: Tag = "div",
  children,
  className = "",
  ...rest
}) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1440px] px-[20px] lg:px-5 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
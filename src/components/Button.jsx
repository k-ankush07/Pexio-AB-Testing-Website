const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="transition-transform duration-200 group-hover:translate-x-0.5"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const base =
  "group inline-flex h-[50px] items-center justify-center gap-[5px] " +
  "rounded-lg border-0 bg-[#703CE1] px-10 py-4 " +
  "font-medium text-sm leading-[18px] text-white no-underline whitespace-nowrap " +
  "shadow-[0_1px_2px_rgba(0,0,0,0.05)] cursor-pointer " +
  "transition-all duration-200 " +
  "hover:bg-[#5F2FC7] hover:shadow-[0_4px_12px_rgba(112,60,225,0.35)] " +
  "active:translate-y-px " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#703CE1] " +
  "disabled:cursor-not-allowed disabled:opacity-60";

export default function PrimaryActionButton({
  children = "Start Experiments",
  href,
  onClick,
  type = "button",
  showArrow = true,
  className = "",
  ...rest
}) {
  const classes = `${base} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
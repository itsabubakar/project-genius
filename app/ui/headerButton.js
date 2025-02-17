import Link from "next/link";

export default function Button({ children, classname, href }) {
  return (
    <Link
      href={href}
      className={`text-center px-[20px] py-[12px] w-[127px]
            text-greyscale_surface_subtle bg-primary rounded-full text[18px]
            hover:bg-primary_hover  active:bg-primary_pressed transform active:scale-95 transition duration-500 ${classname}`}
    >
      {children}
    </Link>
  );
}

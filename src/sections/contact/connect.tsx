import {
  contactLinks,
  ContactUsTitleSecond,
  ContactUsTitle,
  ContactUsDescription,
} from "@/constants/contact-us";
import Link from "next/link";

export const GetConnect = () => {
  return (
    <section className="w-full">
      <div
        className="rounded-xl md:rounded-2xl p-12 flex max-md:flex-col justify-between items-center"
        style={{
          background: "linear-gradient(265deg, #4844BE 0.4%, #211F58 92.2%)",
        }}
      >
        <div className="w-7/10">
          <h2 className="text-6xl font-light text-white leading-tight">
            {ContactUsTitle}
          </h2>
          <h2 className="text-6xl font-bold text-violet-500 leading-tight mb-3">
            {ContactUsTitleSecond}
          </h2>
          <p className="text-lg w-3/5 text-justify">{ContactUsDescription}</p>
        </div>

        <div className="flex flex-col gap-2">
          {contactLinks.map(({ icon, text, href }) => (
            <Link key={text} href={href} className="flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                {icon}
              </div>
              <span className="text-white text-lg">{text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

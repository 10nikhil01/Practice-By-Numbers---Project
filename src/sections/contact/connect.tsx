import {
  contactLinks,
  ContactUsTitleSecond,
  ContactUsTitle,
  ContactUsDescription,
} from "@/constants/contact-us";
import Link from "next/link";

export const GetConnect = () => {
  return (
    <section className="w-full px-4">
      <div
        className="rounded-xl md:rounded-2xl p-4 md:p-12 flex max-lg:flex-col justify-between items-center"
        style={{
          background: "linear-gradient(265deg, #4844BE 0.4%, #211F58 92.2%)",
        }}
      >
        <div className="w-full mb-8 lg:mb-0">
          <h2 className="md:text-6xl text-4xl font-light text-white leading-tight">
            {ContactUsTitle}
          </h2>
          <h2 className="md:text-6xl text-4xl font-bold text-violet-500 leading-tight mb-3">
            {ContactUsTitleSecond}
          </h2>
          <p className="text-lg w-fit lg:w-3/5">{ContactUsDescription}</p>
        </div>

        <div className="max-lg:w-full flex flex-col gap-1">
          {contactLinks.map(({ icon, text, href }) => (
            <Link
              key={text}
              href={href}
              className="flex items-center mb-2 gap-2"
            >
              {icon}
              <span className="text-white text-base sm:text-lg ml-2">
                {text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

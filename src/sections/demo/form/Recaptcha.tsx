import Image from "next/image";

export const ReCaptcha = () => (
  <div className="flex items-center w-fit overflow-hidden bg-foreground rounded-md">
    <div className="bg-blue-600 px-4 py-3">
      <span className="text-white text-xs font-medium">
        protected by <strong>reCAPTCHA</strong>
      </span>
    </div>
    <div className="px-4 flex items-center justify-center w-14">
      <Image
        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
        alt="reCAPTCHA"
        width={32}
        height={32}
        className="w-8 h-8 object-contain"
      />
    </div>
  </div>
);

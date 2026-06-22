import type { ReactNode } from "react";

type Props = {
  hero: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
};

export const BlogPostContent = ({ hero, sidebar, children }: Props) => {
  return (
    <>
      {/* 1. Full width hero */}
      {hero}

      {/* 2. Content + Sidebar */}
      <div className="max-w-7xl border-amber-700 border-2 gap-12 mx-4 py-12 mt-4 grid lg:grid-cols-[1fr_300px] items-start">
        {/* Main content */}
        <div className="">
          {children}
          <div className="relative min-h-[300dvh] wrap-break-word text-wrap">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            veniam explicabo qui esse minima, alias tenetur voluptatem
            doloremque natus rem repellat, quia nostrum libero eveniet deleniti.
            Omnis tempora saepe quod, tempore harum, nostrum aut at perferendis
            nesciunt beatae ut hic fugit nulla doloribus, accusantium quis nihil
            quibusdam inventore quas culpa accusamus iure? Eveniet molestiae id
            harum delectus eaque accusamus excepturi ea aut libero, voluptates,
            exercitationem placeat sunt rerum voluptatum deleniti, nam error
            ullam unde molestias. Laboriosam dolorum nihil quisquam eos facere
            eveniet aperiam quas possimus voluptatum tenetur rerum sint nulla
            beatae, distinctio doloremque perspiciatis eius excepturi optio,
            libero consequatur, recusandae eum ipsam. Ratione reiciendis magnam,
            dolores officia accusamus deleniti, asperiores earum assumenda
            pariatur harum incidunt voluptas dolorem neque commodi mollitia
            distinctio. Recusandae tenetur cum at fuga dolorum, officiis nam
            temporibus hic, optio repellendus tempore molestias aspernatur
            explicabo consequuntur eum. Repellat, eaque! Quae harum doloremque
            ipsa, sequi quam obcaecati commodi nisi facere incidunt aperiam
            porro dolorem assumenda officiis repudiandae numquam id ut, fuga
            perspiciatis est minus vel debitis praesentium dignissimos
            recusandae? Sit nostrum debitis voluptates placeat minus dolorem
            illo voluptatibus similique id voluptas unde atque quis, consequatur
            iure? Exercitationem minus minima sunt quidem ut consequatur itaque
            iste tempore! Ipsam, omnis. Quasi. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Aliquid eum, incidunt cupiditate
            possimus voluptatibus dolore officiis a libero consectetur! Voluptas
            aliquam dolore necessitatibus, obcaecati reiciendis illo, unde ut at
            voluptate dolorum nulla assumenda provident nam. Nulla deleniti
            suscipit fuga incidunt accusamus nobis natus, dolor ratione voluptas
            tenetur, sit nostrum? Similique!
          </div>
        </div>

        {/* Sidebar slot */}
        <aside className="w-72 shrink-0 sticky top-28 hidden lg:block">
          {sidebar}
        </aside>
      </div>
      <div className="lg:hidden">{sidebar}</div>
    </>
  );
};

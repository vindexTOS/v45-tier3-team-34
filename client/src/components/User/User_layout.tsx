import React from "react";

const User_layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const style = {
    main: `flex items-center justify-center mt-2 md:mt-8 `,
    section: `bg-gray-100 dark:bg-slate-900 flex flex-col rounded-[16px] w-full `,
  };
  return (
    <main className={style.main}>
      <section className={style.section}>
        {children}
      </section>
    </main>
  );
};

export default User_layout;

/* eslint-disable react/prop-types */

export const AuthLayouts = ({ children }) => {
 return (
  <main>
   <section className="h-screen flex justify-center items-center w-full gap-20">
    <div className="px-5">{children}</div>
    <div className="hidden lg:block">
     <img src="/images/Rectangle 8.png" alt="" className="w-full" />
    </div>
   </section>
  </main>
 );
};

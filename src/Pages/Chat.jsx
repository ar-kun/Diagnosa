import { SectionChat } from "../Components/Fragments/SectionChat";
import { useState } from "react";
import { FooterLayout } from "../Components/Layouts/FooterLayout";
export const Chat = () => {
  const [toogleHidden, setToogleHidden] = useState(false);
  const [toggleDarkMode, setToggleDarkMode] = useState("fa-solid fa-moon");
  const [darkMode, setDarkMode] = useState(false);

  const handleToogle = () => {
    setToogleHidden(!toogleHidden);
  };

  const handleDarkMode = () => {
    const html = document.querySelector("html");
    if (darkMode) {
      setToggleDarkMode("fa-solid fa-moon");
      html.classList.remove("dark");
      return setDarkMode(!darkMode);
    } else {
      setToggleDarkMode("fa-solid fa-sun");
      html.classList.add("dark");
      return setDarkMode(!darkMode);
    }
  };
  return (
    <>
      <main className="flex px-32 gap-10">
        <SectionChat />
      </main>
      <footer>
        <FooterLayout
          toogleHidden={toogleHidden}
          handleToogle={handleToogle}
          handleDarkMode={handleDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </footer>
    </>
  );
};

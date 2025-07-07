import { Outlet } from "react-router-dom";
import Contact from "../components/Contact";
import NavbarCom from "../components/NavbarCom";

let url = [
    {
      id: 1,
      nameSite: "Github",
      linkSite: "https://github.com/rafifadhlu",
    },
    {
      id: 2,
      nameSite: "Instagram",
      linkSite: "https://instagram.com/rapi.fdr",
    },
    {
      id: 3,
      nameSite: "Discord",
      linkSite: "https://discordapp.com/users/0217",
    },
  ];

function Layout() {
  document.title = "Portofolio";

  return (
    <>
      <NavbarCom />
      <main style={{ height: "100%" }}>
        <Outlet />
      </main>
      <Contact link={url}/>
    </>
  );
}

export default Layout;

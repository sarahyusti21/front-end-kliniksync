import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import Navbar from "../../components/navbar";
import logo from "../../assets/Logo.svg";
import { BiSolidDashboard } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import Logout from "../../components/logout";
import UserModal from "../../components/userModal.";
import { RiAdminFill } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import {AdminService , Employes }from "../../components/admin/";


const Admin = () => {
  const navigate = useNavigate();
  const [cookie] = useCookies(["role"]);
  const [page, setPage] = useState("showEmpoye");

  useEffect(() => {
    if (cookie.role !== "Admin") {
      navigate(`/${cookie.role}`);
    }
  }, []);

  const thisPage = () => {
    if (page === "showEmpoye") {
      return <Employes />;
    } else if (page === "addClinic") {
      return <AdminService />;
    }else if(page === "addAdmin"){
      return <AddAdmin/>
    }
  };
  return (
    <>
      <div className="w-full h-screen overflow-hidden flex text flex-row">
        <aside className="w-1/6 h-full z-20 bg-2 flex flex-col">
          <figure className="w-full h-28 -mt-5  flex items-center justify-center">
            <img src={logo} alt="kliniksync" className="w-2/3 h-fit" />
          </figure>
          <ul className="w-full h-fit flex flex-col mt-5  list-none">
            <li
              className={`w-full gap-2   px-4 py-4 flex flex-row items-center hover:bg-violet-500 hover:text-white cursor-pointer ${
                page === "showEmpoye" ? "bg-violet-800 text-white" : ""
              }`}
              onClick={() => setPage("showEmpoye")}
            >
              <BiSolidDashboard className="text-xl" />
              <button className="w-full h-full text-sm tracking-wider text-left">Dashboard</button>
            </li>
            <li
              className={`w-full gap-2  px-4 py-4 flex flex-row items-center cursor-pointer hover:bg-violet-500 hover:text-white ${
                page === "addClinic" ? "bg-violet-800 text-white" : ""
              }`}
              onClick={() => setPage("addClinic")}
            >
              <GrMoney  className="text-xl" />
              <button className="w-full h-full text-sm tracking-wider text-left">Kelola Layanan</button>
            </li>
            <li
              className={`w-full gap-2  px-4 py-4 flex flex-row items-center cursor-pointer hover:bg-violet-500 hover:text-white ${
                page === "addAdmin" ? "bg-violet-800 text-white" : ""
              }`}
              onClick={() => setPage("addAdmin")}
            >
              <RiAdminFill  className="text-xl" />
              <button className="w-full text-sm tracking-wider h-full text-left">Profile</button>
            </li>
            <li
              className="w-full gap-2  px-4 py-4 flex flex-row items-center hover:bg-violet-500 hover:text-white cursor-pointer "
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <IoLogOutOutline className="text-xl" />
              <button className="w-full h-full text-sm text-left "> Logout</button>
            </li>
          </ul>
        </aside>
        <div className="w-5/6 h-full pt-16 xl:pt-20 2xl:pt-28 flex flex-col">
          {thisPage()}
        </div>
      </div>
      <Navbar />
      <Logout />
      <UserModal />
    </>
  );
};

export default Admin;

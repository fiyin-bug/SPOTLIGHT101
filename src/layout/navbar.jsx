import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useClickAway } from "react-use";
import Logo from "../assets/icons/spot.svg";
import { Routes } from "../Links/routes";

const Navbar = () => {
  const ref = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useClickAway(ref, () => setIsNavOpen(false));

  return (
    <div className="sticky top-0 z-50 bg-black">
      <div className="md:h-18 mx-auto flex h-14 w-full max-w-[1500px] items-center justify-between px-4 py-4 text-white md:px-6 md:py-6 lg:h-14 lg:px-8 lg:py-8">
        <div className="flex">
          <img
            src={Logo}
            alt="Company Logo"
            className="ml-4 h-16 md:h-20 lg:ml-8 lg:h-28"
          />
        </div>
        <ul className="mr-5 hidden gap-14 font-[Lato] text-sm lg:flex lg:items-center">
          {Routes.map((route, index) => {
            const { href, title } = route;
            return (
              <li key={index} className="flex flex-col items-center">
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#c5ac5a]" : "text-white"
                    } flex flex-col items-center text-lg transition-all hover:text-[#c5ac5a]`
                  }
                >
                  {({ isActive }) =>
                    isActive ? (
                      <>
                        {title}

                        <div className="h-[3px] w-8 rounded-md bg-[#c5ac5a]" />
                      </>
                    ) : (
                      title
                    )
                  }
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div ref={ref} className="z-50 lg:hidden">
          <Hamburger toggled={isNavOpen} size={20} color="#c5ac5a" toggle={setIsNavOpen} />

          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.2 }}
                className="shadow-4xl fixed right-0 top-[3.5rem] w-full border-l border-l-white/20 bg-black p-5 pt-5"
              >
                <ul className="font-Montserrat grid gap-1">
                  {Routes.map((route, index) => {
                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1,
                        }}
                        key={index}
                        className="w-full"
                      >
                        <Link
                          to={route.href}
                          onClick={() => setIsNavOpen((prev) => !prev)}
                          className="flex w-full items-center justify-between rounded-xl p-2 hover:bg-primary"
                        >
                          <span className="flex gap-1 text-lg text-primary-dark hover:text-[#c5ac5a]">
                            {route.title}
                          </span>
                        </Link>

                        {index !== Routes.length - 1 && (
                          <hr className="my-2 border-[#c5ac5a] border-2" />
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// import { Plane } from "lucide-react";

// const Navbar = () => {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
//       <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">

//         {/* Logo */}
//         <div className="flex items-center gap-2.5">
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
//             <Plane size={22} strokeWidth={2.2} />
//           </div>

//           <div>
//             <h1 className="text-xl font-bold tracking-tight text-slate-900">
//               Fly<span className="text-blue-600">High</span>
//             </h1>
//             <p className="hidden text-[10px] font-medium tracking-wider text-slate-500 sm:block">
//               FLIGHT SEAT SELECTION
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-3">
//           <div className="hidden items-center gap-2 rounded-full bg-blue-50 px-3 py-2 sm:flex">
//             <span className="h-2 w-2 rounded-full bg-green-500" />
//             <span className="text-xs font-medium text-slate-600">
//               Seat Selection
//             </span>
//           </div>

//           <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
//             AG
//           </div>
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Navbar;




import { Moon, Plane, Sun } from "lucide-react";
import user from '../assets/user.jpg';

const Navbar = ({ darkMode, setDarkMode }) => {

  // Theme Styles
  const theme = {
    navbar: darkMode
      ? "border-slate-800 bg-slate-900"
      : "border-slate-200 bg-white",

    logoBg: darkMode
      ? "bg-emerald-500 text-white"
      : "bg-emerald-600 text-white",

    heading: darkMode
      ? "text-slate-100"
      : "text-slate-900",

    accent: darkMode
      ? "text-emerald-400"
      : "text-emerald-600",

    muted: darkMode
      ? "text-slate-400"
      : "text-slate-500",

    statusBg: darkMode
      ? "bg-emerald-950/60"
      : "bg-emerald-50",

    statusText: darkMode
      ? "text-slate-300"
      : "text-slate-600",

    avatar: darkMode
      ? "bg-slate-800 text-slate-200"
      : "bg-slate-100 text-slate-700",
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${theme.navbar}`}
    >
      <div className="mx-auto flex h-22 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2.5">

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg shadow-sm ${theme.logoBg}`}
          >
            <Plane size={22} strokeWidth={2.2} />
          </div>

          <div>
            <h1 className={`text-xl font-bold tracking-tight ${theme.heading}`}>
              Ind<span className={theme.accent}>igo</span>
            </h1>

            <p className={`hidden text-[10px] font-medium tracking-wider sm:block ${theme.muted}`}>
              FLIGHT SEAT SELECTION
            </p>
          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Status */}
          {/* <div
            className={`hidden items-center gap-2 rounded-full px-3 py-2 sm:flex ${theme.statusBg}`}
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />

            <span className={`text-xs font-medium ${theme.statusText}`}>
              Seat Selection
            </span>
          </div> */}



          {/* Profile */}
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${theme.avatar}`}
          >
            <img src={user} alt="icon" className="rounded-full" />
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border transition-all duration-300 ${darkMode
                ? "border-emerald-500/30 bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/60"
                : "border-emerald-200 bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
              }`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            <span
              className={`transition-transform duration-500 ease-in-out ${darkMode ? "rotate-180" : "rotate-0"
                }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </span>
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;

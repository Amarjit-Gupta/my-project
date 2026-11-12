
import { Plane } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <Plane size={22} strokeWidth={2.2} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Fly<span className="text-blue-600">High</span>
            </h1>
            <p className="hidden text-[10px] font-medium tracking-wider text-slate-500 sm:block">
              FLIGHT SEAT SELECTION
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full bg-blue-50 px-3 py-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-slate-600">
              Seat Selection
            </span>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
            AG
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;

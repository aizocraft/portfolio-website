import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#c2d8c4]/5 to-white">
      <Navigation />
      <Outlet />
    </div>
  );
}
import Sidebar from "../_components/Sidebar";

export default function OrganizationLayout({ children }) {
  return (
    <main className="mt-20 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar/>
        </div>
        {children}
      </div>
    </main>
  );
}

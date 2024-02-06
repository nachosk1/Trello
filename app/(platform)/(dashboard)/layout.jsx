import Navbar from "./_components/Navbar";

export default function DashboardLayouts({ children }) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}

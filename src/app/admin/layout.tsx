import NavBar from "@/components/adminNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="p-6">{children}</main>
    </div>
  );
}

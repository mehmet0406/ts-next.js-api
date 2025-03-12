import Navbar from "../components/Navbar";

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div>
   <Navbar title="Detail Page"/>
    <div className="min-h-[calc(100vh-96px)] bg-gradient-to-br from-gray-50 to-blue-100">
    {children}
    </div>
  </div>
  );
}

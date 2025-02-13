import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-white text-lg">Home</Link>
            <Link href="/about" className="text-white text-lg">About Us</Link>
            <Link href="/branches" className="text-white text-lg">Our Branches</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

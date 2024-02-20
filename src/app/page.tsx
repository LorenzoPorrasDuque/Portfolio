import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="/" >
              <p className="text-2xl font-bold">Send Help</p>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/about" >
              <p className="hover:underline">About</p>
            </Link>
            <Link href="/projects" >
              <p className="hover:underline">Projects</p>
            </Link>
            <Link href="/contact" >
              <p className="hover:underline">Contact</p>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center p-12 justify-around">
        <div className="flex flex-col items-center ">
          <h1 className="text-6xl font-bold mg-4 hover:underline ">Hello, I'm Fumo</h1>
          <p className="text-2xl my-5 hover:underline" >I'm a software developer</p>
          <Image src="/images/fumo.jpg" alt="Profile Picture" className="rounded-full " width="200" height="200" />
        </div>
        <div className="flex space-x-4  ">
          <Link href="/about" >
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-4">
              About
            </button>
          </Link>
          <Link href="/projects" >
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-4">
              Projects
            </button>
          </Link>
          <Link href="/contact" >
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-4">
              Contact
            </button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto text-center">
          <p>© No tengo ni la menor idea de como esto arranca</p>
        </div>
      </footer>
    </div>

  );
}

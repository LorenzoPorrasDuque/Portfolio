import Image from "next/image";
import Link from 'next/link';

export default function About() {
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
                <div className="flex flex-col items-center  ">
                    <h1 className="text-6xl font-bold mg-4 hover:underline ">Help</h1>
                    <h2 className="text-4xl font-bold my-5 p-10">About me</h2>
                    <p className="text-xl">Colombian, poor as fuck, Why I am making front bro?</p>

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
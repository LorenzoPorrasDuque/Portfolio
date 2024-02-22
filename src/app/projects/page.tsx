import Image from "next/image";
import Link from "next/link";

export default function Projects() {
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

            <main className="flex min-h-screen flex-col items-center p-10 justify-around">
                <div className="flex items-center flex-col border-solid border-2 border-sky-50 p-4 m-2">
                    <Image src="/images/miku.jpg" alt="Profile Picture" className="" width="300" height="300" />
                    <div className="flex items-center flex-col">
                        <h4 className="p-2"><b>Vocaloid API</b></h4>
                        <p>Little project using Go, Gin and Gorm also using Docker and Docker-compose to deploy the project.</p>

                        <a href="https://github.com/LorenzoPorrasDuque/Vocaloid-CrudApi" target="_blank" rel="noopener noreferrer">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-4">
                                Github
                            </button>
                        </a>


                    </div>
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

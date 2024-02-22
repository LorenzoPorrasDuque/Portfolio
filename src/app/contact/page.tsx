import Link from "next/link";

export default function contact() {
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
                    <h1 className="text-6xl font-bold mg-4  ">Email</h1>
                    <h2 className="text-4xl font-bold my-5 p-10">lorenzo.porras.duque@gmail.com</h2>
                    <a href="https://www.linkedin.com/in/lorenzoporrasduque" className="text-xl font-bold my-5 p-5  hover:bg-blue-500 border border-blue-500 hover:border-transparent rounded my-4">Linkedin</a>
                    
<a href="https://www.linkedin.com/in/lorenzoporrasduque" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Linkedin</a>


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

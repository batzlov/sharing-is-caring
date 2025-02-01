import Image from "next/image";
import { ModeToggle } from "../ui/mode-toggle";

export default function Header() {
    return (
        <header className="w-full p-4 flex justify-between items-center z-10">
            <div className="flex items-center">
                <Image src="/logo.png" alt="App Logo" width={40} height={40} />
            </div>
            <ModeToggle />
        </header>
    );
}

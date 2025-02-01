import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full p-4 flex justify-center items-center z-10">
            <div className="space-x-4">
                <Link href="/privacy" className="text-sm hover:underline">
                    Privacy
                </Link>
                <Link href="/imprint" className="text-sm hover:underline">
                    Imprint
                </Link>
            </div>
        </footer>
    );
}

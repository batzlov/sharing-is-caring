import Image from "next/image";

export default function AuthenticationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="/" className="flex items-center gap-2 font-medium">
                        <Image
                            src="/logo.png"
                            alt="App Logo"
                            width={40}
                            height={40}
                        />
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">{children}</div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <Image
                    width={0}
                    height={0}
                    sizes="100%"
                    src="/bg1.jpg"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.6] dark:grayscale"
                />
            </div>
        </div>
    );
}

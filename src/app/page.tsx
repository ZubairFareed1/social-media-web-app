import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={200}
        height={200}
        priority
      />
    </div>
      );
}

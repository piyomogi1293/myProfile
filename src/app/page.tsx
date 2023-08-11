import Link from 'next/link';
import Image from "next/image";

export default function Page() {
    return(
        <div> 
            <Link href="/goma" className="underline">
            ゴマちゃんについて
            </Link>
            <h1> </h1>
            <Link href="/pi" className="underline">
            Home: ピーちゃんについて
            </Link>
            <h1 className="text-2xl">一番最初</h1>
        </div>
    );
};
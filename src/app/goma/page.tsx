import Link from 'next/link';
import Image from "next/image";

export default function Page() {
    return(
        <div> 
            <h1 className="text-2xl">ゴマちゃんかわいいでしょ？</h1>
            <Image 
            src={"/images/goma.jpg"} 
            alt='ゴマちゃん'
            width="300"
            height="500" />
            <Link href="/" className="underline">
                ホームへ戻る
            </Link>
        </div>
    );
};
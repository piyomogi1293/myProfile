import Link from "next/link";
import Image from "next/image";

const Home = () => {
    return (
        <div>
            <h1>ピーちゃんかわいいね</h1>
            <Image 
            src={"/images/pi.JPG"} 
            alt='ぴーちゃん'
            width="500"
            height="500" />
            <Link href="/" className="underline">
                ホームへ戻る
            </Link>
        </div>
    );
}
export default Home;

import Link from "next/link"
export default function Home() {
  return (
   <>
   <div className="flex w-screen justify-center items-center h-screen">
    <div>
    <Link href="/game">
    <div className="card">
    <h1>Game</h1>
    </div>
    </Link>
    <Link href="/website">
    <div className="card">
    <h1>Website</h1>
    </div>
    </Link>
    <Link href="/translator">
    <div className="card">
    <h1>Translator</h1>
    </div>
    </Link>
    </div>
   </div>
   </>
  )
}

import Link from "next/link";


export default function Header(){
    return(
        <>
            <main>
                <Link href="/">Home</Link>
                <Link href="/create">Create</Link>
            </main>
        </>
    )
}

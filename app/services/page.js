import Link from "next/link";
import Todo from "../component/todos";



export default function Services()
{
    return(
        <>
        <Link href="/posts">Browse Blogs</Link>

        <Todo />
        </>
    )
}
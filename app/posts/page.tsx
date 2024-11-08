import Link from "next/link";

export default async function Blogs(){

    //server side component
const response=await fetch(
    'https://jsonplaceholder.typicode.com/posts',
{
    next: {
        revalidate: 60
    }
}
);
const posts=await response.json();

const blogPosts=posts.map((post)=>{
    return(
          <Link href={`/posts/${post.id}`} style={{width:"30%",padding:"30px",position:"relative",margin:"10px",background:"#5400cc51",borderRadius:"15px"}}>
               <h1 style={{position:"absolute",
                fontSize:"10em",
                zIndex:"-1",
                opacity:"0.6",
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)"}}>{post.id}</h1>
                <h1 style={{marginBottom:"8px"}}>{post.title}</h1>
                <p>{post.body}</p>
        </Link>
    )
})

    return(
        <div style={{width:"100%"}}>
        <h1>our blogs</h1>
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"6rem"}}>
        {/* <p style={{margin:"auto",
            width:"300px",
            height:"100px",
            background:"gray",
            fontSize:"30px",
            verticalAlign:"center",
            textAlign:"center"}}>{todo.title}</p> */}
            
           {blogPosts}
           </div>
        </div>
    )
}
export default async function ShowBlog({ params })
{
    const postId=params.postId
     console.log(postId)
    const response=await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
        next: {
            revalidate: 100
        }
    }
    );
    const blog=await response.json();

    console.log(blog)
   
    return(
        <div>
        <h1>Post Details</h1>
        <div style={{width:"500px",heigh:"400px",margin:"50px auto",background:"#cb5",padding:"20px",borderRadius:"15px"}}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
        
      
        </div>
    )
}
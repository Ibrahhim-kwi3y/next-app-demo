import Link from "next/link";

export const metadata={
    title:"Services"
}
export default function({children})
{
    return(
        <>
        <div>
         <nav style={{width:"100%",
          display:"flex",
          marginTop:"50px",
          color:"white",
          justifyContent:"center"
          ,alignItems:"center",
          background:"black"}}>
          <Link style={{margin:"8px",fontSize:"30px"}} href="/services/fix" >fix</Link>
          <Link style={{margin:"8px",fontSize:"30px"}} href="/services/delivery" >delivery</Link>
          <Link  style={{margin:"8px",fontSize:"30px"}} href="/services/sales">sales</Link>
        </nav>
        </div>
        
        {children}
        </>
    )
}
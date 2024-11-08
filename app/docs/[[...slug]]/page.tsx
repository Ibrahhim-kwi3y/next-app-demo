// import React from "react";

// const Docs = async ({ params }: { params: { slug?: string[] } }) => {
//     if (!params) {
//         // Await params to make sure it's fully loaded before accessing properties
//         await new Promise(resolve => setTimeout(resolve, 0));
//     }

//     if (params.slug?.length === 2) {
//         return (
//             <h1>
//                 Blog For Category {params.slug[0]} for title {params.slug[1]}
//             </h1>
//         );
//     } else if (params.slug?.length === 1) {
//         return <h1>Blog For Category {params.slug[0]}</h1>;
//     } else {
//         return <h1>Blog Home Page</h1>;
//     }
// };

// export default Docs;

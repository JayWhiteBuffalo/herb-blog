import { useSanityClient } from "astro-sanity";

export async function getAllPosts(i){
    const client = useSanityClient()
    const query = '*[_type == "post"]{mainImage,body,title,author[]->{name},slug,_createdAt,categories[]->{title}}'
    const posts = await client.fetch(query)
    // console.log(JSON.stringify(posts[3].categories[0].title))
    // console.log(JSON.stringify(posts[3].categories[1].title))
    // console.log(posts)
    return posts;
}

export async function getAllCategories(){
//     const client = useSanityClient()
//     var postQuery = '*[_type == "post"]{categories[]->{_id, title}}'
//     var categoryQuery = '*[_type == "category"]{_id}'
//     const post = await client.fetch(postQuery)
//     const categories = await client.fetch(categoryQuery)
//     function pattern(input){
//         return /(?:\"_id)(?:\"\s?:\s?\")(.*)(?:\")/.test(input)
//     }
//     for (let i = 0; i < post.length; i++) {
//         const currentPost = JSON.stringify(post[i]);
//         for (let j = 0; j < categories.length; j++) {
//             const currentCategory = JSON.stringify(categories[j]);
//             const cleanCategoryId = currentCategory.replace(/[^\w\s]/gi, '').replaceAll("_id", " ")
//             const cleanPostId = currentPost.replace(/[^\w\s]/gi, '').replace("categories","").replaceAll("_id", " ")
//             if(pattern(currentCategory) === true && pattern(currentPost) === true && cleanPostId.indexOf( cleanCategoryId) > -1 ){
//                 // console.log("Category Id : " + cleanCategoryId)
//                 // console.log(JSON.stringify(post[i].categories[0].title))
//                 // console.log(JSON.stringify(post[j].categories))
//                 // console.log("Current Post Id : " + cleanPostId)
//                 console.log(categories.length)
//                 console.log("Post Length " + post.length)
//             }
            
//         }     
//     }
    //check to see if 'categories' exists in the return

    //if it does not, return
    //If categories exists loop fetch through all objs [0],[1]...
        //let query = '*[categories[i] == "_key"]{_ref,_key}'
        //For each assign _key or _ref as variable
    
    // console.log(categories[1]);
    // console.log(post[2])
    // return post
}



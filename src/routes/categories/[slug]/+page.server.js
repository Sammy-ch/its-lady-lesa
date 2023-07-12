import { client } from "$lib/client";

export async function load({ params }) {
    const { slug } = params
  const dataPosts = await client.fetch(`*[_type=="category" && title == $title]{
      title,
        "postsTitle": *[_type=='post' && references(^._id)]{ 
            title,
            "slug": slug.current,
            _createdAt,
            "mainImage": mainImage.asset._ref,
          }
      }
      `, { title: slug })
    
    return {
      dataPosts: dataPosts[0].postsTitle,
      titles: dataPosts[0].title
      
    }
}
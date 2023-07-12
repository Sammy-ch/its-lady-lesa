import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "8rbqk8mm",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
}) 


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
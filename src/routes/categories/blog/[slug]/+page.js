import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "8rbqk8mm",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
}) 


export async function load({ params }) {
    const { slug } = params
    const query = `*[_type == "post" && slug.current == "${slug}"]`
    const blogData = await client.fetch(query)

    console.log(blogData[0].mainImage)

    return {
        bodyText: blogData[0].body[0].children[0].text,
        title: blogData[0].title,
        image: blogData[0].mainImage,
    }
}
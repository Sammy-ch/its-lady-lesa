import { client } from "/src/client";

export async function load({ params }) {
    const { slug } = params
    const query = `*[_type == "post" && slug.current == "${slug}"]`
    const blogData = await client.fetch(query)

    return {
        bodyText: blogData[0].body[0].children[0].text,
        title: blogData[0].title,
        image: blogData[0].mainImage,
    }
}
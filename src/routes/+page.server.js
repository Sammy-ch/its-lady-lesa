import client from "$lib/Client.js"

export async function load() {
    const data = await client.fetch('*[_type == "category"]{title}')
    return {
        props: {
            data
        }
  }
}

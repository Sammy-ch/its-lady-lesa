import { client } from "/src/client";

export async function load() {
    const data = await client.fetch('*[_type == "category"]{title}')
    return {
        props: {
            data
        }
  }
}

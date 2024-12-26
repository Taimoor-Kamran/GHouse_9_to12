import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  const data = await client.fetch(
    `*[_type == 'post']{ 
    post_title,
    post_description
  }`)
  console.log(data)
  return (
<div>this is blog website</div>
  );
}

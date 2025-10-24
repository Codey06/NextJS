import Image from "next/image";
import Link from "next/link";

const  Home=async()=> {
  const posts=await fetch('https://jsonplaceholder.typicode.com/posts')
  const postsData =await posts.json()

  console.log("postsData",postsData)
  return (
 <> <h1>Hello </h1>
 <span className="font-bold"> current time {new Date().toLocaleTimeString()}</span>
 {
  postsData.map((post) =>(
    <div key={post.id}>
      <Link href={`/posts/${post.id}`} className="list-item">{post.title}</Link>
    </div>
  ))
 }
 </>
  );
}
export default Home
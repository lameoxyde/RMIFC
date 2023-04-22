import Card from "@/components/Card"
import Pagination from "@/components/Pagination"
import { posts } from "@/data/posts";
import { type Posts } from "@/type";

export default function Home({datas}) {

  return (
    <>
      <main className="container my-12 mx-auto grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">

        {
          datas.map((item: Posts) => <Card key={item.id} item={item} />)
        }

      </main>

      <Pagination />

    </>
  )
}
export async function getServerSideProps(){
        const data = await fetch('https://backend.crfimmadagascar.org/api/content/items/posts');
        const datas = await data.json();            
            
  return {
    props:{datas}
  }
}
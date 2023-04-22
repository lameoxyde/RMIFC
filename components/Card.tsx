import Image from "next/image"
import Link from "next/link";
import { type Posts } from "@/type";
function Card({ item }: { item: Posts }) {

  return (

    <div className="max-w-full bg-white dark:bg-gray-800">

      <Image className="rounded-lg p-3" width={1000} height={324} src={"https://backend.crfimmadagascar.org/storage/uploads"+item.image.path} alt=" demo image " />

      <div className="p-3">

        <div className="flex mb-3">

          <p className="text-sm text-gray-500 dark:text-gray-400"> {item.date} </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
          <p className="text-sm text-gray-500 dark:text-gray-400"> 5 min read </p>

        </div>


        <Link className="text-lg " href={`/read/${item._id.toLowerCase().trim().split(" ").join("-")}`}>
          {item.title}
        </Link>

      </div>

    </div>

  )

}

export default Card

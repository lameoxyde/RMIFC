import { useEffect ,useState } from "react";

export async function DATAS(){
    const [posts, setPost] = useState(null);
    
        useEffect(() => {
            const fetchData = async () => {
              const data = await fetch('https://backend.crfimmadagascar.org/api/content/item/posts');
              const json = await data.json();
              setPost(json);
            }
          
            fetchData()
              .catch(console.error);;
          }, [])
    
          return posts;
}
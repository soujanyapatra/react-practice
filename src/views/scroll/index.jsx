import { useEffect, useState } from 'react'
import $http from '../../plugins/axios'
import InfiniteScroll from "react-infinite-scroll-component";
import ItemCard from './itemCard'

export default function Scroll() {

  const [page, setPage] = useState(1)
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const getListData = async () => {
    try {
      // const { data: { data } } = await $http.get(`api.artic.edu/api/v1/artworks/search?q=cats&page=${page}&limit=${limit}`)
      const { data } = await $http.get(`api.artic.edu/api/v1/artworks/search?q=cats&page=${page}&limit=10`)
      if (data) {
        console.log(data)
        setItems((prevItems) => [...prevItems, ...data.data]);
        setPage((prevPage) => prevPage + 1);


        setPage(page => page + 1)
        data.data.length > 0 ? setHasMore(true) : setHasMore(false);
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    $http.get(`api.artic.edu/api/v1/artworks/search?q=cats&page=1&limit=10`)
    .then(({data: { data }}) => {setItems(data)})
    .catch((e) => console.log(e));

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        getListData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])


  return (
    <div className='mt-16'>
      <InfiniteScroll
        dataLength={items.length}
        next={getListData}
        hasMore={hasMore}
      >
        <div className='container'>
          <div className='row'>
            {items &&
              items.map((i) => <ItemCard item={i} key={i.id} />)}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}

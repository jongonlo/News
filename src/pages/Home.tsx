import { useState } from 'react'
import { Input } from '../components/Input'
import { NewsList } from '../components/NewsList'
import { getNews } from '../services/NewsService'
import { Article } from '../models/Article'

export const Home = () => {

  const [articles, setArticles] = useState<Article[]>([]);
  const [searchInput, setSearchInput] = useState('');

  const handleGetNews = (key: any) => {
    if (key.keyCode == 13) {
      getNews(searchInput).then((response) => setArticles(response.articles));
    }
  }

  return (
    <div className="flex flex-col content-around items-center w-full">
      <div className="text-black font-bold text-5xl pt-20 border-cyan-">News</div>
      <Input placeholder='Search your news' inputClassName='mt-10 w-1/2 h-16 text-2xl' type='text' onChange={(e) => setSearchInput(e)} onKeyUp={handleGetNews}/>
      <NewsList articles={articles}/>
    </div>
  )
}

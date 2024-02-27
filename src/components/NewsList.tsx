import React from 'react'
import { SingleNews } from './SingleNews'
import { Article } from '../models/Article'
import moment from 'moment';

interface NewsListProps {
  articles: Article[];
}

export const NewsList: React.FC<NewsListProps> = ({articles}) => {
  return (
    <div className='flex flex-row mt-10 gap-7 w-10/12 flex-wrap'>
      <div className='flex justify-between gap-y-7 flex-wrap mx-auto'>
        {articles.map((article) => <SingleNews image={article.urlToImage} url={article.url} title={article.title} author={article.source?.name} description={article.description} date={moment(article.publishedAt).format('DD/MM/YYYY')}/>)}
      </div>
    </div>
  )
}

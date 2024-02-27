import React from 'react'

interface SingleNewsProps {
  image?: string;
  date?: string;
  title?: string;
  description?: string;
  author?: string;
  url?: string;
}

export const SingleNews: React.FC<SingleNewsProps> = ({ image, date, title, description, author, url }) => {
  return (
    <>
      <a  href={url} target='_blank' className="relative flex max-w-[24rem] flex-col rounded-xl justify-between bg-white bg-clip-border text-gray-700 shadow-md">
          <div className='flex-col'>
            <div className="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <img src={image} />
            </div>
            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {title}
              </h4>
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3">
              {author}
            </div>
            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
              {date}
            </p>
          </div>
        </a>
    </>
  )
}

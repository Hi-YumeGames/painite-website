import React from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  image: string;
  category?: string;
}

interface ShowcaseProps {
  title: string;
  description: string;
  posts: BlogPost[];
}

const Showcase: React.FC<ShowcaseProps> = ({ title, description, posts }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
      
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="relative isolate flex flex-col overflow-hidden rounded-xl bg-card shadow-lg transition-all hover:shadow-xl"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-border/10" />
            </div>
            
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-muted-foreground">
                  {post.date}
                </time>
                <div className="flex items-center gap-x-2">
                  <svg
                    viewBox="0 0 2 2"
                    className="h-0.5 w-0.5 fill-current text-muted-foreground"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex items-center gap-x-1">
                    <Image
                      src={post.author.image}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 rounded-full"
                    />
                    {post.author.name}
                  </div>
                </div>
              </div>
              
              <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-primary">
                <a href="#">
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
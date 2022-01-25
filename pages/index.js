import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../Components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../Sections';
import { AppProps } from 'next/app';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Codes!ck</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />

      <div className='grid grid-cols-l lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1 grid grid-cols-1 lg:grid-cols-12 gap-5'>
            {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}   
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className="lg:sticky relative top-8">
              <Categories />
              <PostWidget />
            </div>
        </div>

      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts= (await getPosts()) || [];

  return {
    props: { posts }
  }
}

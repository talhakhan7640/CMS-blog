import React from "react";
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
    console.log(post)
    return (
        <div className="post-card shadow-lg rounded-lg p-8 lg:p-8 pb-12 mb-8 lg:col-span-12 lg:p-10">
            {/* <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img 
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="object-top absolute h-80 w-full object-cover shadow-lg lg:rounded-lg"
                />
            </div> */}
            <div className="block lg:flex text-left items-center mb-3 w-full lg:p-0">
                <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-2 ">
                    <img 
                        alt={post.author.name}
                        height='30px'
                        width='30px'
                        className="align-middle rounded-full"
                        src={post.author.photo.url}
                    />
                    <p className="inline align-middle text-grey-700 ml-2 text-sm">{post.author.name},</p>
                    <span className="text-sm text-grey-700 ml-1">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </span>
                </div>
                <div >
                    
                </div>
            </div>
            <h1 className="transition duration-200 text-left mb-3 cursor-pointer text-lg font-semibold ">

                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            
            <p className="text-left text-sm text-grey-700 font-normal mb-3 ">{post.excerpt}</p>
            <div className="text-left">
                <Link href={`/post/${post.slug}`}>
                    <span className="transition duration-500 transform hover:translate-x-2  inline-block text-xs px-0 py-1 cursor-pointer">
                        Continue Reading
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default PostCard;
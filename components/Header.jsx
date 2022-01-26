import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services'

// const categories = [
//     {
//         name: 'React',
//         slug: 'react',
//     },
//     {
//         name: 'Web Development',
//         slug: 'web-development',
//     },
// ]

const Header = ()=> {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, []);
    return (
        <div className="container-fluid mx-auto px-10 mb-8 header">
            <div className="border-b w-full inline-block py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-black">
                            Codes!ck
                        </span>
                    </Link>
                </div>
                <div className="mt-4 relative -mx-3 md:float-left md:contents">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align=middle black ml-4 font-seminold cursor-pointer">
                                {category.name}
                            </span>    
                        </Link>
                    ))}    
                </div>
            </div>
        </div>
    );
}

export default Header;
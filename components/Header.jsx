import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services'

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
                        <span className="logo cursor-pointer font-bold text-4xl text-black">
                            dead.dev
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align=middle black p-2 font-seminold cursor-pointer">
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
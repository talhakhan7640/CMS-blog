
import React, { useRef, useState, useEffect } from "react";

import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();    
    const nameEl = useRef();    
    const emailEl = useRef();    
    const storeDataEl = useRef();  
    
    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem("name");
        nameEl.current.value = window.localStorage.getItem("name");
        nameEl.current.value = window.localStorage.getItem("email");
    }, [])

    const handleCommentSubmission = () => {
        setError(false);

        const { value : comment } = commentEl.current;
        const { value : name } = nameEl.current;
        const { value : email } = emailEl.current;
        const { checked : storeData } = storeDataEl.current;

        if(!comment || !name || !email) {
            // console.log("There is an error ")
            setError(true);
            ReadableStreamDefaultController;
        }

        const commentObj = { name, email, comment, slug };

        if(storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }

        submitComment(commentObj)
        .then((res) => {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        })
    }


    return (
        <div className="bg-white text-black shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea 
                ref={commentEl} 
                className="text-sm p-4 outline-none w-full rounded-lg focus:ring-gray-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                placeholder="Comment"
                name="comment"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input 
                    type="text" 
                    ref={nameEl}
                    className="text-sm px-4 py-2 outline-none w-full rounded-lg focus:ring-gray-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="Name"
                    name="name"
                />
                <input 
                    type="email" 
                    ref={emailEl}
                    className=" text-sm px-4 py-2 outline-none w-full rounded-lg focus:ring-gray-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="Email"
                    name="email"
                />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div >
                    <input 
                        type="checkbox"
                        value="true"
                        ref={storeDataEl}
                        id="storeData"
                        name="storeData"
                    />
                    <label className="text-xs cursor-pointer ml-2" htmlFor="storeData">Save my e-mail and name for the next time I comment.</label>
                </div>
            </div>
            {error && <p className="text-xs text-red-500">All fields are required.</p>}
            <div className="mt-8 lg:flex">
                <button 
                type="button" 
                onClick={handleCommentSubmission}
                className="transition duration-500 ease hover:bg-gray-800 inline-block bg-gray-700 text-white p-2 rounded text-xs">
                    Post Comment
                </button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold  ml-2  text-black">Comment submitted for review.</span>}
            </div>
        </div>
    );
}

export default CommentsForm
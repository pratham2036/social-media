// "use client"
// import React from 'react'
// import { UserButton, useClerk } from '@clerk/nextjs'

// const Home = () => {
//   const { signOut } = useClerk()

//   const handleSignOut = async () => {
//     await signOut()
//     window.location.href = '/'  // Redirect to homepage
//   }

//   return (
//     <div className='h-screen flex justify-center items-center'>
//       <UserButton signOutCallback={handleSignOut} />
//     </div>
//   )
// }

// export default Home
"use client";

import PostCard from "@/componets/cards/PostCard";
import Loader from "@/Loader";
import { useUser } from "@clerk/nextjs";
// import Loader from "@components/Loader";
// import PostCard from "@components/cards/PostCard";
import { useEffect, useState } from "react";

const Home = () => {
  const { user, isLoaded } = useUser();

  const [loading, setLoading] = useState(true);

  const [feedPost, setFeedPost] = useState([]);

  const getFeedPost = async () => {
    const response = await fetch("/api/post");
    const data = await response.json();
    setFeedPost(data);
    setLoading(false);
  };

  useEffect(() => {
    getFeedPost()
  }, []);

  return loading || !isLoaded ? (
    <Loader/>
  ) : (
    <div className="flex flex-col gap-10">
      {feedPost.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          creator={post.creator}
          loggedInUser={user}
          update={getFeedPost}
        />
      ))}
    </div>
  );
};

export default Home;
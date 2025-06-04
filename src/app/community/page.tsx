'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import SocialPost from '@/components/socialPosts'
import UserStatus from '@/components/userStatus'

function SearchBar() {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
    console.log('Search query:', value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with query:', query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search news feed..."
        />
      </div>
    </form>
  )
}

export default function CommunityLayout() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h1 className="text-3xl italic text-gray-900 mx-auto text-center">News Feed</h1>
          <SearchBar />
          <div className="flex flex-row gap-2">
            <UserStatus title="Online" maxRange={200}/>
            <UserStatus title="Active Riders" maxRange={20}/>
          </div>
        </div>
        
        {/* Your news feed content will go here */}
        <div className="space-y-4">
          {/* <p className="text-gray-600">News feed content will appear here...</p> */}
          {/* Social Posts Feed */}
          <SocialPost 
            title="How to fix flat tire"
            content="Help! I ran over a sharp nail and I need help."
            topic="Bike Help"
            author = "Steve"
            timeAgo="54 min ago"
            upvotes={7}
            commentCount={2}
          />
          <SocialPost 
            title="Biking Trails"
            content="LF trails to bike at"
            topic="General"
            author = "That Guy"
            timeAgo="4 hrs ago"
            upvotes={56}
            commentCount={10}
          />
        </div>
      </div>
    </>
  )
}
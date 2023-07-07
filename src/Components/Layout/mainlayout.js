import React from 'react'
import {Link} from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
        <h2>Main Layout</h2>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <ul>
            <Link to='/home'>
                Home
            </Link>
            <Link to='/calculator'>
                Calculator
            </Link>
        </ul>
    </div>
  )
}

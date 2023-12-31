'use client'
import React from 'react'
import Link from 'next/link'
import getDictionary from '@/app/dictionaries'


export default function Footer() {
  const dict = getDictionary()

  return (
    <div className='mt-6 px-6 py-4 bg-black bg-opacity-40 justify-center items-center gap-7 inline-flex font-light'>
      <div>© ACE Software. {dict.footer.title}</div>
      <div className="w-7">|</div>
      <div>{dict.footer.privacy}</div>
    </div>
  )
}

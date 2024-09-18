import { getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { MDXRemote } from 'next-mdx-remote/rsc'
import image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { title } from 'process'
import React from 'react'

export default async function Post({params}: {params: {slug: string}}) {

    const {slug} = params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }
  return (
    <section className='pb-24 pt-32'>
    <div className='container max-w-3xl'>
      <Link
        href='/posts'
        className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
      >
        <ArrowLeftIcon className='h-5 w-5' />
        <span>Back to posts</span>
      </Link>

      {image && (
        <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
          <Image
            src={image}
            alt={title || ''}
            className='object-cover'
            fill
          />
        </div>
      )}

      <header>
        <h1 className='title'>{title}</h1>
        <p className='mt-3 text-xs text-muted-foreground'>\
            {author} / {formatDate(pubishedAt ?? '')}
        </p>
      </header>

      <main className='prose mt-16 dark:prose-invert'>
        <MDXRemote source={content} />
      </main>
    </div>
  </section>
  )
}
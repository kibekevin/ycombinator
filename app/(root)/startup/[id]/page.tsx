import { formatDate } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import markdownit from 'markdown-it'
import { Skeleton } from '@/components/ui/skeleton'
import View from '@/components/View'


const md = markdownit();

//export const experimental_ppr = true. Instead I will use react suspense bcoz NextCanry not needed

const page = async ({params}:{params: Promise<{id:string}>}) => {

    const id = (await params).id

    const post = await client.fetch(STARTUP_BY_ID_QUERY, {id})

    if (!post) {
        return notFound();
    }

    const parsedContent = md.render(post?.pitch || '')

  return (
    <>
        <section className='pink_container !min-h-[230px]'>
            <p className='tag tag-tri'>{formatDate(post?._createdAt)}</p>
            <h1 className='heading'>{post?.title}</h1>
            <p className='sub_headind !max-w-5xl'>{post?.description}</p>
        </section>

        <section className='section_container'>
            {post?.image ? (
                <div className='flex justify-center'>
                    <Image
                        src={post.image}
                        alt="thumbnail"
                        width={600}
                        height={100}
                        className='object-cover content-center w-full h-auto rounded-xl'
                    />
                </div>
            ) : (
                <p>No Thumbnail</p>
            )}

            <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                <div className='flex justify-between gap-5 items-center'>
                    <Link href={`/user/${post.author?._id}`} className='flex items-center gap-2 mb-3'>
                        {post?.author.image ? (<Image src={post.author.image} width={64} height={64} alt='profile pic' className='rounded-full drop-shadow-lg'/>) : (<p>Avatar</p>)}

                        <div>
                            <p className='text-20-medium'>{post?.author.name}</p>
                            <p className='text-16-medium !text-black-300 !dark:text-grey'>@{post?.author.username}</p>
                        </div>
                    </Link>

                    <p className='category-tag'>{post?.category}</p>
                </div>

                <h3 className='text-30-bold'>Pitch Details</h3>
                {parsedContent ? (
                    <article dangerouslySetInnerHTML={{__html:parsedContent}} className='prose max-w-4xl font-work-sans break-all'/>
                ) : (
                    <p className='no-result'>No Details Provided</p>
                )}
            </div>

            <hr className='divider'/>

            {/* EDITOR SELECTED STARTUPS */}

            <Suspense fallback={<Skeleton className='view_skeleton'/>}>
                <View id={id}/>
            </Suspense>

        </section>
    </>
  )
}

export default page

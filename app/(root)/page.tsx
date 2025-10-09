import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { Post } from "@/types/post";

export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {

    const query = (await searchParams).query

    const posts = [{
        _createdAt: new Date().toISOString(),
        views: 55,
        author: {_id: 1, name:'Kevin'},
        _id: 1,
        description: 'This is a description',
        image: 'https://http2.mlstatic.com/D_NQ_NP_959984-MLU74543883607_022024-O.webp',
        category:'robots',
        title:'We Robots'
    }]

  return (
    <>  
        <section className="pink_container pattern">
            <h1 className="heading">Pitch Your Startup <br/> Connect With Entrepreneurs</h1>
            <p className="sub_heading !max-3xl">Submit Ideas, Vote on Pitches, And Get Noticed in Virtual Competitions</p>
            <SearchForm query={query}/>
        </section>

        <section className="section_container">
            <p className="text-30-semibold">
                {query ? `Search results for "${query}"`: 'All Startups'}
            </p>
            <ul className="mt-7 card_grid">
                {posts?.length > 0 ? (posts.map((post:Post)=>(
                    <StartupCard key={post?._id} post={post}/>
                ))) : (
                    <p className="no-results">No Startups Found</p>
                )}
            </ul>

        </section>
        
    </>
  )
}

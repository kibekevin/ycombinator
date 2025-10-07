import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {

    const query = (await searchParams).query

  return (
    <>  
        <section className="pink_container pattern">
            <h1 className="heading">Pitch Your Startup <br/> Connect With Entrepreneurs</h1>
            <p className="sub_heading !max-3xl">Submit Ideas, Vote on Pitches, And Get Noticed in Virtual Competitions</p>
            <SearchForm query={query}/>
        </section>
        
    </>
  )
}

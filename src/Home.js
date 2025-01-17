import Feed from "./Feed"

const Home = ({posts, fetchError, isLoading}) => {
    return (
      <main className="Home">
        {
          isLoading && 
          <p className="statusMsg">Loading Posts...</p>
        }
        {
          isLoading && fetchError && 
          <p 
            className="statusMsg" 
            style={{color: "red"}}
          >
              {fetchError}
          </p>
        }
        {
          !isLoading && !fetchError && 
          (
            posts.length ? <Feed posts={posts}/> 
              : <p className="statusMsg">No Posts to Display.</p>
          )
        }
        {/* { posts.length ? (<Feed posts={posts}/>) : (<p style={{marginTop:"2rem"}}>No Posts to display yet!</p>) } */}
      </main>
    )
  }
  
  export default Home

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

const Courses = () => {
  const { MongoClient } = require('mongodb');

  async function runGetStarted() {
    // Replace the uri string with your connection string
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
      const database = client.db('AppDB');
      const movies = database.collection('courses');

      // console.log(movie);
      // Queries for a movie that has a title value of 'Back to the Future'
      // const query = { name: 'Urdu' };
      // const movie = await movies.findOne(query);

    } catch(error) {
      console.log(error)  
    }
  }
  runGetStarted().catch(console.dir);


  return (
    <div>
      <h1>
        Courses
      </h1>
      <div>
       
      </div>
    </div>
  )
}

export default Courses

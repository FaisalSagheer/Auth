async function Courses() {
  const { MongoClient } = require('mongodb');

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    const database = client.db('AppDB');
    const courses = database.collection('courses');

    // Queries for a movie that has a title value of 'Back to the Future'
    // const query = { name: 'Urdu' };
    const course = await courses.find({}).limit(10).toArray();
    // console.log(course);

    return (
      <>
        Courses
        <div className='grid grid-cols-2 gap-4 items-center mt-20'>
          {
           course.map((i,index)=>
            <div className='flex border-1' key={index}>
            {/* <span>{i._id}</span> */}
            <span>{i.name}</span>
            <span>{i.subTitle}</span>
            <span>{i.description}</span>
            </div>
          )
          }
        </div>
      </>
    )
  } catch (error) {
    console.log(error)
  }
}

export default Courses

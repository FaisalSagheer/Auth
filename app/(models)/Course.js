import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: String,
    subTitle:String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Course = mongoose.models.Course || mongoose.model("Course", userSchema);

export default Course;

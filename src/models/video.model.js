import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudnary url
      required: true,
    },
    thumbnail: {
      type: String,
      reuqired: true,
    },
    title: {
      type: String,
      reuqired: true,
    },
    description: {
      type: String,
      reuqired: true,
    },
    duration: {
      type: Number, //cloudnary
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);

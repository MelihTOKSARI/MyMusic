import { Genre } from "./Genre";
import { Video } from "./Video";

export interface XITEDatasetResponse {
    genres: Array<Genre>,
    videos: Array<Video>
}
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function fetchTrack(query: string, maxResults: number) {
    try {
        const { data } = await axios.get(
            `${BASE_URL}/search?key=${API_KEY}&q=${query} official music audio video MV&chart=mostPopular&order=date&maxResults=${maxResults}&type=video&part=snippet`
        );
        
        const tracks: YouTubeTrack[] = [];
        
        for (const video of data.items) {
            const title = video.snippet.title;
            const videoId = video.id.videoId;
            const channelId = video.snippet.channelId;
            const videoThumbnail = video.snippet.thumbnails.medium.url;
            const channelDetailsUrl = `${BASE_URL}/channels?key=${API_KEY}&id=${channelId}&part=snippet`;
            const { data: channelData } = await axios.get(channelDetailsUrl);
            const channelTitle = channelData.items[0].snippet.title;
            const videoDetailsUrl = `${BASE_URL}/videos?key=${API_KEY}&id=${videoId}&part=snippet,statistics`;
            const { data: videoData } = await axios.get(videoDetailsUrl);   
            console.log(videoData);
            const publishedDate = video.snippet.publishedAt;
            const viewCount = videoData.items[0].statistics.viewCount;
      
            tracks.push({
                title: title,
                author: {
                    id: channelId,
                    name: channelTitle,
                },
                duration: '',
                published: publishedDate,
                id: videoId,
                thumbnails: videoThumbnail,
                view_count: viewCount
            });
        }
        return tracks;
    } catch (error) {
        console.log("ERROR FETCHING VIDEOS", error);
        throw error;
    }
}

export async function fetchChannels(query: string, maxResults: number) {
    try {
        const { data } = await axios.get(
            `${BASE_URL}/search?key=${API_KEY}&q=${query} audio mv&chart=mostPopular&order=date&maxResults=${maxResults}&type=video&part=snippet`
        );

        const channels: ChannelArtist[] = [];
        
        for (const channel of data.items) {
            const channelId = channel.snippet.channelId;
            const channelDetailsUrl = `${BASE_URL}/channels?key=${API_KEY}&id=${channelId}&part=snippet`;
            const { data: channelData } = await axios.get(channelDetailsUrl);
            const channelTitle = channelData.items[0].snippet.title;
            const channelImage = channelData.items[0].snippet.thumbnails.medium.url;
            
            // const playlistDetailsUrl = `${BASE_URL}/channels?key=${API_KEY}&id=${channelId}&part=contentDetails`;
            // const { data: PlaylistData } = await axios.get(playlistDetailsUrl);
            // const channelPlaylist = PlaylistData.items[0].contentDetails.
            channels.push({
                id: channelId,
                name: channelTitle,
                image: channelImage
            });
        }
        return channels;
    } catch (error) {
        console.log("ERROR FETCHING VIDEOS", error);
        throw error;
    }
}


export async function fetchSearchQuery(searchQuery: string) {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/search?q=${searchQuery}&part=snippet&type=video&maxResults=4&key=${API_KEY}`
      );
    
      return data;
    } catch (error) {
      console.error('Error with the search query', error);
    }
  }
  

  
export async function fetchVideoDetails(videoId: string) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/videos?key=${API_KEY}&id=${videoId}&part=snippet,statistics`
    );

    const videoData = data.items[0].snippet;

    const videoDetails = {
      title: videoData.title,
      videoUrl: `${process.env.NEXT_PUBLIC_VIDEO_BASE_URL}${videoId}`,
      likes: data.items[0].statistics.likeCount,
      description: videoData.description,
      publishedDate: videoData.publishedAt,
    };

    return videoDetails;
  } catch (error) {
    console.error('ERROR FETCHING VIDEO DETAILS', error);
  }
}

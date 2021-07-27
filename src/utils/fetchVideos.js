
async function allVideosByCourse(id, token) {
    try {
        const res = await fetch(
            `http://localhost:8080/api/v1/videos/${id}`,
            {
                method: 'GET'
            }
        )

        const videos = await res.json();

        if (videos.error) {
            return console.log(videos.error);
        }

        console.log('Videos', videos);
        return videos;

    } catch (error) {
        console.log(error);
    }
}

async function getVideoById(id, token) {
    try {
        const res = await fetch(
            `http://localhost:8080/api/v1/videos/singel/${id}`,
            {
                method: 'GET'
            }
        )

        const videos = await res.json();

        if (videos.error) {
            return console.log(videos.error);
        }

        console.log('Video', videos);
        return videos;

    } catch (error) {
        console.log(error);
    }
}

export default {
    allVideosByCourse,
    getVideoById
}
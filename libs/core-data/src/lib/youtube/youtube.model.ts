export interface Youtube {
    id: string,
    snippet: {
        title: string,
        description: string,
        thumbnails: {
            maxres: {
                url: string
                width: number,
                height: number
            }
        },
        resourceId: { 
            videoId: string
        }
    }
}

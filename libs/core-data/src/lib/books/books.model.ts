export interface Books {
    id: string;
    volumeInfo :{
        authors: [],   
        mainCategory: string;
        description: string,
        title: string,
        imageLinks: {
            thumbnail: string;
        }
        infoLink: string;
    }
}

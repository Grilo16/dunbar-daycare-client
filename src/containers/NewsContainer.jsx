import NewsComponent from "../components/NewsComponent";

const NewsContainer = () => {

    const mockNews = [
        {
            date: "dd/mm/yyyy", 
            news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore enim voluptate soluta laudantium illum, quaerat adipisci rem doloribus quod nemo dolor. Laudantium ad iste itaque, sunt soluta aliquam quae maxime ipsa odit corporis magnam mollitia, dolores nobis eveniet totam optio, voluptates molestiae alias veritatis eum in dolorem quam. Dolorem."
        },
        {
            date: "dd/mm/yyyy", 
            news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore enim voluptate soluta laudantium illum, quaerat adipisci rem doloribus quod nemo dolor. Laudantium ad iste itaque, sunt soluta aliquam quae maxime ipsa odit corporis magnam mollitia, dolores nobis eveniet totam optio, voluptates molestiae alias veritatis eum in dolorem quam. Dolorem."
        },
        {
            date: "dd/mm/yyyy", 
            news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore enim voluptate soluta laudantium illum, quaerat adipisci rem doloribus quod nemo dolor. Laudantium ad iste itaque, sunt soluta aliquam quae maxime ipsa odit corporis magnam mollitia, dolores nobis eveniet totam optio, voluptates molestiae alias veritatis eum in dolorem quam. Dolorem."
        },
    ]

    const NewsItem = mockNews.map((news, index) => {
        return <NewsComponent key={index} news={news}/>
    })


    return(
        <>
        {NewsItem}
        </>
    )
}; 

export default NewsContainer;
import news from "../data/news"; 
import NewsPost from '../components/NewsPost';

const News = () => {
    return (
        <div className="container mt-4">
            <h2>News</h2>
            {news.map(post => <NewsPost key={post.id} post={post} />)}
        </div>
    );
};

export default News;
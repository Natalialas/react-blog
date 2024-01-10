import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';
import Button from "../../common/Button/Button";
import { Link } from 'react-router-dom';


const Home = () => {

    const posts = useSelector((state) => getAllPosts(state));

    return (
        <div>
            <h1 className="mb-4">All posts</h1>
            <Row>
                {posts.map(post => (
                    <Col key={post.id} md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="mb-3">{post.title}</Card.Title>
                                <div>
                                    <strong>Author:</strong> {post.author}
                                </div>
                                <div>
                                    <strong>Published:</strong> {post.publishedDate}
                                </div>
                                <div className="my-3">{post.shortDescription}</div>
                                <Link to={`/post/${post.id}`}>
                                    <Button>Read more</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;
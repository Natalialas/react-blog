import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';
import Button from "../../common/Button/Button";


const Home = () => {

    const posts = useSelector(getAllPosts);

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
                                <Button>Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;
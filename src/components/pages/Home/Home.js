import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from 'react-redux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = (props) => {

    const posts = useSelector((state) => getAllPosts(state));

    return (
        <div>
            <Row className="mb-4">
                <Col>
                    <h1 className="mb-0">All posts</h1>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Link key={props.id} to={`/post/add`} className={'px-2'}>
                        <Button variant="outline-info" className={'px-4'}>Add Post</Button>
                    </Link>
                </Col>
            </Row>
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
import  { Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { dateToStr } from "../../../utils/dateToStr";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { filteredPostsByCategory } from "../../../redux/postsRedux";


const Category = () => {

    const {category} = useParams();

    const posts = useSelector((state) => filteredPostsByCategory(state, category));

    return (
        <div>
          <div className="p-2">
            <h1>Category: {category}</h1>
          </div>
        <div className="row my-3 px-3">
          {posts?.length ? (
            posts.map((post) => (
              <Col key={post.id} className="col-lg-4 col-sm-12 col-md-6 px-2 py-2">
                <Card>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text className="mb-2">
                      <b>Author:</b> {post.author}
                    </Card.Text>
                    <Card.Text className="mb-2">
                      <b>Published:</b> {dateToStr(new Date(post.publishedDate))}
                    </Card.Text>
                    <Card.Text className="mb-2">
                      <b>Category:</b> {post.category}
                    </Card.Text>
                    <Card.Text>{post.shortDescription}</Card.Text>
                    <Link to={`/post/${post.id}`}>
                      <Button variant="primary">Read more</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No posts in this category...</p>
          )}
        </div>   
      </div>
    );
  };
  
  export default Category;
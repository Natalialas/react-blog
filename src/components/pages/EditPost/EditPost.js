import  { Row } from "react-bootstrap";
import  { Col } from "react-bootstrap";
import EditPostForm from "../../features/EditPostForm/EditPostForm";

const PostEdit = () => {

    return(

        <Row  className="justify-content-center align-items-start px-5"> 
            <Col xs={12} md={10} lg={8}>
                <h1>Edit Post</h1>
                <EditPostForm/>  
            </Col>
        </Row>
    )
}

export default PostEdit;
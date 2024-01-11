import { useState } from 'react';
import  { Button, Form, Row, Col } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PostForm = ({ action, actionText, ...props}) => {


    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };

    return (
    <section>
        <Row className="d-flex flex-column">  
        <Form onSubmit={handleSubmit}>
        <Col lg={10} xs={12} md={8}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author:</Form.Label>
                <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="publishedDate">
                <Form.Label>Published Date:</Form.Label>
                <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} className="form-control" placeholderText="Date" dateFormat="dd/MM/yyyy" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="shortDescription">
                <Form.Label>Short Description:</Form.Label>
                <Form.Control type="text" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
                <Form.Label>Content:</Form.Label>
                <ReactQuill theme="snow" style={{ height: '200px' }} value={content} onChange={setContent} />
            </Form.Group>

            </Col>
            <Button variant="primary" type="submit" className="mx-1 mt-5">{actionText}</Button>
        </Form>
      </Row>
      </section>
    );
  };

  export default PostForm;
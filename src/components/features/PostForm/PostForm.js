import { useState } from 'react';
import  { Button, Form } from "react-bootstrap";


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
        <Form onSubmit={handleSubmit}>
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
                <Form.Control type="text" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="shortDescription">
                <Form.Label>Short Description:</Form.Label>
                <Form.Control type="text" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
                <Form.Label>Content:</Form.Label>
                <Form.Control type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">{actionText}</Button>
        </Form>
    );
  };

  export default PostForm;
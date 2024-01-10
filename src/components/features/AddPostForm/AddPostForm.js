import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import  { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const AddPostForm = props => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({ postId: props.postId, title, author, publishedDate, shortDescription, content }));
        setTitle('');
        setAuthor('');
        setPublishedDate('');
        setShortDescription('');
        setContent('');
        navigate('/');
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

            <Button variant="primary" type="submit">Add post</Button>
        </Form>
    );
  };

  export default AddPostForm;
import { useState } from 'react';
import  { Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PostForm = ({ action, actionText, ...props}) => {

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        action({ title, author, publishedDate, shortDescription, content });
      };

    return (
    <section>
        <Row className="d-flex flex-column">  
            <Form onSubmit={validate(handleSubmit)}>
                <Col lg={10} xs={12} md={8}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            {...register("title", { required: true, minLength: 3 })}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type="text" placeholder="Enter title"
                        />
                        {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="author">
                        <Form.Label>Author:</Form.Label>
                        <Form.Control
                            {...register("author", { required: true, minLength: 3 })}
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            type="text" placeholder="Enter author"
                        />
                        {errors.author && <small className="d-block form-text text-danger mt-2">This field is required (min 3 characters).</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="publishedDate">
                        <Form.Label>Published Date:</Form.Label>
                        <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} className="form-control" placeholderText="Date" dateFormat="dd/MM/yyyy" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="shortDescription">
                        <Form.Label>Short Description:</Form.Label>
                        <Form.Control 
                            {...register("shortDescription", { required: true, minLength: 20 })}
                            value={shortDescription}
                            onChange={e => setShortDescription(e.target.value)}
                            as="textarea" rows={6} placeholder="Leave a comment here"
                        />
                        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required (min 20 characters).</small>}
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
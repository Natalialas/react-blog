import PostForm from "../PostForm/PostForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editPost } from "../../../redux/postsRedux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { Navigate } from 'react-router-dom';


const EditPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const postData = useSelector((state) => getPostById(state, id));

    const handleSubmit = (postData) => {
        dispatch(editPost({ ...postData, id}));
        navigate('/');
    };

    if(!postData) return <Navigate to="/" />
    else return(
        <PostForm
            postId = {id}
            action={handleSubmit}
            actionText='Edit post'
            title={postData.title}
            author={postData.author}
            publishedDate={postData.publishedDate}
            category={postData.category}
            shortDescription={postData.shortDescription}
            content={postData.content}
        />

    );
};

export default EditPostForm;
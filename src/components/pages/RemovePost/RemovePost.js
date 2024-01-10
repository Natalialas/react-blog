import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';


const RemovePost = ({ id }) => {

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleRemovePost = () => {
        dispatch(removePost(id));
        handleCloseModal();
      };

    return (
        <div>
        <Button onClick={handleShowModal} variant="outline-danger" className="px-4">Delete</Button>{' '}
  
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>The operation will completely remove this post from the app. Are you sure you want to do that?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleRemovePost}>
                Remove
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  export default RemovePost;
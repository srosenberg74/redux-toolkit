import { useDispatch, useSelector } from "react-redux";
import { setModalVisible, setScreen } from "../Utils/appSlice";
import { deleteComment } from "../Utils/commentSlice";
import Modal from "../Components/Modal";
import CommentForm from "../Components/CommentForm";
import "../App.css";

const Profile = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const comments = useSelector((state) => state.comments.comments);
  let width = window.innerWidth;

  const commentsList = comments.map((comment, index) => (
      <div key={index} className="comment-outer">
    <div
      className="comment-inner"
      style={{ width: width * 0.5 > 300 ? 300 : width * 0.5 }}
    >
      <p>{comment}</p>
      </div>
      <button
        className="delete-button"
        onClick={() => dispatch(deleteComment(index))}
      >
        X
      </button>
    </div>
  ));

  return (
    <>
      <div>Profile Screen</div>
      {comments.length === 0 && <h5 style={{color: "grey", height: "100px", paddingTop: "60px"}}>Comments will display here</h5>}
      {commentsList}
      <button onClick={() => dispatch(setModalVisible(true))}>
        Add Comment
      </button>
      <button onClick={() => dispatch(setScreen("home"))}>Home</button>
      {app.modalVisible && <Modal children={<CommentForm />} />}
    </>
  );
};

export default Profile;

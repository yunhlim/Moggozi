import { postItem } from "../../pages/stage/StageDetail";

const PostItem: React.FC<{posting:postItem}> = ({posting}) =>{
  return(
    <div style={{ border: "solid", margin: "1rem", padding: "1rem" }}>
      <p>포스팅 id : {posting.id}</p>
      <p>포스팅 제목 : {posting.title}</p>
      <p>포스팅 좋아요 수 : {posting.like_count}</p>
      <p>포스팅 이미지 : {posting.img}</p>
      <div>
      <p>포스팅 작성자 id : {posting.writer.id}</p>
      <p>포스팅 작성자 이름 : {posting.writer.name}</p>
      </div>
    </div>
  ) 
}
export default PostItem;
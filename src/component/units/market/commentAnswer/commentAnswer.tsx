export default function CommentAnswer(props: any) {
  return (
    <div>
      <input type="text" onChange={props.onChangeEditAnswer} />
      <button id={props.el._id} onClick={props.onClickEditAnswer}>
        대댓글 수정하기
      </button>
    </div>
  );
}

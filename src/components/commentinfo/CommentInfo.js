export default function CommentInfo({item}) {
  return (
    <div>
        <div>postId: {item.postId}</div>
        <div>id: {item.id}</div>
        <div>name: {item.name}</div>
        <div>email: {item.email}</div>
        <div>body: {item.body}</div>
    </div>
  );
}
export default function PostInfo({item}) {
  return (
    <div>
        <div>
            <div>userId: {item.userId}</div>
            <div>id: {item.id}</div>
            <div>title: {item.title}</div>
            <div>body: {item.body}</div>
        </div>
    </div>
  );
}
export default function Post({item, choosePost}) {
    const onClickPostChoose = () => {
        choosePost(item);
    }
  return (
    <div className={'wrap'}>
      <div>
        {item.id} {item.title}
      </div>
      <button onClick={onClickPostChoose}>>></button>
    </div>
  );
}
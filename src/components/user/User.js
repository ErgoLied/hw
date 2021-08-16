export default function User({item, chooseUser}) {
    const onClickUserChoose = () => {
        chooseUser(item);
    }
  return (
    <div className={'wrap'}>
        <h3>
            {item.id} {item.name}
        </h3>
        <button onClick={onClickUserChoose}>show info</button>
    </div>
  );
}
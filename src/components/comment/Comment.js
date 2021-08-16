export default function Comment({item, chooseComment}) {
    const onClickCommentChoose = () => {
        chooseComment(item);
    }
    return (
        <div className={'wrap'}>
            <div>
                {item.id} {item.name}
            </div>
            <button onClick={onClickCommentChoose}>>></button>
        </div>
    );
}
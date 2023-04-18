function Card(props){
    return(
        <div className="card">
            <div className="card-image" style={{
                backgroundColor: props.image
            }}>Image</div>
            <div className="card-body">
                <div className="card-title">{props.title}</div>
                <div className="content">{props.content}</div>
            </div>
        </div>
    );
}

export default Card;
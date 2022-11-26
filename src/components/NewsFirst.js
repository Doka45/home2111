import avatar from './avatar_default.png'

function NewsFirst(props) {
    console.log(props);
    return (
        <div className="main">
            <div className="plus3">
                <div className="main2">
                    <div className="pic1">
                        <img src={avatar} />
                        <b> {props.name }  name </b>
                        <small className="author">in </small>
                        <b>{props.secondName} name </b>
                        <small className="text-muted">  .   {props.theNumberOfDate} {props.month }</small>
                    </div>
                </div>
            </div> 
        </div>
    );
    
}

export default NewsFirst;



import skeleton from './skeleton-rect.png'
import threat from './thread1.png'


function NewsSecond(props) {
    console.log(props);
    return (
        <div className="plus3">
            <div className="main2">
                <div className="practical"><h1 id="title"> {props.number} Practical {props.theNameOfLang} Tips </h1></div>
                <div className="text1">
                    <p>You not only learn more {props.lovelyLang} by implementing what you
                        already know but, in the end, you can see how all your hard
                        work pays off.</p>
                </div>
                <div className="ske1">
                    <div className="but1" id="but1">
                        <button type="button" className="button1" disabled> {props.lovelyLang }</button>
                        <small className="min12">12 min read</small>
                        <small className="text-muted">.</small>
                        <small className="point">.</small>
                        <small className="text-muted">Selected for you</small>
                    </div>
                    <div className="imgskeleton">
                        <img src={skeleton} className="skelet" />
                        <img src={skeleton} className="skelet" />
                        <img src={skeleton} className="skelet" />
                    </div>
                </div>
            </div>
            <div className="threat">
                <img id="threat" src={threat} />
            </div>
            <hr />
        </div>
    );
}

export default NewsSecond;
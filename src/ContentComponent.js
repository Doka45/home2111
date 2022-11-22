import avatar from './avatar_default.png'
import skeleton from './skeleton-rect.png'
import threat from './thread1.png'

function ContentComponent() {
    return (
<div class="row gy-5" id="main" >
    <div class="col-12">
        <div class="plus3">
            <div class="col-9">
                <div class="h-25 row">
                    <div class="col-8">
                        <img src={avatar} />
                        <b>Author name</b> <small class="text-muted">in</small>
                        <b>Topics name</b> <small class="text-muted">7 July</small>
                    </div>
                    <div class="col-2">
                        <p></p>
   
                    </div>
                        <div class="col2"></div>
                </div>
                    <div class="h-25 row"><h1 id="title">7 Practical CSS Tips</h1></div>
                        <div class="text1">
                            <p>
                            You not only learn more Python by implementing what you
                            already know but, in the end, you can see how all your hard
                            work pays off.
                            </p>
                        </div>
                            <div class="ske1">
                                <div class="col-2" id = "but1">
                                    <button type="button" class="button1" disabled>JavaScript</button>
                                    <small class="text-muted">12 min read</small>
                                    <small class="text-muted">.</small>
                                    <small class="text-muted">Selected for you</small>
                                </div>
                                    <div class="col-8">
                                        <p></p>
                                    </div>
                                    <div class="col-2">
                                        <img src={skeleton} />     .
                                        <img src={skeleton} />     .
                                        <img src={skeleton} />    .
                                    </div>
                            </div>
            </div>
                                <div class="col">
                                    <img id = "threat" src={threat} /> 
                                </div>
        </div>
            <p class="text-muted">  </p>
                <div class="d-grid gap-5"></div>
                    <hr />
    </div>

</div>
    
    )
}

export default ContentComponent;
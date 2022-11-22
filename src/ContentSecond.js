import avatar from './avatar_default.png'
import skeleton from './skeleton-rect.png'
import threat2 from './thread2.png'

function ContentSecond() {
    return (
<div class="row gy-5">
    <div class="col-12">
        <div class="plus2">
            <div class="col-9">
                <div class="h-25 row">
                    <div class="col-8">
                        <img src={avatar} />
                        <b>Author name</b> <small class="text-muted">in</small>
                        <b>Topics name</b> <small class="text-muted">7 July</small>
                    </div>
                        <div class="col2">
                            <p> </p>
                        </div>
                </div>
                    <div class="h-25 row"><h1 id="title-2">7 Practical CSS Tips</h1></div>
                        <div class="text2">
                            <p>
                            Recently, I’ve been automating tasks more than often due to my lack of time. 
                            Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
                            You’ll find links to the full scripts and tutorials to solve each project. Also, 
                            I’m leaving a challenge to each of them to test your Python skills.
                            To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...  
                            </p>
                        </div>
                            <div class="ske2">
                                <div class="col-2" id="but2">
                                    <button type="button" class="button2" disabled>JavaScript</button>
                                    <small class="text-muted">12 min read</small>
                                    <small class="text-muted">.      </small>
                                    <small class="text-muted">Selected for you</small>
                                </div>
                                    <div class="col-8">
                                    <p></p>
                                    </div>
                                <div class="col-2">
                                    <img src={skeleton} />    .
                                    <img src={skeleton} />    .
                                    <img src={skeleton} />    .
                                </div>
                            </div>
            </div>
                    <div class="col">
                    <img src={threat2}  /> 
                    </div>
        </div>
            <p class="text-muted"> </p>
            <div class="d-grid gap-5"></div>
                <hr />
    </div>
</div>

    )
}

export default ContentSecond;
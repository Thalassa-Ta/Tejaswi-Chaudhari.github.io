import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import helloLight from '../media/hello-light.png';
import helloDark from '../media/hello-dark.png';

const Home = ({darkMode}) => {
    return (
        <div>
            <AttentionSeeker shakeX>
                <h1 className="display-3 hello" align="center">HELLO!<code> I'm Tejaswi</code></h1>
                <h2 className="lead" align="center">I
                    <span
                        class="txt-rotate"
                        data-period="2000"
                        data-rotate='[ " am a Full-Stack Developer.", " can work with NLP.", " love designing.", " am working on Problem Solving.", " am a learner for life!" ]'>
                    </span>
                </h2>
                <center>
                  <img src={darkMode? helloDark : helloLight} alt="hello" className="hello-img"/>
                </center>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home

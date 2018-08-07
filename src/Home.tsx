import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component<any, any> {
    public render() {
        return (
            <div className="Home">
                <aside className="Home__thomas">
                    <div className="myname">
                        <h2 className="Home__name">Thomas McLennan</h2>
                        <h3 className="Home__job">Software Engineer</h3>
                    </div>
                </aside>
                <section className="Home__intro">
                    <h1>Welcome</h1>
                    <p className="blurb">My name is Thomas McLennan. I'm a Software Engineer from Vancouver, BC. I've been building
                    software since 2006. I love building awesome and useful apps. Front-End, Back-End, Testing, I do it all well.
                    Here's how I can help:</p>
                    <div className="analysis">
                        <h3 style={{color:'#0d47a1'}}>Analysis</h3>
                        <p>The tools used for Software design constantly mutate and multiply. When I design software, I design
                          with the future in mind too. I listen to clients and design only the highest quality software.
                        </p>
                    </div>
                    <div className="implementation">
                        <h3 style={{color:'#4a148c'}}>Implementation</h3>
                        <p>Watching a project come together brings me pure joy. I constantly refactor code while working to
                        prevent compounding technical dept. I aspire to write code that's understandable the next time it is read!</p>
                    </div>
                    <div className="automation">
                        <h3 style={{color:'#827717'}}>Automation</h3>
                        <p>DRY means "Don't repeat yourself". It is so important to apply this principal to the
                        the <abbr title="Software Development Life Cycle">SDLC</abbr>. Every second saved with DevOps 
                        is time I can spend solving real buisness problems. </p>
                    </div>
                    <div className="everythingElse">
                        <h3 style={{color:'#004d40'}}>Everything Else</h3>
                        <p>Keeping up with technology is so important. Machine Learning? Relational 
                        Databases? <abbr title="Americans with Disabilities Act">ADA</abbr> compliance? 
                        Mobile apps? Leadership? I've got you covered - <Link to="/message">get in touch</Link>.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;

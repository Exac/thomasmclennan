import * as React from 'react';
import stamp from './img/stamp.png';
import './Message.css';
import letterBack from './svg/letter-back.svg';
import letterClosed from './svg/letter-closed.svg';
import letterFront from './svg/letter-front.svg';
import send from './svg/send.svg';


interface IState {
    email: string, message: string, time: string
};

class Message extends React.Component<{}, IState> {
    public state: IState;
    public sent: boolean;

    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            message: '',
            time: ''
        };
        // if message has been sent
        this.sent = false;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString("en-US") })
        }, 1000);
    }

    public handleChange(ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const key: string = ev.currentTarget.name;
        const value: string = ev.currentTarget.value;
        this.setState(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    public handleSubmit() {
        // validate email
        if (!RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/g).test(this.state.email)) {
            return;
        }
        // validate message
        if (this.state.message.length < 1) {
            return;
        }
        // Contact email obsfucation server
        const url = `https://morning-crag-49607.herokuapp.com/message/`
            + `${this.state.email}/${this.state.message}`;
        const xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        // reset state
        this.setState({ email: '' });
        this.setState({ message: '' });
        this.sent = true;
        setTimeout(() => { this.sent = false }, 6500);
    }

    public render() {
        return (
            <div className={"Message " + (this.sent ? "sent" : "")}>
                <video playsInline={true} autoPlay={true} muted={true} loop={true} id="myVideo"
                    style={{ position: 'fixed', left: 0, bottom: 0, minHeight: '100%', minWidth: '100%', animation: 'plane 10s ease-in-out infinite', zIndex:-1, pointerEvents: 'none'  }}>
                    <source src="plane.mp4" type="video/mp4" />
                </video>
                <img className="Message__letterBack" src={letterBack} />
                <img className="Message__letterClosed" src={letterClosed} />
                <img className="Message__letterFront" src={letterFront} />
                <form className="Message__form" method="post" action="https://morning-crag-49607.herokuapp.com/message">
                    <h2 className="Message__formTitle">Write me a message</h2>
                    <input
                        className="Message__formEmail"
                        value={this.state.email}
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        required={true}
                        placeholder="your-email@example.com" />
                    <textarea
                        className="Message__formMessage"
                        value={this.state.message}
                        onChange={this.handleChange}
                        name="message"
                        required={true}
                        rows={7}
                        placeholder="Hi, my name is John, and I'm..." />
                    <button className="Message__formSubmit" onClick={this.handleSubmit} type="button">
                        <object className="send" type="image/svg+xml" data={send} />
                        <div><span>Send</span></div>
                    </button>
                    <img className="Message__stamp" src={stamp} />
                    <p className="Message__formDescription">
                        <span />
                    </p>
                </form>
                {/* <div className="success">
                    <p>Your message successfully sent!<br /><img style={{ 'width': '4rem', 'padding': '2rem' }} src={mailsuccess} /></p>
                    <div className="Message__how">
                        <div className="how__top">
                            <span className="how__hold" />
                            <span className="how__hold" />
                            <span className="how__hold" />
                            <span className="how__hold" />
                            <span className="how_time">{this.state.time}</span>
                            <span className="how__hold" />
                            <span className="how__hold" />
                            <span className="how__hold" />
                            <span className="how__hold" />
                        </div>
                        <div className="how__red">
                            <span className="how__hold" />
                            <div className="spacer" />
                            <span className="how__hold" />
                            <span className="how__hold" />
                            <span className="how__hold" />
                            <span className="how__hold" />
                        </div>
                        <div className="how__from">
                            <div className="how__hold">msg from {this.state.email}</div>
                            <div className="how__hold" style={{ 'gridRowStart': 'span 2', 'height': '1rem', }} />
                            <div className="how__hold inbox">Inbox</div>
                        </div>
                        <div className="how__to">
                            <div className="how__hold icon" />
                            <div className="how__hold" />
                            <div className="how__hold" style={{ 'gridRowStart': 'span 3' }} />
                            <div className="how__hold" />
                            <div className="how__hold" />
                        </div>
                        <div className="how__msg">
                            <span className="mes">{this.state.message}</span>
                        </div>
                        <div className="how__bot">
                            <div className="how__hold">Reply</div>
                            <div className="how__hold">Forward</div>
                        </div>
                    </div>
                </div> */}
            </div >
        )
    }
}

export default Message;
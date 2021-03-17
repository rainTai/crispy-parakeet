import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
    }

    componentDidMount() {
      //挂载时加载
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      //卸载时加载
      clearInterval(this.timerID);
    }
    tick() {
      //修改状态需要用setState
      this.setState({
        date: new Date(),
      });
    }
    //constructor语句中不能直接return 需要用render包起来
    render() {
      return (
        <div>
          <h1>Hello,Class!</h1>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }
  function Welcome(props) {
    return (
      <div>
        <h1>Hello,{props.name}</h1>
        <Clock />
      </div>
    );
  }
  function Comment(props) {
    return (
      <div className="Comment">
        恋爱为何物
        <img
          className="Avatar"
          src={props.userInfo.avatarUrl}
          alt={props.userInfo.name}
        ></img>
      </div>
    );
  }
  function handleClick2() {
    console.log("我就拿了闷了");
  }
  function handleClick(e) {
    e.preventDefault();
    console.log("you click a target");
  }
  const userInfo = {
    avatarUrl: logo,
    name: "标签",
  };
  return (
    <div className="App">
      <header className="App-header" onClick={handleClick2}>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          
        />

        <Welcome name="Zhuda" />
        <Comment userInfo={userInfo} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

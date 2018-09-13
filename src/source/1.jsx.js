
// JSX : React JSX : 这是一种React独有的语法；
// 把JS和HTML融合在一起，还有数据，样式都放在这个组件下；最终webpack会把这类型语法编译JavaScript；就相当于可以在JS中写HTML；

// 在react，常常把HTML结果写在JSX中；就相当于之前在JS中拼接的字符串；
//在JSX下，像之前在HTML编辑HTML结构的元素就是react元素；是一个虚拟的DOM元素；


import React from "react";
import ReactDOM from "react-dom";
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

// let  h = <div><h1 style={{color:"red"}}>Hello world!</h1></div>;
// // ReactDOM.render (param1,param2) :
// // param1: 放的是一个React元素；
// // param2 : 将要插入的容器中；
// // React  : 是React核心库，那么
// // ReactDOM.render : 将虚拟的DOM元素，插入到真实的DOM元素中并且进行渲染；
// // 将h元素插入到root元素中；
// ReactDOM.render(h,document.querySelector("#root"));

//1.jsx元素放到render中，外面 只能有一个根元素
//2.在React元素中，可以
//在React元素的行间属性中，class要写成className;class是es6的关键字
//另外要采用驼峰写法
//此外，for 要写成htmlFor
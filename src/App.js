import React, { Component } from 'react';
import './App.css';
import Test from './Test/Test';//引入外部组件，注意路径./引用自己的文件，当前路径也要用
import Prop from './Test/Prop';


//有状态组件：类，继承Component才有state，才有生命周期

//存储数据，增删改查  有状态
//传值，逻辑，判断，渲染  无状态，尽量使用无状态

//使用流程：index.html->index.js=>App-> 引入下面div语法->Test
//state：用于改变组件内状态的值（动态）
//props：用于组件通信进行传值
class App extends Component {
  state={
    tests:[
      {count:"一",thing:"吃饭"},
      {count:"二",thing:"睡觉"},
      {count:"三",thing:"玩游戏"},
  ],
  tests2:"anything"
  }

  switchCountHandler = () => {
    //console.log("Hello");
    //this.state.tests[0].count="四";
    this.setState({
      tests : [
        {count:"四",thing:"吃饭"},
        {count:"五",thing:"睡觉"},
        {count:"六",thing:"玩游戏"},
      ]
    })
  }

  switchCountHandler2 = (newCount) => {
    this.setState({
      tests : [
        {count:newCount,thing:"吃饭"},
        {count:"五",thing:"睡觉"},
        {count:"六",thing:"玩游戏"},
      ]
    })
  }

  switchCountHandler3 = (newCount) => {
    this.setState({
      tests : [
        {count:newCount,thing:"吃饭"},
        {count:"五",thing:"睡觉"},
        {count:"六",thing:"玩游戏"},
      ]
    })
  }
  //event事件对象，获取input内容
  countChangedHandler=(event)=>{
    this.setState({
      tests : [
        {count:event.target.value,thing:"吃饭"},
        {count:"五",thing:"睡觉"},
        {count:"六",thing:"玩游戏"},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <h1>Hello React</h1>
          <Test />
          {/* <Prop count="一" thing="吃饭" />
          <Prop count="二" thing="睡觉"></Prop>
          <Prop count="三" thing="玩游戏">啦啦啦啦啦</Prop> */}
          <Prop 
                changed={this.countChangedHandler}
                count={this.state.tests[0].count}
                thing={this.state.tests[0].thing} />
          <Prop count={this.state.tests[1].count}
                thing={this.state.tests[1].thing} />
          <Prop 
                myclick={this.switchCountHandler.bind(this,"六六六")}
                count={this.state.tests[2].count}
                thing={this.state.tests[2].thing} />
          {/* <button onClick={this.switchCountHandler()}>更改状态值</button> */}
          <button onClick={this.switchCountHandler}>更改状态值</button>

          <button onClick={()=> this.switchCountHandler2("二")}>更改状态值2</button>

          <button onClick={this.switchCountHandler3.bind(this,"三")}>更改状态值3</button>
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import todo from './components/todo.json';
// import Counter from './components/Counter';
// import Name from './components/Name';
// import Search from './components/Search';
// const [name,setName]=useState([
//   {
//       id: 0,
//       name: 'Aria',
//       sex: 'girl'
//   }, {
//       id: 1,
//       name: 'Logan',
//       sex: 'boy'
//   }, {
//       id: 2,
//       name: 'Quinn',
//       sex: 'girl'
//   }, {
//       id: 3,
//       name: 'Kai',
//       sex: 'boy'
//   }, {
//       id: 4,
//       name: 'Dashiell',
//       sex: 'boy'
//   }, {
//       id: 5,
//       name: 'John',
//       sex: 'boy'
//   }, {
//       id: 6,
//       name: 'Seraphina',
//       sex: 'girl'
//   }, {
//       id: 7,
//       name: 'Caroline',
//       sex: 'girl'
//   }, {
//       id: 8,
//       name: 'Tobias',
//       sex: 'boy'
//   }, {
//       id: 9,
//       name: 'Harper',
//       sex: 'girl'
//   }, {
//       id: 10,
//       name: 'Mabe',
//       sex: 'girl'
//   }, {
//       id: 11,
//       name: 'Iris',
//       sex: 'girl'
//   }, {
//       id: 12,
//       name: 'Beatrice',
//       sex: 'girl'
//   }, {
//       id: 13,
//       name: 'Knox',
//       sex: 'boy'
//   }, {
//       id: 14,
//       name: 'August',
//       sex: 'boy'
//   }, {
//       id: 15,
//       name: 'Poppy',
//       sex: 'girl'
//   }, {
//       id: 16,
//       name: 'Aurora',
//       sex: 'girl'
//   }, {
//       id: 17,
//       name: 'Wyatt',
//       sex: 'boy'
//   }, {
//       id: 18,
//       name: 'Ezra',
//       sex: 'boy'
//   }, {
//       id: 19,
//       name: 'Emily',
//       sex: 'girl'
//   }, {
//       id: 20,
//       name: 'Sebastian',
//       sex: 'boy'
//   }
// ]);
// function App() {
//   return (
//     <div className="App">
//       {/* <Name nameList={name}/> */}
//     </div>
//   );
// }
class Table extends React.Component{

    constructor(props){
        super(props);
        this.state={
            word:0
        };

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if ( JSON.stringify(prevProps.todo)!==JSON.stringify(this.props.todo)){
            // console.log('here')
            this.setState({word:this.state.word+1})
        }
    }
    render(){
        return(
            <div>
            <h1>It's Update{this.state.word}</h1>
            <table className="table">
                <tbody>
                {(this.props.todo).map((obj,index)=>(
                    <tr key={index}>
                        <td>{obj.name}</td>
                        <td>{obj.dueDate}</td>
                        <td>{obj.grade}</td>
                        <td>
                            <button className="btn btn-warning" onClick={()=>this.props.editTodo(obj,index)}>edit</button>
                        </td>
                    </tr>))}
                </tbody>

            </table>
        </div>
        
        )
    }
} 
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            word:"this is word",
            todo:[],
            singleTodo:{},
            editIndex:-1,
            mount:true
        }
        this.getData=this.getData.bind(this)
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        setTimeout(() => {
            console.log('Our data is fetched');
            this.setState({
            todo: todo,
            })
        }, 1000)
    }
    edit(obj,index){
       this.setState({singleTodo:obj,editIndex:index})
    }
    update(e){
        let obj={};
        obj[e.target.name]=e.target.value;
        let singleTodo={...this.state.singleTodo,...obj};
        this.setState({singleTodo})
    }

    save(){
        let todo=[...this.state.todo];

      todo.splice(this.state.editIndex,1,this.state.singleTodo);
      this.setState({todo,editIndex:-1,singleTodo:{}})
  }
    render(){
        return(
            <div>
                <div>
                    <input name="name" onChange={this.update.bind(this)} placeholder="name" type="text" value={this.state.singleTodo.name}/>
                    <input name="dueDate" onChange={this.update.bind(this)} placeholder="dueDate" type="text" value={this.state.singleTodo.dueDate}/>
                    <input  name="grade" onChange={this.update.bind(this)} placeholder="grade" type="text" value={this.state.singleTodo.grade}/>
                    <button onClick={this.save.bind(this)}>Save</button>
                </div>
                 <Table todo={this.state.todo} editTodo={this.edit.bind(this)}/>
            </div>
    )}
}
export default App;

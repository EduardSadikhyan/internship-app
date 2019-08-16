import React,{Component} from 'react';
import './CrudApp.css'; 
import axios from 'axios';

class CrudApp extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'React CRUD Application',
      act: 0,
      index: '',
      items: []
    }
  } 

    async componentDidMount(){
    this.refs.title.focus();
    let data = await axios.get("http://localhost:8000/api/forTasks");
    data = data.data;
    this.setState({items: data})
    
    // console.log(data);
  }
   


   fSubmit = (e) =>{
      let items = this.state.items;
      let title = this.refs.title.value;
      let description = this.refs.description.value;

    e.preventDefault();
      console.log('raz,raz,raz');
     axios.post("http://localhost:8000/api/forTasks",{title,description},{headers:{ 'Content-Type': 'application/json' }})
     .then(function (response) {
       console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

 

    if(this.state.act === 0){   
      let data = {
        title, description
      }
      items.push(data);
    }else{                      
      let index = this.state.index;
      items[index].title = title;
      items[index].description = description;
    }    

    this.setState({
      items: items,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.title.focus();
  }

  fRemove = (index , id) => {
    let title = this.refs.title.value;
    let description = this.refs.description.value;
    // let index = this.state.index;
    console.log("destroyed")
    axios.delete("http://localhost:8000/api/forTasks/"+id,{title,description},{headers:{ 'Content-Type': 'application/json' }}) 
    .then(function(response) {
      console.log(response)
  })
  .catch(function(error) {
      console.log(error)
  })


    let items = this.state.items;
    items.splice(index,1);
    this.setState({
      items: items
    });

    this.refs.myForm.reset();
    this.refs.title.focus();
  }

  fEdit = (index, id) => {
    let data = this.state.items[index];
    let title = this.refs.title.value;
    let description = this.refs.description.value;
    
    axios.put("http://localhost:8000/api/forTasks/"+id,{title,description},{headers:{ 'Content-Type': 'application/json' }}) 
    .then(function(response) {
      console.log(response)
  })
  .catch(function(error) {
      console.log(error)
  })
    
    this.refs.title.value = data.title;
    this.refs.description.value = data.description;
    this.setState({
      act: 1,
      index: index
    });

    this.refs.title.focus();
    // !!!
  }  

  render() {
    let items = this.state.items;
    return (
      <div className="CrudApp">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="title" placeholder="your title" className="formField" />
          <input type="text" ref="description" placeholder="your description" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <p>
          {items.map((data, i) =>
            <li key={data.id} className="myList">
              {i+1}.{data.title}, {data.description} 
              <button onClick={()=>this.fRemove(i , data.id)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i ,data.id)} className="myListButton">edit </button>
            </li>
          )}
        </p>
      </div>
    );
  }
}



export default CrudApp;
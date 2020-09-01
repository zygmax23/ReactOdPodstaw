import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from '../Button/Button';
import Title from '../Title/Title';
import AppContext from "../../context/context";

const types={
  twitter: 'twitter',
  article: 'article',
  note: 'note'
}

const descriptions={
  twitter:'twitter account',
  article:'article',
  note:'note',
}


class Form  extends React.Component{

  state={
    type: types.twitter,
    title: '',
    link: '',
    image: '',
    description: '',
  }

  handleRadioButtonChange = (type)=>{
    this.setState({
      type: type
    })
  }

  handleInputChange = e =>{
     this.setState({
      [e.target.name]: e.target.value
     })
  }

  render(){

    const {type} = this.state;

    return(
      <AppContext.Consumer>
        {(context)=>(
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[type]}</Title>
            <form autoComplete="off" className={styles.form} onSubmit={(e)=>context.addItem(e,this.state)}>
              <label htmlFor ={types.twitter}>Twitter</label>
              <input id={types.twitter} type="radio" onChange={()=>this.handleRadioButtonChange(types.twitter)} checked={this.state.type=== types.twitter} />
              <label htmlFor ={types.article}>Article</label>
              <input id={types.article} type="radio" onChange={()=>this.handleRadioButtonChange(types.article)} checked={this.state.type=== types.article} />
              <label htmlFor ={types.note}>Note</label>
              <input id={types.note} type="radio" onChange={()=>this.handleRadioButtonChange(types.note)} checked={this.state.type=== types.note} />

              <Input onChange={this.handleInputChange} value={this.state.title} name="title"label={type===types.twitter? "Twitter Name": "Title"} maxLength={30}/> 
              {type !== types.note ? <Input onChange={this.handleInputChange} value={this.state.link} name="link" label={type===types.twitter? "Twitter Link": "Link"}/> : null }
              <Input onChange={this.handleInputChange} value={this.state.image} name="image"label="Image" />
              <Input onChange={this.handleInputChange} value={this.state.description} tag="textarea" name="description"label="Description"/>

              <Button type="submit" >add new item</Button>
            </form>
          </div>
        )}
    </AppContext.Consumer>
    )
  }
}

export default Form;

import React from 'react';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import './index.css';
//import MyComponent from './components/MyComponent/MyComponent';
import {twitterAccounts as initialStateItems} from "../../data/twitterAccounts.js";
import Form from '../../components/Form/Form';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AppContext from '../../context/context';

class Root extends React.Component{

  state={
    twitter:[],
    article:[],
    note:[],
    isModalOpen: false
  }

  addItem=(e, newItem)=>{
    e.preventDefault();

    this.setState(prevState=>({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }));
    
   this.closeModal();
  }

  openModal= () =>{
    this.setState({
      isModalOpen: true
    });
  }

  closeModal= () =>{
    this.setState({
      isModalOpen: false
    });
  }

  render(){

    const {isModalOpen} = this.state;
    const contextElements={
      ...this.state,
      addItem: this.addItem
    }

    return(
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          {isModalOpen ? <Modal closeModalFn={this.closeModal} /> : null }
          <Switch>
            <Route exact path="/" component={TwittersView}/>
            <Route path="/articles" component={ArticlesView}/>
            <Route path="/notes" component={NotesView}/>
            <Route path="/notes/:id" component={NotesView}/>
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default Root;

import React from "react";
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import AppContext from '../../context/context';

const NotesView =() =>(
    <AppContext.Consumer>
        {(context)=>(
            <ListWrapper items={context.note}/>
        )}
    </AppContext.Consumer>
);

export default NotesView;
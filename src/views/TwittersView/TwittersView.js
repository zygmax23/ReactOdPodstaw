import React from "react";
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import AppContext from '../../context/context';

const TwittersView =() =>(
    <AppContext.Consumer>
        {(context)=>(
            <ListWrapper items={context.twitter}/>
        )}
    </AppContext.Consumer>
);

export default TwittersView;
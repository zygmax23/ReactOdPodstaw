import React from "react";
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import AppContext from '../../context/context';

const ArticlesView =() =>(
    <AppContext.Consumer>
        {(context)=>(
            <ListWrapper items={context.article}/>
        )}
    </AppContext.Consumer>
);

export default ArticlesView;
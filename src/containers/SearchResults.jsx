import React,{PropTypes} from 'react';
import Content from './Content.jsx';
import { connector } from '../tools';

const SearchResults = () =>{
    return (<Content>
    </Content>);
};

SearchResults.propTypes ={
    values: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({});
const actionList = {};
export default connector(mapStateToProps, actionList)(SearchResults);
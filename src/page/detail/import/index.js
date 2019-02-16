import React, { PureComponent } from 'react';

import { DetailWrapper } from '../style.js';
import InfoTable from './components/table';
import Actions from './components/actions';
import Header from '../common/header';
import {actionCreators as headerActionCreators} from "../common/header/store";
import {connect} from "react-redux";
import {actionCreators} from "./store";

class Import extends PureComponent {
    componentWillMount() {
        this.props.activeWhichButton('import');
        this.props.changeSearch(false)
    }

    render() {
        return(
            <div>
                <Header />
                <DetailWrapper>
                    <Actions />
                    <InfoTable />
                </DetailWrapper>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    activeWhichButton(whichButton){
        dispatch(headerActionCreators.activeWhichButton(whichButton));
    },
    changeSearch(state){
        dispatch(actionCreators.changeSearch(state));
    },
});

export default connect(null, mapDispatchToProps)(Import);
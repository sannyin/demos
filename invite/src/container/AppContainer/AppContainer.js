import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import styles from './AppContainer.scss'
import Player from '../../component/Player/Player'
// import TestContainer from '../TestContainer'

//异步加载
import Bundle from '../../router/bundle'

const CallContainer = (props) => (
    <Bundle load={() => import('../CallContainer/CallContainer')}>
        {(CallContainer) => <CallContainer {...props} />}
    </Bundle>
);
const TalkContainer = (props) => (
    <Bundle load={() => import('../TalkContainer/TalkContainer')}>
        {(TalkContainer) => <TalkContainer {...props} />}
    </Bundle>
);
const DeskContainer = (props) => (
    <Bundle load={() => import('../DeskContainer/DeskContainer')}>
        {(DeskContainer) => <DeskContainer {...props} />}
    </Bundle>
);
const PhoneContainer = (props) => (
    <Bundle load={() => import('../PhoneContainer/PhoneContainer')}>
        {(PhoneContainer) => <PhoneContainer {...props} />}
    </Bundle>
);
const MapContainer = (props) => (
    <Bundle load={() => import('../MapContainer/MapContainer')}>
        {(MapContainer) => <MapContainer {...props} />}
    </Bundle>
);

class AppContainer extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     index: 0
        // }
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log(nextProps, prevState)
    //     if (prevState.music !== nextProps.music) {
    //         return {
    //             music: nextProps.music,
    //             music_file: music_file,
    //             index: prevState.index + 1
    //         };
    //     }
    //     return null;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps, nextState)
    //     // if (this.props.music !== nextProps.music) {
    //     //     return true;			//更新
    //     // }
    //     // if (this.state.music !== nextState.music) {
    //     //     return true;			//更新
    //     // }
    //     return false;      //不更新
    // }
    componentDidMount(){
        
    }

    render() {
        console.log('app--render')
        return (
            <div className={styles.page}>
                <Player />
                <Route exact path="/" component={CallContainer} />
                <Route path="/call" component={CallContainer} />
                <Route path="/talk" component={TalkContainer} />
                <Route path="/desk" component={DeskContainer} />
                <Route path="/map" component={MapContainer} />
                <Route path="/phone" component={PhoneContainer} />
                {/* <Route path="*" component={CallContainer} /> */}
            </div>
        )
    }
}

export default AppContainer



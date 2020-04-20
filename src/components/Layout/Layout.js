import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false   });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => { 
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () { 
        console.log(this.state.showSideDrawer);
        return (
            <Auxiliary>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    isAuth={this.props.isAuthenticated}
                />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler} 
                    isAuth={this.props.isAuthenticated}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
    )};
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);
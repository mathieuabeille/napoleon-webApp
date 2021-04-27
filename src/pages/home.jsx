import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../../assets/stylesheets/home.scss';
import NavBar from '../components/navbar';
import Hero from '../containers/hero';
import ContentLeft from '../containers/ContentLeft';
import ContentRight from '../containers/ContentRight';
import DotsNavigation from '../components/DotsNavigation.jsx';
import { fetchDatas } from '../actions'


class Home extends Component{

  componentWillMount() {
   this.props.fetchDatas();
 }




  render() {
      return (
        <div>
          <NavBar/>
          <Hero
            datas={this.props.datas}
          />
          <DotsNavigation
            datas={this.props.datas}
          />
          <ContentLeft
            datas={this.props.datas}
          />
          <ContentRight
            datas={this.props.datas}
          />
        </div>
      );
  }
}

function mapStateToProps(state) {
 return {
  datas: state.datas
 };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchDatas }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);

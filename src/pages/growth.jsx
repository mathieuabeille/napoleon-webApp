
import React, {Component} from 'react';
import '../../assets/stylesheets/home.scss';
import NavBar from '../components/navbar';


class Growth extends Component{
  render() {
      return (
        <div>
        <NavBar/>
          <div className='hello'>
            Hello Growth
          </div>
        </div>
      );
  }
}

export default Growth;

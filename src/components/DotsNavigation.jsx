import React,{ Component, useState } from 'react';
import Dot from './Dots.jsx'
import '../../assets/stylesheets/Dots.scss';



class DotsNavigation extends Component{
  constructor(props) {
    super(props);
  }

  dot() {
    if(this.props.datas.records){
      return(
        <div className="DotsNavigation">
        {this.props.datas.records.map((item, i) => (
        <Dot
          name={item.fields.Title}
          key={i}
          />
          ))}
    </div>
    )
    }
    else{
      return (<div></div>)
    }
  }


render() {
    return (
      this.dot()
      );
}
}




export default DotsNavigation;

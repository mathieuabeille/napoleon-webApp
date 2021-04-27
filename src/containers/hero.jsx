import React, {Component} from 'react';
import '../../assets/stylesheets/hero.scss';


class Hero extends Component{
  constructor(props) {
    super(props);
  }


  hero() {
    if(this.props.datas.records) {
      return this.props.datas.records.map(item => (
          <div
            className="wrapper"
            key={item.id}
          >
            <div>
              <h1 className="glitch" data-content={item.fields.H1}>
              {item.fields.H1}
                <span className="glitch" data-content={item.fields.H2}>{item.fields.H2}</span>
              </h1>
            </div>
            <div className="btn-yellow">
              {item.fields.CTA}
            </div>
          </div>
        ))
    }
    else {
      return ( <div>Loading</div>
        )
    }
  }


  render() {
    return (
      this.hero()
      );
}

}

export default Hero;

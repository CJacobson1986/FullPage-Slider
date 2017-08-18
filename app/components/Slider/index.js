/**
*
* Slider
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

import LeftIcon from 'react-icons/lib/fa/chevron-left';
import RightIcon from 'react-icons/lib/fa/chevron-right';

export default class Slider extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      images: ['christmas-wolf.jpg', 'gray-wolf-alaska.jpg', 'gray-wolf-closeup.jpg', 'moonwolf.jpg'],
      activeIndex:0,
      slideStyle: "slideImage"
    }
  }

  componentDidMount() {
    this.autoSlide();
  }

  renderImage = () => {
    var images = this.state.images;
    var activeIndex = this.state.activeIndex;

    for(var i=0; i < images.length; i++)
    {
      if(i === activeIndex)
      {
        return images[i];
      }
    }
  }

  nextImage = () => {
    var images = this.state.images;
    var activeIndex = this.state.activeIndex;

    if(activeIndex + 1 < images.length){
      this.setState({
        activeIndex: activeIndex +1,
        slideStyle:"slideImage slideAnimation"
      })
    }
    else {
      this.setState({
        activeIndex: 0,
        slideStyle:"slideImage slideAnimation"
      })
    }
  }

  previousImage = () => {
    var images = this.state.images;
    var activeIndex = this.state.activeIndex;

    if(activeIndex - 1 >= 0){
      this.setState({
        activeIndex: activeIndex -1,
        slideStyle:"slideImage slideAnimation"
      })
    }
    else{
    this.setState({
      activeIndex:images.length - 1,
      slideStyle:"slideImage slideAnimation"
    })
    }
  }

  autoSlide = () => {
    var _this = this;
    setInterval(function() {
      _this.nextImage();
    }, 5000);
  }


  render() {
    return (
      <div>
            <div className="slider">
              <img className={this.state.slideStyle} src={require('../../images/'+this.renderImage())}/>
              <LeftIcon className="sliderIcon" onClick={this.previousImage}/>
              <RightIcon className="sliderIcon" onClick={this.nextImage}/>
          </div>
      </div>
    );
  }

}


Slider.contextTypes = {
  router: React.PropTypes.object
};

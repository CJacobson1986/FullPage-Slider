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
      slideStyle: "slideImage slideAnimation"
    }
  }

  componentDidMount() {
  this.autoSlide();
  }

  setAnimation =() => {
  this.setState({
    slideStyle: "slideImage slideAnimation"
    });
  var _this=this;
  }

  setAnimation2 =() => {
    this.setState({
    slideStyle: "slideImage slideAnimationclick"
    });
  var _this=this;
  }

  resetAnimation =() => {
   this.setState ({
     slideStyle: "slideImage"
    })
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
    });
  }
  else {
    this.setState({
      activeIndex: 0,
    });
  }
  this.setAnimation()
  }

  previousImage = () => {
  var images = this.state.images;
  var activeIndex = this.state.activeIndex;

  if(activeIndex - 1 >= 0){
    this.setState({
      activeIndex: activeIndex -1,
    })
  }
  else{
  this.setState({
    activeIndex:images.length - 1,
  });
  }
  this.setAnimation()
  }

  nextImageclick = () => {
    var images = this.state.images;
    var activeIndex = this.state.activeIndex;

    if(activeIndex + 1 < images.length){
      this.setState({
        activeIndex: activeIndex +1,
      });
    }
    else {
      this.setState({
        activeIndex: 0,
      });
    }
  }

  previousImageclick = () => {
    var images = this.state.images;
    var activeIndex = this.state.activeIndex;

    if(activeIndex - 1 >= 0){
      this.setState({
        activeIndex: activeIndex -1,
      })
    }
    else{
    this.setState({
      activeIndex:images.length - 1,
    });
    }
  }


  autoSlide = () => {
  var _this = this;
  clearInterval(this.state.theInterval);
  let interval = setInterval(function() {
    _this.nextImage();
  }, 5000);
  this.setState({
    theInterval: interval,
  })
  }

  autoSlideout = () => {
  var _this = this;
  clearInterval(this.state.theInterval);
  let interval = setInterval(function() {
    _this.nextImage();
  }, 5000);
  this.setState({
    theInterval: interval,
  })
  }

  stopAutoslide = () => {
  clearInterval(this.state.theInterval);
  this.setState ({
    slideStyle: "stopAutoslide slideImage"
  })
  }

  render() {
    return (
      <div>
            <div className="slider">
              <img className={this.state.slideStyle} src={require('../../images/'+this.renderImage())}/>
              <LeftIcon className="sliderIcon"
                onClick={this.previousImageclick}
                onMouseOver={this.stopAutoslide}
                onMouseOut={this.autoSlideout}
                />
              <RightIcon className="sliderIcon"
                onClick={this.nextImageclick}
                onMouseOver={this.stopAutoslide}
                onMouseOut={this.autoSlideout}
                />
          </div>
      </div>
    );
  }
}


Slider.contextTypes = {
  router: React.PropTypes.object
};

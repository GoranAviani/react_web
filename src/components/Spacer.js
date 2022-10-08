import React from "react";

const Spacer = ({x, y}) =>  {
    this.state = {
      style: {}
    };
    if(x) {
      this.state.style.width = x;
    }else{
      this.state.style.width = "0";
    }
    if(y) {
      this.state.style.height = y;
    }else{
      this.state.style.height = "0";
    }



    return (
      <div style={this.state.style}/>
    )

}
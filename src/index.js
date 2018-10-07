import { h, app } from "hyperapp"

const state = {
  index: 0,
  imgList:["./rewrite-images/banner1.png","./rewrite-images/banner2.png","./images/photo3.png","./images/photo4.png"]
}

const actions = {
  next: function(){
    return(
      function(state){
        var newIndex;
        if(state.index>=state.imgList.length-1){
          newIndex=0
        }else{
          newIndex=state.index+1
        }
        var obj={
          index:newIndex
        }
        return obj;
      } 
    )
  },

  previous:function(){
    return(
      function(state){
        var newIndex;
        if(state.index<=0){
          newIndex=state.imgList.length-1
        }else{
          newIndex=state.index-1
        }
        var obj={
          index:newIndex
        }
        return obj;
      }
    )
  },
}

const view = (state, actions) => (
  <div className="container">
  <div className="code-box center">
    <div className="container-border center">
        <div className="carousel"
         style={{
          transform: "translateX(" + -1*state.index*500 + "px)"
          }}>
          {state.imgList.map(item =>{
            return<img src= {item}/>
          })}
        </div>
          <img className="arrow right-arrow" onclick={() => actions.next()} src="./images/photo8.png"/>
          <img className="arrow left-arrow" onclick={() => actions.previous()} src="./images/photo7.png"/>
    </div>
  </div>
  </div>
)

app(state, actions, view, document.getELmentByClassName("image"))
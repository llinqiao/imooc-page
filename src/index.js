import { h, app } from "hyperapp"

const state = {
  index: 0,
  imgList:["./rewrite-images/banner1.jpg","./rewrite-images/banner2.jpg","./rewrite-images/banner3.jpg","./rewrite-images/banner4.jpg","./rewrite-images/banner5.jpg","./rewrite-images/banner6.jpg"]
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
  <div className="bannerContent">
    <div className="image">
      <a href="https://imooc.com">  
        <div className="carousel"
         style={{
          transform: "translateX(" + -1*state.index*936 + "px)"
          }}>
          {state.imgList.map(item =>{
            return<img className="carousel-image"src= {item}/>
          })}
        </div>
      </a>
          <img className="arrow-left" onclick={() => actions.previous()} src="./rewrite-images/banner2.png"/>
          <img className="arrow-right" onclick={() => actions.next()} src="./rewrite-images/banner3.png"/>
      
    </div>
  </div>
)

app(state, actions, view, document.getElementById("bannerContent"))

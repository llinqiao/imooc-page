
import { h, app } from "hyperapp"

const state = {
  index: 0,
  imgList:["./images/photo1.png","./images/photo2.png","./images/photo3.png","./images/photo4.png"]
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

  /*setIndex:function(value){
    return(
      function(state){
       var obj={
         index:value
        }
       return obj;
      } 
    )
  }*/

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

app(state, actions, view, document.body)





import { h, app } from "hyperapp"

const state = {
  index: 0,
  imgList:["./images/photo1.png","./images/photo2.png","./images/photo3.png","./images/photo4.png"]
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

  /*setIndex:function(value){
    return(
      function(state){
       var obj={
         index:value
        }
       return obj;
      } 
    )
  }*/

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
        <div class="buttons">
				  {state.imgList.map((item,index) =>{
            return <button className={
              index===state.index?"button-item button-special":"button-item"
            }
             onclick={() => actions.setIndex(index)}/>
          })}
			  </div>
    </div>
  </div>
  </div>
)

app(state, actions, view, document.body)



/*原始版本 import { h, app } from "hyperapp"

const state = {
  index: 0,
  amount: 4,
}

const actions = {
  next: function(value){
    return(
      function(state){
        var newIndex;
        if(state.index>=state.amount-1){
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

  previous:function(value){
    return(
      function(state){
        var newIndex;
        if(state.index<=0){
          newIndex=state.amount-1
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
    <div className="container-border center">
        <div className="carousel" style={{transform:"translateX(" + -1*state.index*500 + "px)"}}>
          <img src="./images/photo1.png"/>
			    <img src="./images/photo2.png"/>
			    <img src="./images/photo3.png"/>
			    <img src="./images/photo4.png"/>
        </div>
        <button className="arrow right-arrow" onclick={() => actions.next(1)}>右边</button>
        <button className="arrow left-arrow" onclick={() => actions.previous(1)}>左边</button>
    </div>
  </div>
)

app(state, actions, view, document.body)*/

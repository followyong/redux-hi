import React from 'react'
import store from './store'
import {connect} from 'react-redux'

class CommentBox extends React.Component{
  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(store.getState())
    console.log(this.props.postId)
    let newComment = this.comment.value
    let newPostId = this.props.postId
    store.dispatch({type:'ADD_COMMENT',comment:newComment,postId:newPostId})
    this.myForm.reset()
  }
  render(){
    let {comments,postId} = this.props
    let myComments = comments.filter(value => value.postId ===  postId ).map(item => {
       return item.content
     })//返回每一个id下对应的每一条评论的内容
     console.log(myComments)
    return(
      <div className="comment">
          <div className="commentbox">
              <div className="every-comment">
                {
                  myComments.map(item => (
                    <li key={Math.random()}>{item}</li>
                  ))
                }
              </div>
              <form onSubmit={this.handleSubmit} ref={value=>this.myForm=value} className="comment-form">
                <input type="text"  className="comment-input"
                  ref={value => this.comment = value} />
                <button type="submit" className="comment-button">提交</button>
              </form>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  comments:state.comments
})

export default connect(mapStateToProps)(CommentBox)

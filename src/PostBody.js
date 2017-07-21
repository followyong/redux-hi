import React from 'react'
import {connect} from 'react-redux'
import store from './store'
import {Link} from 'react-router-dom'

class PostBody extends React.Component{
  handleChange = ()=>{
    console.log(store.getState())
    store.dispatch({type:'INCREMENT_LIKE',postId:this.props.postId})
    //Store里的dispatch方法主要完成两件事：
    //1、根据action查询reducer中变更state的方法，更新store tree
    //2、变更store tree后，依次执行所有响应函数
  }
  render(){
    let {postId,posts,comments} = this.props
    let currentPost = posts.filter(value => value.postId === postId )[0]
    console.log(currentPost)
    let myComments = comments.filter(value => value.postId ===  postId ).map(item => {
       return item.content
     })
    return(
      <div className="post">
        <div className="postbody">
          <div className="title">
            <Link to={`/post/${currentPost.postId}`}>{currentPost.title}</Link>
          </div>
          <p>
            {myComments.length} 评论
          </p>
          <div className="likes-num" onClick={this.handleChange}>
            {currentPost.likes} 赞
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments:state.comments,
  posts:state.posts
}) //从store中获取数据

export default connect(mapStateToProps)(PostBody)

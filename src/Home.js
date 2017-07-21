import React from 'react'
import PostBody from './PostBody'
import { connect } from 'react-redux'

class Home extends React.Component{
  render(){
    let { posts} = this.props
    console.log('posts', posts)
    return(
      <div>
        {
          posts.map(item=>(
            <PostBody key={item.postId} postId={item.postId} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Home)

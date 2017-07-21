import React from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'




class Postpage extends React.Component{

  render(){
    console.log(this.props)
    let {id} = this.props.match.params
    return(
            <div>
              <div>
                <PostBody postId={id} />
              </div>
              <div>
                <CommentBox postId={id}/>
              </div>

            </div>

    )
  }
}

export default Postpage

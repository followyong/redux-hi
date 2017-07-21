let posts=[
  {
    postId:'1',
    likes:0,
    title:'git技巧'
  },
  {
    postId:'2',
    likes:3,
    title:'学习Redux'
  }
]

export default function postReducer(state = posts ,action){
  switch(action.type){
    case 'INCREMENT_LIKE':
      let stateCopy = [...[],...state]//把state数组进行复制
      console.log(stateCopy)
      console.log(state)
      stateCopy.map(item =>{
        if(item.postId ===action.postId){
          item.likes ++
        }
        return item
      })//将拷贝的数组进行map操作，当点的文章的postId和传过来的postId一样的时候它的likes数加1

      return stateCopy
    default:
      return state
  }
}

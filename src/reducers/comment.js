
let comments=[
 {
   content:'hello1',
   postId: '1'
 },
 {
   content:'yeh',
   postId: '1'
 },
 {
   content:'hello2',
   postId: '2'
 }
]

export default function commentReducer(state = comments ,action){
  // console.log(action)
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state,{postId:action.postId,content:action.comment}]
    default:
      return state
  }
}

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mergeData, storeComments, storePosts, storeUsers } from "./actions/storeDataAction";
import { useGetPosts } from "./hooks/dataFetch/useGetPosts";
import { useGetComments } from "./hooks/dataFetch/useGetReplies";
import { useGetUsers } from "./hooks/dataFetch/useGetUsers";
import { MainRouter } from "./route/MainRouter";



  function App() {
  const dispatch = useDispatch();
  const Users = useGetUsers();
  const Posts = useGetPosts();
  const Comments = useGetComments();
  const UsersData = useSelector(state => state.storage_reducer)
    // debugger
useEffect(() => {
    UsersData.users.length === 0 && dispatch(storeUsers(Users.users))
  }, [ Users.users.length ])

useEffect(() => {
    UsersData.posts.length === 0 && dispatch(storePosts(Posts.posts))
  }, [ Posts.posts.length ])
  
useEffect(() => {
    UsersData.comments.length === 0 && dispatch(storeComments(Comments.comments))
  }, [ Comments.comments.length ])
  // debugger
useEffect(() => {
  if( UsersData.posts.length > 0 ) {
    dispatch(mergeData())
  }
}, [ Posts ])
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;

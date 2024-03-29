import { useState, useEffect } from "react";
import DeleteForm from "../DeleteForm/DeleteForm";
import MessageForm from "../MessageForm/MessageForm";
import "./SelectedPostView.css"

export default function SelectedPost({selectedPostId, setSelectedPostId, allPosts,setAllPosts}){
  const [filteredSelectedPost, setFilteredSelectedPost] = useState(null);
        console.log(typeof selectedPostId);
        useEffect(() => {
          
            async function fetchSPost(){
              const filteredPost = allPosts.find((e) => {
                console.log(e)
                if(e._id===selectedPostId){
                  return true
    
                }
              })
              if(filteredPost){
                setFilteredSelectedPost(filteredPost)
              }
           else{ 
setFilteredSelectedPost(null)
           }
        } 
    
    if(selectedPostId){
        fetchSPost();
    }
}, [selectedPostId])



return (
    <div className="postPage">
    
      {filteredSelectedPost ? (
        <div>
          <h2 id="selected-page">{filteredSelectedPost.title} </h2>
          <table id="selected-post">
            <tbody>
             
              <tr>
                <td>Price:{filteredSelectedPost.price}</td>
              </tr>
              <tr>
                <td>Location:{filteredSelectedPost.location}</td>
              </tr>
              <tr>
                <td>{filteredSelectedPost.WillDeliver}</td>
              </tr>
              <tr>
                <td>{filteredSelectedPost.description}</td>
              </tr>
              
              <tr>
                <td>Posted By: {filteredSelectedPost.author.username}</td>
             </tr>
              <tr>
                <td>
                Created on: {filteredSelectedPost.createdAt}
                </td>
              </tr>
              
            </tbody>
          </table>
         
<div className="action-buttons-area">
          <MessageForm id="messageform1" postId={selectedPostId} />
          <DeleteForm id="Delete-Button" postId={selectedPostId} setAllPosts={setAllPosts} filteredSelectedPost={filteredSelectedPost}/>
          <button id="The-Button" onClick={() => setSelectedPostId(null)}>Go Back</button>
         </div>
        </div>
      ) : null}
    </div>
  );
      }  
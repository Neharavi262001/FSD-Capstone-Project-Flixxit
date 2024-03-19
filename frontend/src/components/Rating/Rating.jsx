import React, { useEffect, useState } from 'react'
import {FaThumbsDown,FaThumbsUp,FaRegThumbsDown,FaRegThumbsUp} from 'react-icons/fa'
import './rating.css'
import{useLikeMutation,useDislikeMutation} from '../../redux/user/userApiSlice'


const Rating = ({rating,contentId}) => {
    const [liked,setLiked]=useState(false)
    const [disliked,setDisliked]=useState(false)

    const [likeMutation] = useLikeMutation();
    const [dislikeMutation] = useDislikeMutation();

    useEffect(() => {
      setLiked(false);
      setDisliked(false);
  }, [contentId]);


    const handleLike=async()=>{
      setLiked(true);
      setDisliked(false);
      try {
        await likeMutation(contentId);
        
      } catch (error) {
        console.error('Error liking:', error);
      }
    }

    const handleDislike = async () => {
      setLiked(false);
      setDisliked(true);
      try {
        await dislikeMutation(contentId);
        
      } catch (error) {
        console.error('Error disliking:', error);
      }
    };


  return (
    <div className='rating-container'>
        <div className="rating-box">
        <button className={`details-btns ${liked ? 'disabled' : ''}`} onClick={handleLike}>
          {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
        </button>
        <span>{rating?.likes}</span>
        </div>

        <div className="rating-box">
        <button className={`details-btns ${disliked ? 'disabled' : ''}`} onClick={handleDislike}>
          {disliked ? <FaThumbsDown /> : <FaRegThumbsDown />}
        </button>
        <span>{rating?.dislikes}</span>
        </div>
    </div>
  )
}

export default Rating

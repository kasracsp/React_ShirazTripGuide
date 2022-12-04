const getReplies = (states, id) => {
  const filterComments = states.filter((item) => item.parentId === id);
  return filterComments;
};
const doesLikeComment = (likes, id) => {
  if(likes.length===0) return false
  const findComment = !!likes.find((item) => item.comment.id === id);
  return findComment;
};
const giveLikeId = (likes, id) => {
  if(likes.length===0) return false
  const findLikeId = likes.find((item) => item.comment.id === id);
  return findLikeId.id;
};

export { getReplies, doesLikeComment,giveLikeId };

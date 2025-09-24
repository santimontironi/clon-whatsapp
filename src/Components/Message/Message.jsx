const Message = ({id,author,timestamp,content}) => {
  return (
    <div>
        <span>{author}</span>
        <p>{content}</p>
        <span>{timestamp}</span>
    </div>
  )
}

export default Message
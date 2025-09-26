import './Message.css'

const Message = ({id,author,timestamp,content}) => {
  return (
    <div className={`message-container ${author === 'YO' ? 'message-container-right' : 'message-container-left'}`}>
      <div>
          <p>{content}</p>
          <span className='message-container-content-date'>{timestamp}</span>
      </div>
    </div>
  )
}

export default Message
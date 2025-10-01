import { IoCheckmarkDone } from "react-icons/io5";
import './Message.css'

const Message = ({id,author,timestamp,content}) => {
  return (
    <div className={`message-container ${author === 'YO' ? 'message-container-right' : 'message-container-left'}`}>
      <div>
          <p>{content}</p>
          <span className='message-container-content-date'>{timestamp}</span>
          {author === 'YO' && <IoCheckmarkDone className="message-container-content-checkmark" color="#34B7F1" size={20}/>}
      </div>
    </div>
  )
}

export default Message
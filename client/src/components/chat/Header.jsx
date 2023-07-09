import {ChatBubbleLeftRightIcon, PhoneIcon} from '@heroicons/react/24/solid'
function Header({ chat }) {
  return (
    <div className="chat-header">
        <div className="flexbetween">
            <ChatBubbleLeftRightIcon className='icon-chat' />
            <h3>{chat.title}</h3>
        </div>
        <div className="flexbetween">
            <PhoneIcon className='icon-phone' />
            {chat.description !== "⬅️ ⬅️ ⬅️" ?  (<p className='header-text'>{chat.description}</p>) : <p className='header-text'>No Chats!</p>}
        </div>
    </div>
  )
}

export default Header
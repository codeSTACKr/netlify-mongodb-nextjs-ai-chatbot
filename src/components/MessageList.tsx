import { useMessages } from 'utils/useMessages'
import { useState, useEffect } from 'react'
import { getConversationHistory } from 'utils/useConversations'


const MessagesList = () => {
  const { messages,setMessages, isLoadingAnswer } = useMessages()
  const [messageHistory, setMessageHistory] = useState<any[]>([]);

  useEffect(() => {
    getConversationHistory().then((data) => {
      console.log(data);
      setMessageHistory(data.history);
    });
  }, []);


  return (
    <div className="main-chat">
      <div className="searchConversation">
        <h2> Conversation History </h2>
        <hr></hr>
        
        <div className="conversationHistory">
          
            {messageHistory?.map((message, i) => {
              // show first 10 characters of the last message
             return(
              <div
              id={`message-${i}`}
              className={`flex mb-4 fade-up historyMessage`}
              key={message._id}
              onClick={() => { setMessages(message.chat)}}
            >
              {message.chat[message.chat.length-1].content.substring(0,50)}...
           
             </div>)

        })}
        </div>

      </div>
    <div className="max-w-3xl mx-auto chat-area">
      {messages?.map((message, i) => {
        const isUser = message.role === 'user'
        if (message.role === 'system') return null
        return (
          <div
            id={`message-${i}`}
            className={`flex mb-4 fade-up ${isUser ? 'justify-end' : 'justify-start'} ${
              i === 1 ? 'max-w-md' : ''
            }`}
            key={message.content}
          >
            {!isUser && (
              <img
              
                src="/img/logo.png"
                className="w-9 h-9 rounded-full"
                alt="avatar"
              />
            )}
            <div
              style={{ maxWidth: 'calc(100% - 45px)' }}
              className={`group relative px-4 py-3 rounded-xl shadow message
                ${isUser ? 'mr-2 bg-gradient-to-br from-primary-700 to-primary-600 text-white' 
                : 'ml-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200'}
                overflow-wrap break-words text-base font-normal hover:bg-gray-300 focus:outline-none transition ease-in-out duration-300`}
            >
              {message.content}
            </div>
            {isUser && (
              <img
                src="https://www.teamsmart.ai/next-assets/profile-image.png"
                className="w-9 h-9 rounded-full cursor-pointer"
                alt="avatar"
              />
            )}
          </div>
        )
      })}
      {isLoadingAnswer && (
        <div className="flex justify-start mb-4">
          <img
            src="https://www.teamsmart.ai/next-assets/team/ai.jpg"
            className="w-9 h-9 rounded-full"
            alt="avatar"
          />
          <div className="loader ml-2 p-2.5 px-4 bg-gray-200 dark:bg-gray-800 rounded-full space-x-1.5 flex justify-between items-center relative">
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default MessagesList

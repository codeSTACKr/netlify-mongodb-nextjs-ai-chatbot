import { Button } from '@apideck/components'
import { newConversation } from 'utils/useConversations'
import { useMessages } from 'utils/useMessages'

// Component to create a new chat
const NewChat = () => {

    const { clearMessages } = useMessages()
    const newChat = async () => {
        
        // Create a new conversation
       await newConversation()
       // Clear the UI messages
       clearMessages();
    
    }
    
    return (
        <div className="flex justify-center">
        <Button onClick={newChat} className="mt-4" size="small">
            New Chat
        </Button>
        </div>
    )
    }

export default NewChat
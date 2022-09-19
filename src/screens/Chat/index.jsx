import React, {useCallback, useEffect, useState} from "react"
import { Container, Header, Loader, Title } from "./styles"
import { GiftedChat } from "react-native-gifted-chat"

export default ({ navigation, route }) => {
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  });

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <Container>
      <Header>
        <Title>Store Name</Title>
      </Header>

      {loading ?
        <Loader/>
        :
        <GiftedChat
          messages={messages}
          onSend={m => onSend(m)}
          user={{ _id: 1 }}
        />
      }
    </Container>
  )
}
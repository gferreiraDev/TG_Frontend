import React, {useEffect, useState} from "react"
import CustomerProfile from "./CustomerProfile"
import SellerProfile from "./SellerProfile"
import { Container, Loader } from "./styles"
import { useSelector } from "react-redux"


export default (props) => {
  const user = useSelector(rootState => rootState.user)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [user])

  return (
    <Container>
      {loading ?
        <Loader size='large' color='#F94A20'/>
      :
      user.profile === 'Consumidor' ?
        <CustomerProfile user={user} {...props}/>
      :
        <SellerProfile user={user} {...props}/>
      }
    </Container>
  )
}
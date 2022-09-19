import { Box, Icon, Text } from "./styles"

export default ({ score, showNumber, top }) => {
  return (
    <Box mT={top}>
      <Icon name={score >= 1 ? 'md-star' : score > 0 ? 'md-star-half-sharp' : 'md-star-outline'} />
      <Icon name={score >= 2 ? 'md-star' : score > 1.5 ? 'md-star-half-sharp' : 'md-star-outline'} />
      <Icon name={score >= 3 ? 'md-star' : score > 2.5 ? 'md-star-half-sharp' : 'md-star-outline'} />
      <Icon name={score >= 4 ? 'md-star' : score > 3.5 ? 'md-star-half-sharp' : 'md-star-outline'} />
      <Icon name={score === 5 ? 'md-star' : score > 4.5 ? 'md-star-half-sharp' : 'md-star-outline'} />
      
      {showNumber && <Text>{score?.toFixed(1)}</Text>}
    </Box>
  )
}
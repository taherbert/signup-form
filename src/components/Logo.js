import styled from 'styled-components'
import gaLogo from 'media/ga-logo.svg'

const Logo = styled.img.attrs(props => ({
  src: gaLogo,
  size: props.size ?? 'large',
}))`
  width: ${p => (p.size === 'small' ? '150px' : '300px')};
  height: auto;
`

export default Logo

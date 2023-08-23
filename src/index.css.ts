import { Styles } from "@ijstech/components";

export const containerStyle = Styles.style({
  width: 'var(--layout-container-width)',
  maxWidth: 'var(--layout-container-max_width)',
  // overflow: 'var(--layout-container-overflow)',
  overflow: 'hidden',
  textAlign: ('var(--layout-container-text_align)' as any),
  margin: '0 auto',
})

export const actionButtonStyle = Styles.style({
  boxShadow: 'none',
  $nest: {
    '&:hover': {
      filter: 'brightness(0.85)'
    },
    '> i-icon:hover': {
      fill: '#fff !important'
    }
  }
})

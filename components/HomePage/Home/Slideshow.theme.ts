import { styled } from '@styles/stitches.config';

export const Slideshow = styled('div', {
    margin: '0',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: -9,
})

export const Slider = styled('div', {
    whiteSpace: 'nowrap',
    transition: 'ease 1000ms',
    width: '100%',
    height: '100%'
})

export const IMG = styled('img', {
    width: '100%',
    height: '100%',
    opacity: '0.2',
})
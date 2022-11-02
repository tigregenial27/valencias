import img0 from '../assets/3.png'
import img1 from '../assets/4.png'
import img2 from '../assets/5.png'
import img3 from '../assets/6.png'
import img4 from '../assets/7.png'
import img5 from '../assets/8.png'
import img6 from '../assets/9.png'


const frames: string[] = [img0, img1, img2, img3, img4, img5, img6];

interface Props {
	imgIndex: number
}

export function HangedImage( {imgIndex}: Props ) {
	return (
		<img src={frames[imgIndex]} alt={frames[imgIndex]} style={{width: 200}} />
	)
}

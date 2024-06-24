import Image from 'next/image';
import WhatsappIcon from '../../assets/whatsapp.svg';
import WhatsappIconWhite from '../../assets/whatsapp_white.svg';

interface props {
	className?: string;
	animation?: string;
	color?: string;
	label?: string;
}
export default function ButtonExpert({ className, animation, color = 'white', label = 'Fale com um  especialista' }: props) {
	return (
		<a
			className={`
				flex items-center justify-center gap-2 py-2 px-12 rounded-md  hover:opacity-90
				${color === 'white' ? 'bg-white  text-sc hover:bg-slate-500 ' : ''}
				${color === 'orange' ? 'bg-orange-700 hover:bg-orange-600' : ''}
				${color === 'blue' ? 'bg-sc' : ''} 
				${animation ? animation : ''} 
				${className}
			`}
						href='https://api.whatsapp.com/send?phone=5511992813067&text=Bom%20dia!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Sirius%20Rural'
			target='_blank'>
			<span
				className={`
					text-sm  
					${color == 'white' && 'font-semibold'} 
					${color == 'white' ? 'text-sc' : 'text-white'}
				`}>
				{label}
			</span>
			<Image
				alt='WhatsappIcon'
				src={color == 'white' ? WhatsappIcon : WhatsappIconWhite}
			/>
		</a>
	);
}

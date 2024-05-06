import Image from 'next/image';
import fbLogo from '../../../assets/facebookLogo.svg';
import insta from '../../../assets/instagramLogo.svg';
import youtubeLogo from '../../../assets/youtubeLogo.svg';

export default function Footer() {
	return (
		<div className='flex flex-col gap-10 bg-sc text-white text-xs px-[2.5rem] py-[1.8rem] items-center w-full '>
			
      <div className='flex flex-col gap-10 sm:px-20 justify-between  sm:flex-row items-center  lg:max-w-2xl xl:max-w-4xl w-full border-b-[1px] border-white py-10 '>
				<div className='flex flex-col  gap-1'>
					<h4 className='text-lg font-bold  '>REDE SOCIAIS</h4>
					<p>Siga-nos e fique por dentro das novidades.</p>

					<div className='flex gap-2'>
						<a href='https://www.facebook.com/softcleverinformatica'>
							<Image
								alt='Logo do Facebook'
								src={fbLogo}
							/>
						</a>

						<a href='https://www.instagram.com/soft.clever/'>
							<Image
								alt='Logo do Instagram'
								src={insta}
							/>
						</a>
						<a href='https://www.youtube.com/channel/UCd15UMZr95UzVWWKbu5khTw'>
							<Image
								alt='Logo do Youtube'
								src={youtubeLogo}
							/>
						</a>
					</div>
				</div>
				<div className='flex flex-col gap-3 '>
					<h4 className='text-lg font-bold '>CONTATO</h4>
					<div className='flex justify-between '>
						<div className='flex flex-col gap-1 font-bold'>
							<p>Endereço: </p>
							<br />
							<p>E-mail: </p>
							<p>Telefones: </p>
							<p>Atendimento: </p>
						</div>
						<div className=' flex flex-col gap-1 text-end'>
							<p ><a href="https://maps.app.goo.gl/koYiUVgcow2f75437"> Rua João Alves Pimenta, 880</a></p>
							<p><a href="https://maps.app.goo.gl/koYiUVgcow2f75437"> Freguesia do Ó - São Paulo - SP</a></p>
							<p> <a href="mailto:softclever@softclever.com.br">softclever@softclever.com.br</a> </p>
							<p> <a href="tel:+551139913923">11 3991-3923</a>  / <a href="tel:+551123618334">11 2361-8334</a></p>
							<p> Seg - Sex | 08h - 18h</p>
						</div>
					</div>
				</div>
			</div>

			<div className='flex '>
				<p className='text-xs text-center'>
					© 1994 - {new Date().getFullYear()} | Soft Clever{' '}
					<a href='https://softclever.com.br/politica-de-privacidade'>Política de Privacidade</a>
				</p>
			</div>
		</div>
	);
}

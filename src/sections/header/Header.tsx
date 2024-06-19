'use client';
import header from '@/assets/Rural/PNG/Header.png';
import headerFull from '@/assets/Rural/PNG/HeaderFull.png';
import ButtonExpert from '@/src/components/button_expert';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LogoAzul from '../../../assets/logo_azul.svg';
import LogoBranco from '../../../assets/logo_branco.svg';

export default function Header() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (window.innerWidth >= 320 && window.innerWidth <= 1023) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}

		function updateText() {
			if (window.innerWidth >= 320 && window.innerWidth <= 1023) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}

		// Adiciona um ouvinte de evento de redimensionamento da janela
		window.addEventListener('resize', updateText);

		// Remove o ouvinte de evento ao desmontar o componente
		return () => {
			window.removeEventListener('resize', updateText);
		};
	}, []); 

	const bg = isMobile ? { backgroundImage: `url(${headerFull.src})` } : undefined;
	return (
		<header
			style={bg}
			className={`grid relative overflow-x-hidden grid-cols-12 grid-rows-8 gap-3 h-[42rem] min-h-[27rem]  lg:min-h-[40rem] lg:max-h[42rem] bg-no-repeat bg-right-top pb-4 lg:bg-cover`}>
			<div
				className='col-span-full pl-10 min-w-[20rem] row-span-1 
            md:row-span-2 md:absolute md:left-[5%]
            lg:pl-0 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-2 flex lg:items-center pt-2'>
				<Image
					className='w-[60%] md:max-h-[4rem] lg:max-h-[3.5rem] lg:w-[100%] lg:ml-[6.5rem]'
					alt='logo Softclever'
					src={isMobile ? LogoBranco : LogoAzul}
				/>
			</div>

			<div
				className='flex flex-col col-start-2 col-span-10 row-start-3 p-2 gap-3 text-[#f2faff] 
            lg:text-[#003658] lg:col-span-5 lg:row-span-8 lg:col-start-3 lg:row-start-4'>
				<div className='flex flex-col gap-[18px]'>
					<h2 className='text-5xl font-bold'>Sirius NFE Rural</h2>

					<h4 className='text-3xl font-bold text-justify text-orange-700'>Emissão de nota fiscal simples e rápida para o produtor rural.</h4>
				</div>

				<p className='text-lg font-normal '>
				A Soft Clever, valorizando o trabalho do homem do campo desenvolveu o Sírius NFE Rural, uma ferramenta avançada para emissão de nota fiscal eletrônica (NF-e) com todos os recursos necessários para simplificar as questões fiscais do dia a dia. 
				</p>
			</div>

			<div
				className='col-span-10  col-start-2 row-start-8 
            lg:col-span-3 lg:col-start-3 lg:row-start-8'>
				<ButtonExpert
					color={'orange'}
					label='Fale com um Especialista'
					animation='animate-pulse'
				/>
			</div>
			{!isMobile && (
				<>
					<Image
						className='h-[40.7rem] lg:col-span-6 lg:col-start-7'
						alt='background_image'
						src={header}
					/>
				</>
			)}
		</header>
	);
}

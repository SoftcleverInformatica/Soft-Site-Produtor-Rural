'use client';
import { useEffect, useState } from 'react';
import Imagem5 from '@/assets/Image5.png';
import ButtonExpert from '@/src/components/button_expert';
export default function Segments() {
	const [isMobile, setIsMobile] = useState(true);
	useEffect(() => {
		if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}

		function updateText() {
			if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}

		// Adiciona um ouvinte de evento de redimensionamento da janela
		window.addEventListener(`resize`, updateText);

		// Remove o ouvinte de evento ao desmontar o componente
		return () => {
			window.removeEventListener(`resize`, updateText);
		};
	}, []);

	return (
		<section
			className={`w-full bg-sc flex flex-col gap-[1.5rem]  justify-center items-center 
            `}>
			<div className='flex flex-col gap-[1.5rem] px-[2rem] py-[2.5rem] w-full lg:gap-[2.5rem] lg:max-w-3xl xl:max-w-5xl '> 
				<h1
					className={` text-white font-bold text-2xl 
                `}>
					Segmentos Atendidos
				</h1>

				<div
					className={` w-full gap-[1.5rem] 
            md:w-full
            lg:gap-0 lg:w-full  
            flex flex-col`}>
					<div
						className={`gap-[1.5rem] 
                md:flex-row
                lg:gap-0 lg:py-0  lg:flex-row 
                flex flex-col
                justify-between items-center`}>
						<div
							className={`varejo h-[13.8rem] w-full bg-cover bg-center bg-no-repeat  p-5 gap-3 rounded-lg  
                        md:w-full
                        lg:m-2 lg:w-full lg:h-[10.3rem]  
                        flex flex-col`}>
							<h2 className='text-white font-semibold'>Varejo</h2>
							<p className='text-white font-light'>
								Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e
								Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF.
							</p>
						</div>

						<div
							className={`atacado h-[13.8rem] w-full bg-cover bg-no-repeat  p-5 gap-3  rounded-lg 
                        md:w-full
                        lg:m-2 lg:w-full  lg:h-[10.3rem]
                        flex flex-col`}>
							<h2 className='text-white font-semibold'>Atacado e Distribuição</h2>
							<p className='text-white font-light'>
								NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança,
								Compras e muito mais.
							</p>
						</div>
					</div>
					<div
						className={`gap-[1.5rem] 
						md:flex-row
						lg:gap-0 lg:py-0  lg:flex-row 
						flex flex-col
						justify-between items-center`}>
						<div
							className={`industria h-[13.8rem] md:w-full lg:h-[10.3rem] w-full bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-lg lg:m-2`}>
							<h2 className='text-white font-semibold'>Indústria e Serviço</h2>
							<p className='text-white font-light'>
								Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica.
							</p>
						</div>
						<div
							className={`fiscal h-[13.8rem]  md:w-full lg:h-[10.3rem] w-full bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-lg lg:m-2`}>
							<h2 className='text-white font-semibold'>Fiscal</h2>
							<p className='text-white font-light'>Sped ICMS, IPI, Pis e Cofins e Bloco K completo.</p>
						</div>
					</div>
				</div>

				<div className='w-full flex flex-col justify-center items-center md:mt-[2rem]'>
					<ButtonExpert
						color={'white'}
						className='gap-2 py-6 px-12  w-[97%] font-semibold bg-white text-sky-950 hover:bg-zinc-300 lg:w-[15.25rem] lg:font-bold '
					/>
				</div>
			</div>
		</section>
	);
}

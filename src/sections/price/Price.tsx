import ButtonExpert from '@/src/components/button_expert';

export default function Price() {
	const planos = [
		{
			plan: 'Básico',
			fatures: [
				{ item: 'Emissão de até 20 notas mensais' },
				{ item: 'Controle de Estoque' },
				{ item: 'Cálculos automatizados' },
				{ item: 'Relatórios Gerenciais.' },
			],
			value: '89,90',
		},
		{
			plan: 'Intermediário',
      recommended: true,
			fatures: [
				{ item: 'Emissão de até 40 notas mensais' },
				{ item: 'Pedido de Venda.' },
				{ item: 'Controle de Estoque' },
				{ item: 'Cálculos automatizados' },
				{ item: 'Relatórios Gerenciais.' },
			],
			value: '139,90',
		},
		{
			plan: 'Avançado',
			fatures: [
				{ item: 'Emissão de até 100 notas mensais' },
				{ item: 'Pedido de Venda.' },
				{ item: 'Pedido de Compra.' },
				{ item: 'Financeiro a Pagar.' },
				{ item: 'Financeiro a Receber.' },
				{ item: 'Controle de Estoque' },
				{ item: 'Cálculos automatizados' },
				{ item: 'Relatórios Gerenciais.' },
			],
			value: '249,90',
		},
		{
			plan: 'Personalizado',
			fatures: [
				{
					item: 'Você monta o seu próprio pacote definindo a quantidade de notas que você necessita e os módulos que deseja utilizar',
				},
			],
		},
	];

	return (
		<section className='flex flex-col items-center gap-5 px-[1.9rem] py-[1.9rem] lg:px-[2.5rem]  lg:gap-10 '>
			<h2 className='text-sc font-extrabold text-2xl'>Escolha um plano que melhor se encaixa para você</h2>
			<div className='flex flex-col gap-5 justify-center md:flex-row '>
				{planos.map((_, i) => {
					return (
						<div
							key={i}
							className={`flex flex-col gap-1 p-2 pt-2 rounded-md  ${_.recommended ? 'bg-sc' : ''} `}>
							<span className='text-white font-bold h-6 pl-3'>{_.recommended ? 'Recomendado' : ''}</span>
							<div
								className={`flex flex-col flex-1 gap-4 justify-between px-4 py-8 bg-white rounded-md border hover:drop-shadow-[0px_0px_10px_rgba(36,173,181,.75)] border-[#003658]/50 ${_.recommended ? 'drop-shadow-[0px_0px_6px_rgba(36,173,181,1)]' : ''}  lg:px-8 lg:py-12 lg:gap-5 max-w-[18rem]`}>
								<div>
									<h4 className='text-sc font-semibold text-2xl'>{_.plan}</h4>
									{/* <p className='text-[#003658]/70 '>Description</p> */}
								</div>
								<ul className='flex flex-col gap-1'>
									{_.fatures.map((_, i) => {
										return (
											<li
												key={i}
												className='text-[#003658]/90 '>
												<span>{_.item}</span>
											</li>
										);
									})}
								</ul>
								<div className='flex flex-col gap-1 lg:gap-4'>
									<h3 className={`text-sc font-bold text-3xl ${_.value ? '' : 'hidden'}`}>
										R$ {_.value}
										<span className='text-[#003658]/70 text-sm'> Mensais</span>
									</h3>
									<ButtonExpert
										color={`orange`}
										label='Fale com um especialista'
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

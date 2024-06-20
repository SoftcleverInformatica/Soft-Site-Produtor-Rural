import ButtonExpert from '@/src/components/button_expert';
import {
	Calculator,
	CashRegister,
	ChartBar,
	File,
	HandArrowDown,
	HandArrowUp,
	HandCoins,
	Package,
	Sparkle
} from '@phosphor-icons/react';

export default function Price() {
	const planos = [
		{
			plan: 'Básico',
			fatures: [
				{ item: 'Emissão de até 20 notas mensais', icon: <File weight='light' size={20} /> },
				{ item: 'Controle de Estoque', icon: <Package weight='light' size={20} /> },
				{ item: 'Cálculos automatizados', icon: <Calculator weight='light' size={20} /> },
				{ item: 'Relatórios Gerenciais.', icon: <ChartBar weight='light' size={20} /> },
			],
			value: '89,90',
		},
		{
			plan: 'Intermediário',
			recommended: true,
			fatures: [
				{ item: 'Emissão de até 40 notas mensais', icon: <File weight='light' size={20} /> },
				{ item: 'Pedido de Venda.', icon: <HandCoins weight='light' size={20} /> },
				{ item: 'Controle de Estoque', icon: <Package weight='light' size={20} /> },
				{ item: 'Cálculos automatizados', icon: <Calculator weight='light' size={20} /> },
				{ item: 'Relatórios Gerenciais.', icon: <ChartBar weight='light' size={20} /> },
			],
			value: '139,90',
		},
		{
			plan: 'Avançado',
			fatures: [
				{ item: 'Emissão de até 100 notas mensais', icon: <File weight='light' size={20} /> },
				{ item: 'Pedido de Venda.', icon: <CashRegister weight='light' size={20} /> },
				{ item: 'Pedido de Compra.', icon: <HandCoins weight='light' size={20} /> },
				{ item: 'Financeiro a Pagar.', icon: <HandArrowUp weight='light' size={20} /> },
				{ item: 'Financeiro a Receber.', icon: <HandArrowDown weight='light' size={20} /> },
				{ item: 'Controle de Estoque', icon: <Package weight='light' size={20} /> },
				{ item: 'Cálculos automatizados', icon: <Calculator weight='light' size={20} /> },
				{ item: 'Relatórios Gerenciais.', icon: <ChartBar weight='light' size={20} /> },
			],
			value: '249,90',
		},
		{
			plan: 'Personalizado',
			fatures: [
				{
					item: 'Você monta o seu próprio pacote definindo a quantidade de notas que você necessita e os módulos que deseja utilizar',
					icon: <Sparkle weight='light' color='#C2410C' size={70} />,
				},
			],
		},
	];

	return (
		<section className='flex flex-col items-center gap-5 px-[1.9rem] py-[1.9rem] lg:px-[2.5rem]  lg:gap-10 '>
			<h2 className='text-sc font-extrabold text-2xl'>Escolha um plano que melhor se encaixa para você</h2>
			<div className='flex flex-col gap-1 justify-center md:grid md:grid-rows-2 md:grid-cols-2 xl:flex xl:flex-row '>
				{planos.map((_, i) => {
					return (
						<div
							key={i}
							className={`flex flex-col gap-1 p-2 pt-2 rounded-md  ${_.recommended ? 'bg-sc' : ''} `}>
							<span className='text-white font-bold h-6 pl-3'>{_.recommended ? 'Recomendado' : ''}</span>
							<div
								className={`flex flex-col flex-1 gap-4 justify-between px-4 py-8 bg-white rounded-md border transition ease-in-out delay-150 hover:drop-shadow-[0px_0px_10px_rgba(36,173,181,.75)] border-[#003658]/50 ${_.recommended ? 'drop-shadow-[0px_0px_6px_rgba(36,173,181,1)]' : ''}  lg:px-8 lg:py-12 lg:gap-5 max-w-[18rem]`}>
								<div>
									<h4 className='text-sc font-semibold text-2xl'>{_.plan}</h4>
									{/* <p className='text-[#003658]/70 '>Description</p> */}
								</div>
								<ul className='flex flex-col gap-2'>
									{_.fatures.map((_, i) => {
										return (
											<li
												key={i}
												className='text-[#003658]/90 text-xs flex items-center gap-2'>
												{_.icon}<span>{_.item}</span>
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

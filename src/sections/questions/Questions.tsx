"use client"
import { AccordionItem, Accordion, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ButtonExpert from "@/src/components/button_expert";
import { useState, useEffect } from "react";

export default function Questions() {

    const [isMobile, setIsMobile] = useState(true);
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
        window.addEventListener("resize", updateText);

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            window.removeEventListener("resize", updateText);
        };
    }, []);

    const QuestionsResponse: { Question: string, Response: string }[] = [
        {
            Question: 'Em quais tipos de empresas o Sírius ERP pode ser utilizado?',
            Response: 'Por tratar-se de um sistema ERP normalmente é utilizado em empresas que promovem operações de compra, venda ou produção de mercadorias com todos os seus desdobramentos, ou seja, estoque, fiscal, financeiro, compras, produção, etc. Dito isso, a nossa ferramenta pode ser utilizada por revendas, distribuidoras, atacadistas, varejistas e indústrias. O Sírius ERP também possui módulos específicos para alguns setores, tais como: ordens de serviços, assistência técnica, beneficiamento de mercadorias e conhecimento de transportes (transportadoras). Tudo integrado com estoque, financeiro e afins. '
        },
        {
            Question: 'O Sírius ERP atende empresas de qual porte?',
            Response: 'O Sírius ERP é modular, portanto, pode ser contratado módulo a módulo. Essa característica permite que a nossa ferramenta atenda empresas de micro, pequeno e médio porte. É muito comum empresas iniciarem a jornada com o Sírius ERP a partir da contratação apenas do Sírius NFE  e, após algum tempo, promover a expansão do pacote contratado com outros módulos,  tais como: comercial, financeiro, compras, etc. A proposta do Sírius ERP é ser um sistema democrático que acompanha o crescimento e o desenvolvimento do cliente.'
        },
        {
            Question: 'Quais os módulos que compõe o Sírius ERP ?',
            Response: 'O Sírius ERP é composto por um grande número de módulos, veja os principais: cadastros, fiscal, orçamentos, vendas, liberação, expedição, comercial, comissões, financeiro a pagar e receber, conciliação bancária, cobrança, compras, entrada de mercadoria, sped fiscal / bloco k, produção, assistência técnica, ordem de serviço e outros, mas não se preocupe, o Sírius ERP é modular, portanto, pode ser contratado de acordo com o tamanho do seu negócio. '
        },
        {
            Question: 'Eu devo utilizar o sistema instalado no meu computador ou na nuvem (internet)?',
            Response: 'O Sírius ERP está preparado para trabalhar nos dois ambientes, seja no seu computador, seja na nuvem (cloud). Quando instalado localmente fica totalmente independente do funcionamento da internet, já na modalidade nuvem, depende de uma conexão ativa para o seu funcionamento, por outro lado, você poderá fazer uso do sistema de onde estiver.'
        },
        {
            Question: 'O que é necessário para o sistema funcionar em rede?',
            Response: 'Para utilizar o sistema em rede, ou seja, em mais de um computador, é necessário que um técnico de rede seja contratado, uma vez que será necessário executar a passagem de cabeamento específico a fim de que os computadores possam enxergar-se. Nos casos onde a empresa utiliza um número grande de terminais de vendas, pode ser necessária a contratação de um servidor. É importante observar que não é adequado o padrão de redes WiFi para esse fim, uma vez que os bancos de dados de forma geral costumam corromper devido a instabilidade deste tipo de sinal. Nos casos onde o sistema roda a partir da nossa nuvem (internet), não há a necessidade de qualquer tipo de preparo neste sentido, visto que o acesso é feito diretamente através da internet, e, portanto, basta que o computador esteja conectado através de um cabo ou através do sinal de WiFi.'
        },
        {
            Question: 'Como farei para instalar, aprender a usar o sistema e tirar dúvidas acerca do se funcionamento?',
            Response: 'A Softclever oferece instalação, treinamento e suporte remoto gratuito HUMANIZADO (sem uso de robôs). O atendimento é feito via telefone e conexão remota (tudo simultaneamente, ou seja, você ouve a voz do especialista e enxerga com ele tudo o que está sendo feito na sua tela). A partir do momento que você finaliza a contratação do pacote desejado junto ao nosso departamento comercial, um especialista entra em contato contigo a fim de agendar a instalação do sistema. A instalação é remota, ou seja, você permite o acesso do nosso especialista ao seu computador e em seguida todo o processo de instalação é realizado. Ao final da instalação é feito o agendamento do primeiro treinamento, que também é remoto. Pronto, você já está apto a fazer o uso das nossas ferramentas, mas não se preocupe, caso você tenha qualquer dúvida na operação do sistema, basta ligar na nossa central de atendimento que você será atendido por um de nossos especialistas.'
        }
    ]
    return (
        <>
            <section className="grid grid-cols-12 grid-rows-10 lg:grid-rows-3 w-full bg-sc gap-6 lg:py-[3.3rem] md:pb-6 shadow-xl">
                <div className="col-span-10 col-start-2 row-span-1 row-start-2
            lg:col-span-3 lg:col-start-2 lg:row-span-2 lg:row-start-2 
            flex flex-col gap-4
            ">
                    <h2
                        className=" text-white font-bold text-3xl
                 lg:text-5xl lg:leading-[3.5rem]"
                    >Perguntas Frequentes</h2>
                    {!isMobile && (
                        <ButtonExpert
                            color={'white'}
                            className="gap-2 py-6 px-12 col-span-10 col-start-2 row-start-9 font-semibold bg-white text-sc hover:bg-zinc-300" />
                    )}
                </div>



                <div className="col-span-10 col-start-2  row-span-7 row-start-3
                md:mb-[2.5rem]
            lg:col-span-6 lg:col-start-6 lg:row-start-1 lg:row-st
            ">
                    <Accordion
                        className="gap-3 bg-white p-4  rounded-md"
                        type="single"
                        collapsible
                    >
                        {QuestionsResponse.map((item, index) => {
                            return (
                                <AccordionItem
                                    className="bg-sc mb-3 rounded-md"
                                    value={index.toString()} key={index}>
                                    <AccordionTrigger
                                        className="text-white text-lg font-semibold gap-2 px-3 text-left"
                                    >{item.Question}</AccordionTrigger>
                                    <AccordionContent
                                        className="text-white text-base font-normal px-4 text-justify"
                                    >{item.Response}</AccordionContent>
                                </AccordionItem>
                            )
                        })}

                    </Accordion>

                </div>
                {isMobile && (
                    <ButtonExpert
                        color={'white'}
                        className="gap-2 py-6 px-12 col-span-10 col-start-2 row-start-10 font-semibold bg-white text-sc hover:bg-zinc-300" />
                )}

            </section>
            <div
            className="section9 bg-cover bg-no-repeat w-full h-[15vh] lg:h-[25vh] max-h-[15rem] min-h-[8rem]"
            ></div>
        </>
    )
}
"use client"
import Image from "next/image"
import DiferenciaisImagem from "@/assets/DiferenciaisImage.png"
import { useEffect, useState } from "react";
import ButtonExpert from "@/src/components/button_expert";
import Tick from '@/assets/NossosDiferenciaisTick.svg'

export default function Differential() {
    const differentials: string[] = [
        'Experiência sólida desde 1994. São mais de 30 anos de experiência.',
        'Contrato mensal sem fidelidade. Nós confiamos nos serviços que oferecemos.',
        'Mais de 12.000 usuários atendidos em milhares de projetos implantados.',
        'Recomendados por centenas de escritórios contábeis. Os contadores confiam na segurança fiscal do nosso sistema.',
        'Pacotes para todos os tipos e tamanhos de empresa, seja do varejo, atacado, distribuição, indústria ou serviços.',
        'Suporte remoto e online totalmente humanizado. Na Soft Clever você não conversa com um robô.',
    ]

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

    return (
        <section className="grid grid-cols-12 grid-rows-12 my-16">

            <h1
                className="col-span-5 col-start-2  font-bold text-2xl  text-sc row-span-1
                lg:col-start-3 lg:row-start-1
                "
            >Nossos Diferenciais</h1>

            <ul className="col-span-10 row-span-10 col-start-2 flex flex-col gap-[6rem] lg:gap-6 row-start-3 text-justify text-sc font-medium text-lg
            md:pb-[4rem] md:gap-[4rem]
            lg:col-span-5 lg:col-start-3 lg:row-start-3 lg:text-left lg:text-sm">
                {differentials.map((text, index) => {
                    return (
                        <li key={index}
                        className="flex flex-row gap-4 items-center h-[2rem]">
                            <Image
                            sizes=""
                            alt="Tick"
                            src={Tick}
                            />
                            <span>{text}</span>
                        </li>
                    )
                })}
            </ul>
            {!isMobile && (
                <div className=" col-span-4 col-start-8 row-start-2 row-span-8 flex flex-col justify-center items-center mr-4 ">
                    <div className=" absolute w-[20%] max-w-[18rem] h-[60%]  max-h-[23.875rem] rounded-xl bg-sc">
                    </div>
                    <Image
                        className="relative right-[10%] w-[18rem]"
                        alt="Homem apertando a mão de outro Homem"
                        src={DiferenciaisImagem}
                    ></Image>

                </div>
            )}

            <ButtonExpert
                color={'blue'}
                className="gap-2 py-6 px-12 w-full font-semibold mt-16  bg-sc text-white hover:bg-scHover 
            col-span-10 col-start-2 row-start-13 lg:col-start-3 
            md:mt-2
            lg:w-[15.25rem]" />


        </section>
    )
}
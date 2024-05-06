"use client"
import Image from "next/image"
import SobreNos from "../../../assets/about-us.png"
import { useEffect, useState } from "react";
import ButtonExpert from "@/src/components/button_expert";

export default function AboutUs() {

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
        <section className="grid grid-cols-12 grid-rows-12 
        mt-16
        md:grid-rows-7
        lg:grid-rows-5 lg:mt-0">

            <h1
                className="col-span-5 col-start-2  font-bold text-2xl  text-sc row-span-1
                lg:col-start-3 lg:row-start-1 lg:flex lg:flex-col lg:justify-center
                "
            >Sobre nós</h1>

            <div className="col-span-10 row-span-8 col-start-2 row-start-2 text-justify text-sc font-medium text-lg
            md:row-span-3
            lg:col-span-5 lg:col-start-3 lg:row-start-2 lg:text-left lg:text-base">
                <p>    A Soft Clever tem uma trajetória sólida no desenvolvimento de sistemas desde 1994. Com mais de 12.000 usuários atendidos e inúmeras parcerias estabelecidas com escritórios de contabilidade, nossa empresa está empenhada em oferecer um serviço cada vez mais aprimorado. Nosso segredo reside no compromisso com a excelência, priorizando o bem-estar de nossos clientes e buscando sempre orientá-los para as melhores decisões. Isso resulta em confiança e satisfação em cada interação com nossos serviços.</p>
                {!isMobile && (
                    <>
                        <br />
                        <p>    Contamos com uma equipe altamente qualificada e própria, capacitada para atender às diversas demandas do mercado com agilidade e comprometimento. A fidelidade de nossos clientes é a maior prova da qualidade dos serviços que oferecemos. Desenvolvemos projetos específicos para empresas de todos os tamanhos, desde micro empreendimentos até médias empresas, adaptando-nos às necessidades individuais de cada cliente.</p>
                    </>
                )}
            </div>
            {!isMobile && (
                <div className=" col-span-4 col-start-8 row-start-1 row-span-8 flex flex-col justify-center items-center mr-4 
                lg:row-span-5
                ">
                    <div className=" absolute w-[20%] max-w-[18rem] h-[60%]  max-h-[23.875rem] rounded-xl bg-sc">
                    </div>
                    <Image
                        className="relative right-[10%] w-[23rem]"
                        alt="Homem apertando a mão de outro Homem"
                        src={SobreNos}
                    ></Image>

                </div>
            )}

            <ButtonExpert
                color={'blue'}
                className="gap-2 py-6 px-12 w-full font-semibold  bg-sc text-white hover:bg-scHover 
            col-span-10 col-start-2 row-start-11 lg:col-start-3 
            md:mt-2 md:row-start-6
            lg:w-[15.25rem] lg:col-span-3 lg:row-start-5 lg:mt-[2.6rem] lg:mb-[2rem]
            " />


        </section>
    )
}
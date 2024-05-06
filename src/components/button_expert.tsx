import { Button } from "./ui/button";
import WhatsappIcon from "../../assets/whatsapp.svg"
import WhatsappIconWhite from "../../assets/whatsapp_white.svg"
import Image from 'next/image';


interface props {
    className?: string,
    color?: string,
    label?: string,
}
export default function ButtonExpert({ className, color = 'white', label = 'Fale com um  especialista' }: props) {
    return (
        <Button className={`${className}`}  onClick={()=>{window.open('https://api.whatsapp.com/send?phone=5511992810249&text=','_blank')}}>
            <span className={`text-sm md:font-light ${color == 'white' && '!font-semibold'} `}>{label}</span>
            <Image
                alt="WhatsappIcon"
                src={color == 'white' ? WhatsappIcon : WhatsappIconWhite}
            />
        </Button>
    )
}
'use client';
import AboutUs from '../sections/about-us/AboutUs';
import Client from '../sections/client/Client';
import Differential from '../sections/differential/Diferential';
import Feedback from '../sections/feedback/Feedback';
import Footer from '../sections/footer/Footer';
import Header from '../sections/header/Header';
import Price from '../sections/price/Price';
import Products from '../sections/product/Products';
import Questions from '../sections/questions/Questions';
import Segments from '../sections/segments/Segments';

export default function Home() {
	return (
		<main className='flex flex-col p-0 mx-auto b-0 justify-center max-w-[1440px] items-center'>
			<Header />
			<Products />
			<Client />
			<Price />
			<AboutUs />
			<Feedback />
			<Segments />
			<Differential />
			<Questions />
			<Footer />
		</main>
	);
}

import Image from 'next/image'
import Title from './ui/title'

import CampanarioLogo from '@/public/images/CampanarioLogo.png'
import NefroVidaLogo from '@/public/images/NefroVidaLogo.png'
import MonarcaLogo from '@/public/images/MonarcaLogo.png'

export default function PreviousClients() {
    const images = [
        MonarcaLogo,
        CampanarioLogo,
        NefroVidaLogo,
    ];

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className='pb-12 md:pb-20'>
                    <Title>Empresas que confían en nosotros</Title>
                    <div className="p-4 flex items-center justify-between gap-5 pt-11">
                        {images.map((imageUrl, index) => (
                            <div key={index}>
                                <Image src={imageUrl} alt={`Image ${index + 1}`} className="w-64 h-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
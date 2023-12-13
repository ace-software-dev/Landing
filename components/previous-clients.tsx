import Image from 'next/image'
import SectionTitle from './ui/section-title'

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
                <SectionTitle title="Empresas que confían en nosotros" subtitle="" />
                <div className="p-4 flex items-center justify-between">
                    {images.map((imageUrl, index) => (
                    <div key={index}>
                        <Image src={imageUrl} alt={`Image ${index + 1}`} className="w-64 h-auto rounded-md" />
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
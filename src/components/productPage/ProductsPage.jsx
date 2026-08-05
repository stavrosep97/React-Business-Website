import { useState } from 'react';
import './ProductsPage.css';

export default function ProductsPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = [
        {
            id: 1,
            image: '/images/products/custom-curtains.jpg',
            title: 'Custom Made Curtains',
            description: 'Hand-sewn curtains, tailored to your exact measurements.',
        },
        {
            id: 2,
            image: '/images/products/curtain-tracks.jpg',
            title: 'Curtain Tracks',
            description: 'Smooth, reliable tracks for effortless curtain movement.',
        },
        {
            id: 3,
            image: '/images/products/curtain-rods.jpg',
            title: 'Curtain Rods',
            description: 'Sturdy, stylish rods to complete your curtain setup.',
        },
        {
            id: 4,
            image: '/images/products/roller-blinds.jpg',
            title: 'Roller Blinds',
            description: 'Clean, modern shading that fits any window size.',
        },
        {
            id: 5,
            image: '/images/products/vertical-blinds.jpg',
            title: 'Vertical Blinds',
            description: 'Practical light control, ideal for large windows and doors.',
        },
        {
            id: 6,
            image: '/images/products/combi-blinds.jpg',
            title: 'Combi Blinds',
            description: 'Alternating sheer and solid fabric bands for adjustable light.',
        },
        {
            id: 7,
            image: '/images/products/roma-blinds.jpg',
            title: 'Roma Blinds',
            description: 'Soft, elegant folds that add texture to any room.',
        },
        {
            id: 8,
            image: '/images/products/decorative-cushions.jpg',
            title: 'Decorative Cushions',
            description: 'Handmade cushions to add color and character to your space.',
        },
        {
            id: 9,
            image: '/images/products/living-room-rugs.jpg',
            title: 'Living Room Rugs',
            description: 'Rugs that tie your living room together in style.',
        },
        {
            id: 10,
            image: '/images/products/bathroom-rugs.jpg',
            title: 'Bathroom Rugs',
            description: 'Soft, absorbent rugs for a cozy bathroom.',
        },
        {
            id: 11,
            image: '/images/products/face-towels.jpg',
            title: 'Face Towels',
            description: 'Soft, everyday towels in a range of colors.',
        },
        {
            id: 12,
            image: '/images/products/bath-towels.jpg',
            title: 'Bath Towels',
            description: 'Thick, absorbent towels for everyday comfort.',
        },
        {
            id: 13,
            image: '/images/products/sofa-throws.jpg',
            title: 'Sofa Throws',
            description: 'Cozy throws to add warmth and style to your sofa.',
        },
        {
            id: 14,
            image: '/images/products/bed-covers.jpg',
            title: 'Bed Covers',
            description: 'Comfortable, stylish covers to complete your bedroom.',
        },
        {
            id: 15,
            image: '/images/products/bedsheets.jpg',
            title: 'Bedsheets',
            description: 'Soft, breathable fabrics in a variety of designs.',
        },
        {
            id: 16,
            image: '/images/products/sleep-pillows.jpg',
            title: 'Sleep Pillows',
            description: 'Comfortable pillows designed for a better night\'s sleep.',
        },

        {
            id: 17,
            image: '/images/products/awnings.jpg',
            title: 'Awnings',
            description: 'Sturdy retractable awnings for shaded, comfortable outdoor spaces.',
        },
    ];

    return (
        <section className="products-section">
            <div className="products-header">
                <span className="products-label">WHAT WE OFFER</span>
                <h1>Our Products</h1>
                <div className="products-divider"></div>
                <p className="products-lead">
                    From curtains and shading systems to rugs, towels and bedding —
                    explore the full range of products we offer.
                </p>
            </div>

            <div className="products-grid">
                {categories.map((category) => (
                    <div className="product-card" key={category.id}>
                        <div
                            className="product-card-image"
                            onClick={() => setSelectedImage(category)}
                        >
                            <img src={category.image} alt={category.title} />
                        </div>
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <button
                        className="lightbox-close"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                    <img
                        src={selectedImage.image}
                        alt={selectedImage.title}
                        className="lightbox-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <p className="lightbox-caption">{selectedImage.title}</p>
                </div>
            )}
        </section>
    );
}
import { useState } from 'react';
import './GalleryPage.css';

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryItems = [
        // --- Projects ---
        {
            id: 1,
            category: 'projects',
            image: '/images/gallery/combi-2-project.webp',
            title: 'Combi Blinds & Cushion Styling',
        },
        {
            id: 2,
            category: 'projects',
            image: '/images/gallery/roller-blinds-4-projects.webp',
            title: 'Roller Blinds Installation',
        },
        {
            id: 3,
            category: 'projects',
            image: '/images/gallery/cushion-1-project.webp',
            title: 'Poolside Cushions',
        },

        {
            id: 4,
            category: 'projects',
            image: '/images/gallery/curtain-7-project.webp',
            title: 'Bedroom Custom Curtains',
        },

        {
            id: 5,
            category: 'projects',
            image: '/images/gallery/living room rugs.webp',
            title: 'Living Room Rugs',
        },

         {
            id: 6,
            category: 'projects',
            image: '/images/gallery/curtain1-project.webp',
            title: 'Custom Made Curtains',
        },

         {
            id: 7,
            category: 'projects',
            image: '/images/gallery/curtain-3-project.webp',
            title: 'Living Room Makeover',
        },

        
         {
            id: 8,
            category: 'projects',
            image: '/images/gallery/curtain-6-project.webp',
            title: 'Wavy Curtains',
        },

         {
            id: 9,
            category: 'projects',
            image: '/images/gallery/curtain-9-project.webp',
            title: 'Patterned Sheers',
        },

          {
            id: 10,
            category: 'projects',
            image: '/images/gallery/roller-blinds-1-project.webp',
            title: 'Kitchen Roller Blinds',
        },

          {
            id: 11,
            category: 'projects',
            image: '/images/gallery/roller-blinds-2-projects.webp',
            title: 'Kitchen Roller Blinds',
        },
        
         {
            id: 12,
            category: 'projects',
            image: '/images/gallery/cushion-4-product.webp',
            title: 'Sofa Decor Cushions',
        },

         {
            id: 13,
            category: 'projects',
            image: '/images/gallery/awnings-1-project.webp',
            title: 'Outdoor Awning',
        },

         {
            id: 14,
            category: 'projects',
            image: '/images/gallery/curtain-10-project.webp',
            title: 'Bedroom Custom Curtains',
        },

        {
            id: 15,
            category: 'projects',
            image: '/images/gallery/roller-blinds-5-project.webp',
            title: 'Textured Roller Blind',
        },

        {
            id: 16,
            category: 'projects',
            image: '/images/gallery/curtain-11-project.webp',
            title: 'Layered Window Treatment',
        },

        {
            id: 17,
            category: 'projects',
            image: '/images/gallery/curtain-12-project.webp',
            title: 'Layered Window Treatment',
        },

        {
            id: 18,
            category: 'projects',
            image: '/images/gallery/curtains-13.webp',
            title: 'Layered Window Treatment',
        },

        {
            id: 19,
            category: 'projects',
            image: '/images/gallery/curtains-14.webp',
            title: 'Layered Window Treatment',
        },






        // --- Products ---
       
         {
            id: 20,
            category: 'products',
            image: '/images/gallery/towels-1-products.webp',
            title: 'Bath Towels',
        },

        {
            id: 21,
            category: 'products',
            image: '/images/gallery/towels-2-products.webp',
            title: 'Face Towels',
        },

        {
            id: 22,
            category: 'products',
            image: '/images/gallery/towels-3-products.webp',
            title: 'Face Towels',
        },

        {
            id: 23,
            category: 'products',
            image: '/images/gallery/cushion-1-product.webp',
            title: 'A Big Selection Of Handmade Cushions',
        },

        {
            id: 24,
            category: 'products',
            image: '/images/gallery/cushion-2-product.webp',
            title: 'Decor Cushions',
        },

        {
            id: 25,
            category: 'products',
            image: '/images/gallery/cushion-3-product.webp',
            title: 'Decor Cushions',
        },

        {
            id: 26,
            category: 'products',
            image: '/images/gallery/cushion-6-product.webp',
            title: 'Decor Cushions',
        },

        {
            id: 27,
            category: 'products',
            image: '/images/gallery/cushion-7-product.webp',
            title: 'Decor Cushions',
        },

        {
            id: 28,
            category: 'products',
            image: '/images/gallery/bedsheets-1-products.webp',
            title: 'Wide Selection of Bedsheets',
        },

       
    ];

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'projects', label: 'Projects' },
        { id: 'products', label: 'Products' },
    ];

    const filteredItems =
        activeFilter === 'all'
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeFilter);

    return (
        <section className="gallery-section">
            <div className="gallery-header">
                <span className="gallery-label">TAKE A LOOK</span>
                <h1>Our Gallery</h1>
                <div className="gallery-divider"></div>
                <p className="gallery-lead">
                    Browse through our completed projects and product photos.
                </p>
            </div>

            <div className="gallery-filters">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        className={`gallery-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter.id)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {filteredItems.map((item) => (
                    <div
                        className="gallery-item"
                        key={item.id}
                        onClick={() => setSelectedImage(item)}
                    >
                        <img src={item.image} alt={item.title} />
                        <div className="gallery-item-overlay">
                            <span>{item.title}</span>
                        </div>
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
import { useState } from 'react';
import './GalleryPage.css';

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const rawGalleryItems = [
        // --- Projects ---
        {
            category: 'projects',
            image: '/images/gallery/combi-2-project.webp',
            title: 'Combi Blinds & Cushion Styling',
        },

        {
            category: 'projects',
            image: '/images/gallery/combi-001.webp',
            title: 'A modern grey combi blind installed on a window',
        },

        {
            category: 'projects',
            image: '/images/gallery/roller-blinds-4-projects.webp',
            title: 'Roller Blinds Installation',
        },
        {
            category: 'projects',
            image: '/images/gallery/cushion-1-project.webp',
            title: 'Poolside Cushions',
        },
        {
            category: 'projects',
            image: '/images/gallery/curtain-7-project.webp',
            title: 'Bedroom Custom Curtains',
        },
        {
            category: 'projects',
            image: '/images/gallery/living room rugs.webp',
            title: 'Living Room Rugs',
        },
        {
            category: 'projects',
            image: '/images/gallery/curtain1-project.webp',
            title: 'Custom Made Curtains',
        },
        {
            category: 'projects',
            image: '/images/gallery/curtain-3-project.webp',
            title: 'Living Room Makeover',
        },

        {
            category: 'projects',
            image: '/images/gallery/curtain-project-14102026.webp',
            title: 'A modern room corner featuring floor-to-ceiling gathered curtains',
        },

        {
            category: 'projects',
            image: '/images/gallery/curtain-project-14102026II.webp',
            title: 'A modern room corner featuring floor-to-ceiling gathered curtains',
        },

        {
            category: 'projects',
            image: '/images/gallery/curtain-6-project.webp',
            title: 'Wavy Curtains',
        },

        {
            category: 'projects',
            image: '/images/gallery/project-14102026-curtain.webp',
            title: 'A bright living room featuring elegant wave curtains and light beige sofas with decorative cushions',
        },
        
        {
            category: 'projects',
            image: '/images/gallery/curtain-9-project.webp',
            title: 'Patterned Sheers',
        },
        {
            category: 'projects',
            image: '/images/gallery/roller-blinds-1-project.webp',
            title: 'Kitchen Roller Blinds',
        },
        {
            category: 'projects',
            image: '/images/gallery/roller-blinds-2-projects.webp',
            title: 'Kitchen Roller Blinds',
        },
        {
            category: 'projects',
            image: '/images/gallery/cushion-4-product.webp',
            title: 'Sofa Decor Cushions',
        },
        {
            category: 'projects',
            image: '/images/gallery/awnings-1-project.webp',
            title: 'Outdoor Awning',
        },
        {
            category: 'projects',
            image: '/images/gallery/curtain-10-project.webp',
            title: 'Bedroom Custom Curtains',
        },
        {
            category: 'projects',
            image: '/images/gallery/roller-blinds-5-project.webp',
            title: 'Textured Roller Blind',
        },
        {
            category: 'projects',
            image: '/images/gallery/curtain-11-project.webp',
            title: 'Layered Window Treatment',
        },
        {
            category: 'projects',
            image: '/images/gallery/curtain-12-project.webp',
            title: 'Layered Window Treatment',
        },
        {
            category: 'projects',
            image: '/images/gallery/curtains-13.webp',
            title: 'Layered Window Treatment',
        },
        {
            category: 'projects',
            image: '/images/gallery/curtains-14.webp',
            title: 'Layered Window Treatment',
        },

        {
            category: 'projects',
            image: '/images/gallery/bed-modern ii.webp',
            title: 'A modern bed styled with a teal quilted comforter',
        },

        {
            category: 'projects',
            image: '/images/gallery/bed-modern.webp',
            title: 'A modern bed styled with a pink comforter',
        },

        {
            category: 'projects',
            image: '/images/gallery/bed-modern-iii.webp',
            title: 'A modern bed styled with a grey comforter',
        },

        {
            category: 'projects',
            image: '/images/gallery/bed-modern-iv.webp',
            title: 'A modern bed styled with a beige comforter',
        },


        // --- Products ---
        {
            category: 'products',
            image: '/images/gallery/towels-1-products.webp',
            title: 'Bath Towels',
        },
        {
            category: 'products',
            image: '/images/gallery/towels-2-products.webp',
            title: 'Face Towels',
        },
        {
            category: 'products',
            image: '/images/gallery/towels-3-products.webp',
            title: 'Face Towels',
        },
        {
            category: 'products',
            image: '/images/gallery/towel-green.webp',
            title: 'A stacked set of three folded sage green towels',
        },
        {
            category: 'products',
            image: '/images/gallery/towel-orange.webp',
            title: 'A stacked set of three folded orange towels',
        },
        {
            category: 'products',
            image: '/images/gallery/towel-yellow.webp',
            title: 'A stacked set of three folded yellow towels',
        },
        {
            category: 'products',
            image: '/images/gallery/cushion-prices.webp',
            title: 'A Big Selection Of Handmade Cushions',
        },
        {
            category: 'products',
            image: '/images/gallery/cushion-2-product.webp',
            title: 'Decor Cushions',
        },
        {
            category: 'products',
            image: '/images/gallery/cushions-printed.webp',
            title: 'Decor Cushions',
        },
        {
            category: 'products',
            image: '/images/gallery/cushion-6-product.webp',
            title: 'Decor Cushions',
        },
        {
            category: 'products',
            image: '/images/gallery/cushion-7-product.webp',
            title: 'Decor Cushions',
        },
        {
            category: 'products',
            image: '/images/gallery/cushions-002.webp',
            title: 'A collection of textured yellow and striped accent cushions',
        },
        {
            category: 'products',
            image: '/images/gallery/outdoor-cushions.webp',
            title: 'Sofa cushions with outdoor material',
        },
        {
            category: 'products',
            image: '/images/gallery/rug-001.webp',
            title: 'A modern runner rug with grey and brown geometric arch patterns.',
        },
        {
            category: 'products',
            image: '/images/gallery/rug-0002.webp',
            title: 'A close-up of a textured area rug featuring a distressed floral motif in charcoal, grey, and terracotta tones',
        },
        {
            category: 'products',
            image: '/images/gallery/rug-003.webp',
            title: 'An angled full view of a modern area rug featuring a dark grey center medallion surrounded by ornate floral borders',
        },
    ];

    // Δημιουργεί αυτόματα τα IDs με βάση τη σειρά τους στον πίνακα
    const galleryItems = rawGalleryItems.map((item, index) => ({
        id: index + 1,
        ...item,
    }));

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
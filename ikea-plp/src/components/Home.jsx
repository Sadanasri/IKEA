import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productDB } from '../data/products';
import ProductCard from './ProductCard';
import '../styles/home.css';

export default function Home({ addToCart }) {
    const navigate = useNavigate();

    // Just pull a few products for the best deals section
    const bestDeals = productDB.slice(0, 4);

    return (
        <main className="main-content">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-banner">
                    <div className="hero-text">
                        <h2>Flat</h2>
                        <h1>20% off*</h1>
                        <p>On 600+ textile products</p>
                        <button className="hero-btn" onClick={() => navigate('/products')}>Shop now &rarr;</button>
                    </div>
                </div>
                <div className="hero-grid">
                    <div className="hero-grid-item">
                        <img src="https://images.unsplash.com/photo-1522771731478-44eb105f3f64?auto=format&fit=crop&w=400" alt="Cushions" className="hero-grid-img" />
                        <span className="hero-grid-label">Flat 20% off on cushion covers</span>
                    </div>
                    <div className="hero-grid-item">
                        <img src="https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=400" alt="Bedsheets" className="hero-grid-img" />
                        <span className="hero-grid-label">Flat 20% off on bedsheets</span>
                    </div>
                    <div className="hero-grid-item">
                        <img src="https://images.unsplash.com/photo-1583847268964-b28ce8f31586?auto=format&fit=crop&w=400" alt="Curtains" className="hero-grid-img" />
                        <span className="hero-grid-label">Flat 20% off on curtains</span>
                    </div>
                    <div className="hero-grid-item">
                        <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=400" alt="Towels" className="hero-grid-img" />
                        <span className="hero-grid-label">Flat 20% off on towels</span>
                    </div>
                </div>
            </section>

            {/* Explore Categories */}
            <section className="explore-section">
                <h3>Explore more categories on offer</h3>
                <div className="categories-row">
                    <div className="category-card" onClick={() => navigate('/products')}>
                        <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=200" alt="Rugs" />
                        <p>Flat 20% off on rugs &rarr;</p>
                    </div>
                    <div className="category-card" onClick={() => navigate('/products')}>
                        <img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=200" alt="Pillows" />
                        <p>Flat 20% off on pillows &rarr;</p>
                    </div>
                    <div className="category-card" onClick={() => navigate('/products')}>
                        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=200" alt="Throws" />
                        <p>Flat 20% off on throws &rarr;</p>
                    </div>
                    <div className="category-card" onClick={() => navigate('/products')}>
                        <img src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=200" alt="Children's textile" />
                        <p>Flat 20% off on children's textile &rarr;</p>
                    </div>
                </div>
            </section>

            {/* Boost Business */}
            <section className="boost-business" onClick={() => navigate('/signup-business')}>
                <div className="boost-content">
                    <h2>Boost your Business</h2>
                    <p>Shop now & get up to 10% off. Valid for IKEA Business customer members till 31 Mar 2026. T&C apply.*</p>
                    <button className="circle-btn">&rarr;</button>
                </div>
            </section>

            {/* What's New Masonry */}
            <section className="whats-new">
                <div className="masonry-grid">
                    <div className="masonry-main">
                        <img src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800" alt="Dining" className="masonry-img" />
                    </div>
                    <div className="masonry-side">
                        <div className="masonry-orange-card">
                            <span>New</span>
                            <h3>What's new?</h3>
                            <p>Discover our latest arrivals</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=400" alt="Tableware" className="masonry-img" />
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400" alt="Decor" className="masonry-img" />
                        <img src="https://images.unsplash.com/photo-1416879598446-df83df66fa44?auto=format&fit=crop&w=400" alt="Plants" className="masonry-img" />
                    </div>
                </div>
            </section>

            {/* Today's Best Deals */}
            <section className="best-deals">
                <h3>Today's best deals</h3>
                <div className="product-carousel">
                    {bestDeals.map(product => (
                        <div key={product.id} className="carousel-item">
                            <ProductCard product={product} addToCart={addToCart} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Ideas for your home */}
            <section className="ideas-section">
                <h3>Ideas for your home</h3>
                <div className="ideas-grid">
                    <div className="idea-card">
                        <img src="https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=400" alt="Idea 1" />
                        <h4>Plan your perfect home</h4>
                        <p>From quick fixes to total makeovers, find solutions...</p>
                        <button className="circle-btn-small">&rarr;</button>
                    </div>
                    <div className="idea-card">
                        <img src="https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=400" alt="Idea 2" />
                        <h4>10 kitchen tools you didn't know you needed</h4>
                        <p>Cook, serve, and eat with a big dose of colour...</p>
                        <button className="circle-btn-small">&rarr;</button>
                    </div>
                    <div className="idea-card">
                        <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400" alt="Idea 3" />
                        <h4>6 ways to organise your gaming setup for peak gameplay</h4>
                        <p>Looking for ways to improve your gaming station...</p>
                        <button className="circle-btn-small">&rarr;</button>
                    </div>
                    <div className="idea-card">
                        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400" alt="Idea 4" />
                        <h4>Your ultimate guide to choosing the right mattress</h4>
                        <p>A good night's sleep is the secret to a great day...</p>
                        <button className="circle-btn-small">&rarr;</button>
                    </div>
                </div>
            </section>

            {/* More from IKEA India */}
            <section className="more-from-ikea">
                <h3>More from IKEA India</h3>
                <div className="more-grid">
                    <div className="more-card">
                        <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=200" alt="Gift Card" />
                        <p>IKEA gift card &rarr;</p>
                    </div>
                    <div className="more-card">
                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200" alt="IKEA for Business" />
                        <p>IKEA for Business &rarr;</p>
                    </div>
                    <div className="more-card">
                        <img src="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=200" alt="IKEA food" />
                        <p>IKEA food &rarr;</p>
                    </div>
                    <div className="more-card">
                        <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=200" alt="Kitchen services" />
                        <p>Kitchen services &rarr;</p>
                    </div>
                    <div className="more-card">
                        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=200" alt="Interior design" />
                        <p>Interior design service &rarr;</p>
                    </div>
                    <div className="more-card">
                        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=200" alt="Click and Collect" />
                        <p>Click & Collect &rarr;</p>
                    </div>
                </div>
            </section>

            {/* More ideas and inspiration */}
            <section className="inspiration-section">
                <h3>More ideas and inspiration</h3>
                <div className="inspiration-filters">
                    {['All', 'Bedroom', 'Living room', 'Kitchen', 'Workspace', 'Outdoor', 'Bathroom', 'Baby & children room', 'Dining', 'Hallway', 'Laundry'].map((filter, index) => (
                        <button key={index} className="inspiration-pill">{filter}</button>
                    ))}
                </div>
                <div className="inspiration-masonry">
                    <img src="https://images.unsplash.com/photo-1505693416022-a4f61f5f3e72?auto=format&fit=crop&w=400" alt="Room 1" />
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400" alt="Room 2" />
                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400" alt="Room 3" />
                    <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=400" alt="Room 4" />
                    <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400" alt="Room 5" />
                    <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400" alt="Room 6" />
                </div>
            </section>

            {/* Footer SEO Text */}
            <section className="seo-text">
                <h3>Explore our furniture & home furnishing range</h3>
                <p>IKEA is a global leader in life at home.</p>
                <p>Whether you just moved into a new home or looking to revamp your current one, we at IKEA are here to inspire you with affordable home furniture solutions, there is a piece of furniture for every corner of your home. Create a home that is perfect for you.</p>
                <p>Shopping at IKEA is a bit different and exciting compared to your shopping at an everyday retail. It is about experiencing solutions first hand and getting to know ideas and inspirations that can fit perfectly into your home.</p>
            </section>
        </main>
    );
}

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productDB } from '../data/products';

export default function ProductDetail({ addToCart }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = productDB.find(p => p.id === id);
        setProduct(foundProduct);
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <main className="main-content" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <h2>Product Not Found</h2>
                <p style={{ margin: '1rem 0' }}>We couldn't find the product you're looking for.</p>
                <button onClick={() => navigate('/products')} className="apply-btn">
                    Back to Products
                </button>
            </main>
        );
    }

    return (
        <main className="main-content">
            <div className="breadcrumbs" style={{ marginBottom: '1rem' }}>
                <span onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>Products</span> &gt; <span>{product.name}</span>
            </div>

            <div className="pdp-layout" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="pdp-image-sec" style={{ flex: '1 1 400px' }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
                </div>
                <div className="pdp-info-sec" style={{ flex: '1 1 300px' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{product.name}</h1>
                    <p style={{ color: 'var(--text-sec)', fontSize: '1.1rem', marginBottom: '1rem' }}>{product.desc}</p>

                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                        Rs. {product.price.toLocaleString('en-IN')}
                        {product.originalPrice && (
                            <span style={{ fontSize: '1rem', color: 'var(--text-sec)', textDecoration: 'line-through', marginLeft: '1rem' }}>
                                Rs. {product.originalPrice.toLocaleString('en-IN')}
                            </span>
                        )}
                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className="apply-btn"
                        style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', borderRadius: '30px' }}
                    >
                        Add to bag
                    </button>
                </div>
            </div>
        </main>
    );
}

import React, { useState } from 'react';
import { products } from '../data/mockData';
import { Car, Truck, Bus, Construction, ShoppingCart, CreditCard } from 'lucide-react';

const vehicleIcons = { car: Car, truck: Truck, bus: Bus, crane: Construction };

const ProductCatalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (product, type) => {
    setSelectedProduct(product);
    setModalType(type);
    setShowModal(true);
  };

  return (
    <section className="py-24 bg-[#0d0d1a] relative" id="catalog">
      <div className="absolute inset-0 cyber-stripes" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d95]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#ff2d95]/50 font-mono-cyber">// PRODUCT_CATALOG</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4" style={{ fontFamily: 'Orbitron' }}>
            Product <span className="text-[#39ff14]">Catalog</span>
          </h2>
          <p className="mt-4 text-white/30 max-w-2xl mx-auto text-sm">
            All solutions with official warranty and installation according to H2 ELEMENT standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#0a0a0f]/80 backdrop-blur-sm overflow-hidden hover:-translate-y-2 transition-all duration-500"
              style={{ border: '1px solid rgba(57,255,20,0.1)' }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-[#39ff14]/50" />
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-[#39ff14]/50" />
              <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#00f0ff]/50" />
              <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-[#00f0ff]/50" />

              {/* Product Image */}
              <div className="relative h-52 bg-gradient-to-b from-[#111128] to-[#0a0a0f] flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.series} ${product.model}`}
                  className="h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(57,255,20,0.1))' }}
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 text-[10px] font-bold tracking-[0.2em] bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/30`} style={{ fontFamily: 'Orbitron' }}>
                    {product.series}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-black text-white" style={{ fontFamily: 'Orbitron', fontSize: '14px' }}>
                    {product.series} <span className="text-[#39ff14]">{product.model}</span>
                  </h3>
                  <div className="flex gap-1">
                    {product.vehicleTypes.map((type, i) => {
                      const Icon = vehicleIcons[type] || Car;
                      return <Icon key={i} size={14} className="text-white/20" />;
                    })}
                  </div>
                </div>

                <div className="space-y-1.5 mb-4 font-mono-cyber text-xs">
                  <p className="text-white/30">{product.engineVolume}</p>
                  <p className="text-white/30">{product.dimensions}</p>
                  <p className="text-[#39ff14]/60">{product.warranty}</p>
                </div>

                <div className="text-2xl font-black text-white mb-5 font-mono-cyber">
                  {product.price}
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => openModal(product, 'install')}
                    className="w-full py-3 bg-[#39ff14] hover:bg-[#39ff14]/90 text-[#0a0a0f] font-bold text-xs tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 cyber-clip-sm"
                    style={{ fontFamily: 'Orbitron', boxShadow: '0 0 15px rgba(57,255,20,0.2)' }}
                  >
                    <ShoppingCart size={14} />
                    ORDER INSTALLATION
                  </button>
                  <button
                    onClick={() => openModal(product, 'installment')}
                    className="w-full py-3 border border-[#00f0ff]/30 text-[#00f0ff] hover:bg-[#00f0ff]/5 hover:border-[#00f0ff]/60 font-bold text-xs tracking-[0.1em] transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Orbitron' }}
                  >
                    <CreditCard size={14} />
                    BUY IN INSTALLMENTS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div className="bg-[#0d0d1a] border border-[#39ff14]/20 p-8 max-w-md w-full mx-4"
               style={{ boxShadow: '0 0 40px rgba(57,255,20,0.1)' }}
               onClick={(e) => e.stopPropagation()}>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-[1px] bg-[#39ff14]" />
            <div className="absolute top-0 left-0 w-[1px] h-6 bg-[#39ff14]" />
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron', fontSize: '13px' }}>
                {modalType === 'install' ? 'ORDER INSTALLATION' : 'BUY IN INSTALLMENTS'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-white/30 hover:text-[#ff2d95] text-2xl transition-colors">
                &times;
              </button>
            </div>
            <div className="border border-[#39ff14]/15 p-4 mb-6 bg-[#39ff14]/5">
              <p className="font-bold text-white text-sm" style={{ fontFamily: 'Orbitron' }}>
                {selectedProduct.series} {selectedProduct.model}
              </p>
              <p className="text-[#39ff14] font-bold text-xl font-mono-cyber">{selectedProduct.price}</p>
            </div>
            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              <input type="text" placeholder="Your name"
                className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#39ff14]/50 transition-colors text-sm" />
              <input type="tel" placeholder="Phone number"
                className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#39ff14]/50 transition-colors text-sm" />
              <input type="email" placeholder="Email"
                className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#39ff14]/50 transition-colors text-sm" />
              <button type="submit"
                className="w-full py-3 bg-[#39ff14] text-[#0a0a0f] font-bold text-xs tracking-[0.15em] cyber-clip-sm transition-all"
                style={{ fontFamily: 'Orbitron', boxShadow: '0 0 15px rgba(57,255,20,0.2)' }}>
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCatalog;

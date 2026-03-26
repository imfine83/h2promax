import React, { useState } from 'react';
import { products } from '../data/mockData';
import { Car, Truck, Bus, Construction, ShoppingCart, CreditCard } from 'lucide-react';

const vehicleIcons = {
  car: Car,
  truck: Truck,
  bus: Bus,
  crane: Construction,
};

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
    <section className="py-24 bg-gray-50" id="catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2">
            Choose the right system for your engine
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Product Catalog
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            All solutions with official warranty and installation according to H2 ELEMENT standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.series} ${product.model}`}
                  className="h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    product.series === 'SMART'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-900 text-white'
                  }`}>
                    {product.series}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-gray-900">
                    {product.series} <span className="text-green-600">{product.model}</span>
                  </h3>
                  <div className="flex gap-1">
                    {product.vehicleTypes.map((type, i) => {
                      const Icon = vehicleIcons[type] || Car;
                      return <Icon key={i} size={16} className="text-gray-400" />;
                    })}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">{product.engineVolume}</p>
                  <p className="text-sm text-gray-600">{product.dimensions}</p>
                  <p className="text-sm text-green-600 font-medium">{product.warranty}</p>
                </div>

                <div className="text-3xl font-black text-gray-900 mb-6">
                  {product.price}
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => openModal(product, 'install')}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-600/25"
                  >
                    <ShoppingCart size={16} />
                    ORDER INSTALLATION
                  </button>
                  <button
                    onClick={() => openModal(product, 'installment')}
                    className="w-full py-3 border-2 border-gray-200 text-gray-700 hover:border-green-600 hover:text-green-600 font-bold text-sm tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <CreditCard size={16} />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">
                {modalType === 'install' ? 'Order Installation' : 'Buy in Installments'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="font-bold text-lg">{selectedProduct.series} {selectedProduct.model}</p>
              <p className="text-green-600 font-bold text-2xl">{selectedProduct.price}</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25"
              >
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

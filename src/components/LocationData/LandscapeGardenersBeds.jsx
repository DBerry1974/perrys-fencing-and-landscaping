import React from 'react';
import bedsTowns from './bedsTowns';

const LandscapeGardenersBeds = () => {
  return (
    <div className="landscape-gardeners-beds max-w-7xl mx-auto px-4 py-10 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-4">Landscape Gardeners in Bedfordshire</h2>

      <h3 className="text-2xl text-white font-bold mb-4">Towns</h3>
      <div className="lg:grid lg:grid-cols-4 gap-2">
        {bedsTowns.map((town, index) => (
          <div key={`towns-${index}`}>
            {/* Update the href to include the town name */}
            <a href={`/landscape-gardeners-bedfordshire/${town.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-900 hover:bg-brand-primary hover:text-white block p-2 bg-white">
            Landscape Gardeners {town.charAt(0).toUpperCase() + town.slice(1)}
</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandscapeGardenersBeds;
 
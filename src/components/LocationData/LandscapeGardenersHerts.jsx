import React from 'react';
import hertsTowns from './hertsTowns';

const LandscapeGardenersHerts = () => {
  return (
    <div className="landscape-gardeners-herts max-w-7xl mx-auto px-4 py-10 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-4">Landscape Gardeners in Hertfordshire</h2>

      <h3 className="text-2xl text-white font-bold mb-4">Towns</h3>
      <div className="lg:grid lg:grid-cols-4 gap-2">
        {hertsTowns.map((town, index) => (
          <div key={`towns-${index}`}>
            {/* Update the href to include the town name */}
            <a href={`/landscape-gardeners-hertfordshire/${town.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-900 hover:bg-brand-primary hover:text-white block p-2 bg-white">
            Landscape Gardeners {town.charAt(0).toUpperCase() + town.slice(1)}
</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandscapeGardenersHerts;
 
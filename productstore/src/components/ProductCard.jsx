const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-lg font-bold mt-3">
        {product.title}
      </h2>

      <p className="text-gray-600 text-sm mt-1">
        {product.category}
      </p>

      <p className="text-green-600 font-bold mt-2">
        ${product.price}
      </p>

      <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        View Product
      </button>

    </div>
  );
};

export default ProductCard;
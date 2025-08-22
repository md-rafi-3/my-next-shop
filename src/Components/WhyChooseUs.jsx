import { FaShippingFast, FaDollarSign, FaStar, FaHeadset } from 'react-icons/fa'

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaShippingFast className="text-4xl text-primary mb-2 mx-auto" />,
      title: 'Fast Delivery',
      desc: 'Get your products delivered quickly and safely.',
    },
    {
      icon: <FaDollarSign className="text-4xl text-primary mb-2 mx-auto" />,
      title: 'Affordable Prices',
      desc: 'Quality products at prices you love.',
    },
    {
      icon: <FaStar className="text-4xl text-primary mb-2 mx-auto" />,
      title: 'Best Quality',
      desc: 'Top-notch products that last long.',
    },
    {
      icon: <FaHeadset className="text-4xl text-primary mb-2 mx-auto" />,
      title: '24/7 Support',
      desc: 'We are here to help anytime you need.',
    },
  ]

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 mb-12">We provide quality products with fast delivery and excellent support.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-101"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react';

const reviews = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-aTx5RyOHSrimg-rv-1.png', 
    name: 'Jayla Graham',
    rating: 5,
    text: 'Great quality and perfect for our Dad\'s birthday. He\'s not a bracelet person but he LOVES this one.',
    verified: true
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-z4HuP8Py3wimg-rv-2.png',
    name: 'Meredith Nuñez',
    rating: 5,
    text: 'Looked great and feels like a great quality material.',
    verified: true
  },
  {
    id: 3,
    image: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-sICdfgcSK2img-rv-3.png',
    name: 'Kerrie Hesp',
    rating: 5,
    text: 'Beautifully crafted. I love it so much!',
    verified: true
  },
  {
    id: 4,
    image: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-88Xg4DmnHrimg-rv-4.png',
    name: 'Erika Svichla',
    rating: 4,
    text: 'The name tags are so small for a man\'s wrist and the kids\' names are tiny.',
    verified: true
  },
  {
    id: 5,
    image: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-E2qf1J7MCkimg-rv-5.png',
    name: 'Shelley',
    rating: 5,
    text: 'Love the quality of this bracelet.',
    verified: true
  },
  {
    id: 6,
    image: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-wSCVdgROHBimg-rv-6.png',
    name: 'Joanna Irvine',
    rating: 4,
    text: 'The name tags are so small for a man\'s wrist. It\'s a little too delicate for him.',
    verified: true
  },
  {
    id: 7,
    image: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-bWWgl3OlLzimg-rv-7.png',
    name: 'Evied',
    rating: 5,
    text: 'Super cute, my husband loved it!',
    verified: true
  },
  {
    id: 8,
    image: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-1VnxISTIsZimg-rv-8.png',
    name: 'Becky Priestley',
    rating: 5,
    text: 'Great quality! Arrived early and makes a perfect gift.',
    verified: true
  }
];

const ReviewGrid2 = () => {
  return (
    <div className="review-grid2">
      {reviews.map((review) => (
        <div className="review-card2" key={review.id}>
          <img src={review.image} alt={review.name} className="review-image2" />
          <div className="review-stars2">
            {'⭐'.repeat(review.rating)}
          </div>
          <p className="review-text2">{review.text}</p>
          <div className="reviewer-details2">
            <p className="reviewer-name2">{review.name}</p>
            {review.verified && <span className="verified-badge2">✔ Verified Buyer</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewGrid2;

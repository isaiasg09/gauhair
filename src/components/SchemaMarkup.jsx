import React from 'react';
import { siteData } from '../data/siteData';

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HairSalon", "BarberShop"],
        "@id": "https://gauchoshair.com.br/#barbershop",
        "name": siteData.nome,
        "alternateName": siteData.nomeCurto,
        "image": "https://gauchoshair.com.br/fotos/logo.png",
        "telephone": siteData.telefone,
        "url": "https://gauchoshair.com.br",
        "sameAs": [
          siteData.instagram
        ],
        "hasMap": siteData.maps,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "R. Márcia Pierroni, 68",
          "addressLocality": "Itu",
          "addressRegion": "SP",
          "postalCode": "13303-525",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -23.2641,
          "longitude": -47.2992
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": siteData.nota.toString(),
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": siteData.totalAvaliacoes.toString()
        },
        "review": siteData.avaliacoes.map((item) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": item.autor
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": item.nota.toString(),
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": item.texto
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://gauchoshair.com.br/#faq",
        "mainEntity": siteData.faq.map((item) => ({
          "@type": "Question",
          "name": item.pergunta,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.resposta
          }
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

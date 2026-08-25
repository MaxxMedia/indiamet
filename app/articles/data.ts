// app/articles/data.ts

export interface Article {
  id: string;
  attributes: {
    Title: string;
    Slug: string;
    Excerpt: string;
    Content: string;
    PublishedDate: string;
    Image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface PageData {
  Header: {
    Title: string;
    Content: string;
  };
  Sections: Array<{
    __typename: string;
    id: string;
    Articles?: Article[];
  }>;
}

/* ================================
   Articles with FULL HTML Content
================================ */

export const articles: Article[] = [
  {
    id: "97",
    attributes: {
      Title: "How Automation Is Transforming Modern Metrology",
      Slug: "how-automation-is-transforming-modern-metrology",
      Excerpt:
        "Automation technologies are transforming modern metrology by improving measurement accuracy, inspection speed, productivity, and manufacturing efficiency.",
      Content: `
    <p><strong>Automation in metrology</strong> is transforming the way manufacturers inspect, measure, and control the quality of precision components. With increasing demand for tighter tolerances in automotive, aerospace, electronics, medical devices, and engineering industries, manufacturers are integrating automated measurement technologies into their production processes.</p>

    <h2>The Shift Toward Automated Metrology</h2>
    <p>Modern manufacturing facilities are increasingly adopting automated CMMs, robotic inspection systems, machine vision, 3D scanning, and digital measurement technologies. These systems help reduce manual intervention while improving repeatability, accuracy, and inspection speed.</p>

    <h2>Key Technologies Driving Metrology Automation</h2>
    <ul>
      <li>Automated Coordinate Measuring Machines (CMMs)</li>
      <li>Robotic measurement and inspection systems</li>
      <li>Automated optical and vision inspection</li>
      <li>3D laser scanning and structured-light measurement</li>
      <li>AI-powered quality inspection systems</li>
    </ul>

    <h2>Benefits for Manufacturers</h2>
    <p>Automated metrology enables manufacturers to inspect complex components with consistent accuracy while reducing inspection time and human error. It also helps companies collect reliable measurement data for process improvement and quality control.</p>

    <p>Industry platforms such as <strong>INDIAMET – India International Metrology, Measurement Technology & Equipment Exhibition</strong> showcase advanced metrology technologies helping manufacturers move toward smarter and more automated quality systems.</p>
    `,
      PublishedDate: "2027-02-25T03:30:00.000Z",
      Image: {
        data: {
          attributes: {
            url: "/images/automation.webp"
          }
        }
      }
    }
  },

  {
    id: "96",
    attributes: {
      Title: "The Future of Industrial Metrology: Driving Smart Manufacturing with Precision",
      Slug: "future-trends-in-industrial-metrology-and-quality-engineering",
      Excerpt:
        "Discover how advanced metrology technologies, AI-powered inspection, digital measurement systems, and Quality 4.0 are transforming modern manufacturing across automotive, aerospace, electronics, medical devices, and semiconductor industries.",
      Content: `
    <p><strong>Industrial metrology</strong> forms the foundation of modern quality manufacturing. From automotive components to aerospace structures and semiconductor products, accurate measurement is essential for achieving dimensional accuracy, reliability, and consistent product quality.</p>

    <h2>Importance of Metrology in Industrial Production</h2>
    <p>Manufacturers rely on precision measurement to verify component dimensions, geometric characteristics, surface quality, and production tolerances. Accurate measurement helps ensure repeatability, reduce defects, and maintain compliance with engineering specifications.</p>

    <h2>Key Technologies Driving Metrology</h2>
    <ul>
      <li>Coordinate Measuring Machines (CMMs)</li>
      <li>3D scanning and optical measurement</li>
      <li>Machine vision inspection</li>
      <li>Advanced calibration systems</li>
      <li>AI-powered quality inspection</li>
    </ul>

    <h2>Metrology and Smart Manufacturing</h2>
    <p>Connected measurement systems are becoming an important part of Industry 4.0 manufacturing. Real-time inspection data can be integrated with production systems, quality management platforms, and statistical process control tools.</p>

    <p>Events such as <strong>INDIAMET 2027</strong> bring together metrology manufacturers, technology providers, calibration laboratories, and industrial buyers to explore the future of precision measurement and quality engineering.</p>
    `,
      PublishedDate: "2027-02-01T03:30:00.000Z",
      Image: {
        data: {
          attributes: {
            url: "/images/inspection_ai.jpg"
          }
        }
      }
    }
  },

  {
    id: "83",
    attributes: {
      Title: "Why Precision Measurement Is Critical for Next-Generation Manufacturing",
      Slug: "why-precision-measurement-is-critical-for-next-generation-manufacturing",
      Excerpt:
        "Explore how precision measurement, calibration, machine vision, coordinate measuring machines (CMMs), and digital inspection technologies are helping manufacturers improve quality, reduce defects, and achieve global manufacturing standards.",
      Content: `
    <h2>The Importance of Precision Measurement</h2>

    <p><strong>Precision measurement</strong> plays a critical role in modern manufacturing. As industries move toward tighter tolerances and increasingly complex components, reliable measurement systems are essential for maintaining product quality and manufacturing consistency.</p>

    <h2>Major Applications of Precision Measurement</h2>
    <ul>
      <li>Automotive and electric vehicle components</li>
      <li>Aerospace and defence manufacturing</li>
      <li>Electronics and semiconductor industries</li>
      <li>Medical devices and healthcare products</li>
      <li>Precision engineering and machine tools</li>
    </ul>

    <h2>Advanced Measurement Technologies</h2>
    <p>Manufacturers are increasingly using CMMs, optical measurement systems, 3D scanners, machine vision, surface measurement instruments, and digital inspection software to achieve higher levels of accuracy and repeatability.</p>

    <h2>Future Opportunities</h2>
    <p>The integration of automation, artificial intelligence, connected measurement systems, and real-time quality monitoring will further strengthen the role of metrology in next-generation manufacturing.</p>
    `,
      PublishedDate: "2027-01-20T03:30:00.000Z",
      Image: {
        data: {
          attributes: {
            url: "/images/cmm.jpg"
          }
        }
      }
    }
  },

  {
    id: "82",
    attributes: {
      Title: "Industrial Metrology Trends Shaping the Future of Manufacturing",
      Slug: "industrial-metrology-trends-shaping-the-future-of-manufacturing",
      Excerpt:
        "From 3D scanning and optical metrology to AI-powered quality inspection and automated measurement systems, discover the emerging technologies redefining industrial quality, productivity, and manufacturing excellence.",
      Content: `
    <p><strong>Industrial metrology</strong> is rapidly evolving as manufacturers integrate digital technologies into traditional inspection and quality control processes.</p>

    <h2>Industry 4.0 in Metrology</h2>
    <p>Manufacturers are adopting connected measurement equipment, real-time inspection data, automated reporting, and predictive quality systems to improve productivity and reduce manufacturing errors.</p>

    <h2>Key Technologies</h2>
    <ul>
      <li>3D laser scanning</li>
      <li>Optical and vision measurement systems</li>
      <li>Industrial IoT measurement devices</li>
      <li>AI-driven quality inspection</li>
      <li>Digital twins and virtual inspection</li>
      <li>Cloud-based metrology software</li>
    </ul>

    <h2>Connected Quality Systems</h2>
    <p>Modern metrology systems can connect measurement data with manufacturing and quality platforms. This enables manufacturers to identify process variations quickly and take corrective action before defects increase.</p>

    <p>These technologies are helping manufacturers improve measurement accuracy, reduce inspection time, and build more efficient quality management systems.</p>
    `,
      PublishedDate: "2025-12-25T04:15:00.000Z",
      Image: {
        data: {
          attributes: {
            url: "/images/3dscanner.png"
          }
        }
      }
    }
  },

  {
    id: "85",
    attributes: {
      Title: "Key Technologies Driving Innovation in Industrial Metrology",
      Slug: "key-technologies-driving-innovation-in-industrial-metrology",
      Excerpt:
        "Explore the latest measurement, inspection, calibration, and quality technologies transforming industrial metrology worldwide.",
      Content: `
    <p>The industrial metrology sector is undergoing rapid technological transformation. New measurement technologies and digital inspection systems are enabling manufacturers to achieve higher accuracy while improving inspection productivity.</p>

    <h2>Emerging Metrology Technologies</h2>
    <ul>
      <li>Advanced Coordinate Measuring Machines</li>
      <li>3D laser scanning and structured-light scanning</li>
      <li>Machine vision inspection systems</li>
      <li>Automated calibration technologies</li>
      <li>AI-powered quality inspection</li>
      <li>Digital metrology and measurement software</li>
    </ul>

    <p>These innovations allow manufacturers to reduce inspection time, improve measurement reliability, identify defects earlier, and maintain consistent product quality.</p>

    <p><strong>INDIAMET 2027 – India International Metrology, Measurement Technology & Equipment Exhibition</strong> will showcase advanced metrology technologies and connect global measurement technology suppliers with manufacturers, quality professionals, and industrial buyers.</p>
    `,
      PublishedDate: "2025-12-15T06:00:00.000Z",
      Image: {
        data: {
          attributes: {
            url: "/images/calibration2.png"
          }
        }
      }
    }
  },

  {
    id: "84",
    attributes: {
      Title: "Future Trends in Industrial Metrology and Quality Engineering",
      Slug: "future-trends-in-industrial-metrology-and-quality-engineering",
      Excerpt:
        "Discover the key trends shaping the future of industrial metrology, precision measurement, inspection, calibration, and quality engineering.",
      Content: `
    <p>The global <strong>industrial metrology industry</strong> is evolving rapidly as manufacturers adopt advanced measurement equipment, digital technologies, artificial intelligence, and automated inspection systems.</p>

    <h2>Major Metrology Trends</h2>
    <ul>
      <li>Growth of automated measurement systems</li>
      <li>Increasing adoption of 3D scanning and optical metrology</li>
      <li>AI-powered inspection and defect detection</li>
      <li>Integration of metrology with Industry 4.0 systems</li>
      <li>Digital calibration and measurement management</li>
      <li>Real-time quality monitoring</li>
    </ul>

    <h2>Global Market Outlook</h2>
    <p>Demand for advanced metrology solutions will continue to grow as industries require higher precision, tighter tolerances, improved traceability, and faster inspection cycles.</p>

    <p>International industry events such as <strong>INDIAMET</strong> provide a platform for metrology manufacturers, technology providers, calibration laboratories, quality professionals, and industrial buyers to explore new technologies and business opportunities.</p>
    `,
      PublishedDate: "2025-12-05T09:15:00.000Z",
      Image: {
        data: {
          attributes: {
            url: "/images/industry_metrology.png"
          }
        }
      }
    }
  }
];

/* ================================
   Page Data
================================ */

export const mockPageData: PageData = {
  Header: {
    Title: "Metrology Insights & Industry News",
    Content:
      "Explore the latest technologies, trends, innovations, and expert insights shaping the future of industrial metrology, precision measurement, quality assurance, and smart manufacturing."
  },
  Sections: [
    {
      __typename: "ComponentTransRussiaArticlesList",
      id: "2",
      Articles: articles
    }
  ]
};

/* ================================
   Helper Functions
================================ */

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  return articles.find(article => article.attributes.Slug === slug) || null;
}

export function getAllArticleSlugs(): string[] {
  return articles.map(article => article.attributes.Slug);
}
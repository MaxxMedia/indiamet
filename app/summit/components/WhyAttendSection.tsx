import React from "react";

export default function WhyAttendSection() {
  return (
    <section className="animated-block">
      <div className="animated-block-target">
        <div className="container">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10 text-black">
  Why Attend INDIAMET Summit2027
</h2>
          <div className="rte-style [&_a]:underline [&_blockquote]:relative [&_blockquote]:ml-5 [&_blockquote]:w-fit [&_blockquote]:border-l-4 [&_blockquote]:border-black [&_blockquote]:bg-[#f9f9f9] [&_blockquote]:p-5 [&_blockquote]:italic [&_h1]:lg:text-4xl [&_h2]:lg:text-3xl [&_h3]:lg:text-2xl [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5">
            <div className="overflow-x-auto">
              <figure className="table min-w-[300px] w-full">
                <table className="ck-table-resized w-full">
                  <colgroup>
                    <col className="w-[60px] md:w-[8.45%]" />
                    <col className="w-auto md:w-[91.55%]" />
                  </colgroup>
                  <tbody>
                    {[
                      {
                        icon: "info_1ac9f9903c.png",
                        title: "Gain Insights into the Latest Metrology & Quality Technologies",
                        description: "Stay ahead of the rapidly evolving manufacturing landscape by exploring the latest innovations in industrial metrology, precision measurement, calibration, machine vision, 3D scanning, AI-powered inspection, digital quality management, and Industry 4.0. Learn directly from global technology leaders, manufacturing experts, and quality professionals about emerging trends and best practices shaping the future of precision manufacturing."
                      },
                      {
                        icon: "profits_7bf2b98a13.png",
                        title: "Discover New Business & Technology Opportunities",
                        description: "Explore how advanced metrology solutions can improve manufacturing accuracy, reduce production costs, enhance product quality, and accelerate digital transformation. Gain valuable insights into applications across automotive, aerospace, defence, medical devices, electronics, semiconductor, heavy engineering, and precision manufacturing industries."
                      },
                      {
                        icon: "chat_6c367bef7a.png",
                        title: "Build High-Value Industry Connections",
                        description: "The INDIAMET Summitprovides an exclusive platform to network with metrology professionals, quality managers, manufacturing leaders, OEMs, calibration laboratories, research institutions, government organizations, automation providers, and technology innovators. Exchange knowledge, share industry experiences, and establish strategic partnerships that support long-term business growth."
                      },
                      {
                        icon: "sales_348ae8dd98.png",
                        title: "Maximise Your Exhibition & Business ROI",
                        description: "Summitsessions provide exhibitors and delegates with valuable market intelligence, customer insights, and technology trends that help strengthen product positioning, identify new business opportunities, and improve engagement with prospective customers during the exhibition. Attendees can align their business strategies with evolving industry demands while maximizing the value of their participation at INDIAMET 2027."
                      }
                    ].map((item, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td className="py-2 md:py-4 align-top">
                            <figure className="image image-style-side image_resized mx-auto md:mx-0" style={{ width: '40px', maxWidth: '75px', margin: '0 auto' }}>
                              <img
                                style={{ aspectRatio: '512/512' }}
                                src={`/images/${item.icon}`}
                                alt={item.icon}
                                width={512}
                                height={512}
                                className="w-full h-auto"
                              />
                            </figure>
                          </td>
                          <td className="py-2 md:py-4 pl-2 md:pl-4 align-top">
                            <strong className="text-sm md:text-base lg:text-lg">{item.title}</strong>
                            <br />
                            <span className="text-xs md:text-sm lg:text-base">{item.description}</span>
                          </td>
                        </tr>
                        {index < 3 && (
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

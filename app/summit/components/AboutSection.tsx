export default function AboutSection() {
  return (
    <section className="animated-block">
      <div className="animated-block-target">
        <div className="container">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10 text-black">
            About the Summit
          </h2>

          <div className="rte-style [&_a]:underline [&_blockquote]:relative [&_blockquote]:ml-5 [&_blockquote]:w-fit [&_blockquote]:border-l-4 [&_blockquote]:border-black [&_blockquote]:bg-[#f9f9f9] [&_blockquote]:p-5 [&_blockquote]:italic [&_h1]:lg:text-4xl [&_h2]:lg:text-3xl [&_h3]:lg:text-2xl [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5">
            <div className="overflow-x-auto">
              <figure className="table min-w-[300px]">
                <table className="w-full">
                  <tbody>

                    <tr className="flex flex-col md:table-row">
                      <td className="py-2 md:py-0">
                        <figure
                          className="image image-style-side image_resized mx-auto md:mx-0"
                          style={{ width: "50%", maxWidth: "75px", margin: "0 auto" }}
                        >
                          <img
                            src="YOUR_USERS_IMAGE_URL"
                            alt="Users"
                            width={328}
                            height={328}
                            className="w-full h-auto"
                            style={{ aspectRatio: "328/328" }}
                          />
                        </figure>
                      </td>

                      <td className="py-2 md:py-0 px-4 md:px-0">
                        <span className="text-sm md:text-base lg:text-[19px]">
                          <strong>300+ senior delegates</strong> from leading
                          metrology companies, automotive OEMs, aerospace
                          manufacturers, precision engineering firms, medical
                          device companies, electronics manufacturers, and
                          quality-driven industries.
                        </span>
                      </td>

                      <td className="py-2 md:py-0">
                        <figure
                          className="image image-style-side image_resized mx-auto md:mx-0"
                          style={{ width: "50%", maxWidth: "75px", margin: "0 auto" }}
                        >
                          <img
                            src="/images/microphone_lines_solid_full_ee6b12ccb8.png"
                            alt="Microphone"
                            width={328}
                            height={328}
                            className="w-full h-auto"
                            style={{ aspectRatio: "328/328" }}
                          />
                        </figure>
                      </td>

                      <td className="py-2 md:py-0 px-4 md:px-0">
                        <span className="text-sm md:text-base lg:text-[19px]">
                          <strong>30+ speakers</strong> including metrology
                          experts, quality leaders, manufacturing executives,
                          R&D specialists, Industry 4.0 innovators, tool room
                          heads, and technology specialists.
                        </span>
                      </td>
                    </tr>

                    <tr className="hidden md:table-row">
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>

                    <tr className="flex flex-col md:table-row">
                      <td className="py-2 md:py-0">
                        <figure
                          className="image image_resized image-style-side mx-auto md:mx-0"
                          style={{ width: "50%", maxWidth: "75px", margin: "0 auto" }}
                        >
                          <img
                            src="/images/chart_simple_solid_full_12aaff66c1.png"
                            alt="Chart"
                            width={329}
                            height={328}
                            className="w-full h-auto"
                            style={{ aspectRatio: "329/328" }}
                          />
                        </figure>
                      </td>

                      <td className="py-2 md:py-0 px-4 md:px-0">
                        <span className="text-sm md:text-base lg:text-[19px]">
                          <strong>15+ hours of technical sessions</strong>{" "}
                          covering industrial metrology, precision measurement,
                          quality assurance, calibration, AI-powered inspection,
                          digital manufacturing, and smart factory innovations.
                        </span>
                      </td>

                      <td className="py-2 md:py-0">
                        <figure
                          className="image image-style-side image_resized mx-auto md:mx-0"
                          style={{ width: "50%", maxWidth: "75px", margin: "0 auto" }}
                        >
                          <img
                            src="/images/comment_dots_solid_full_71c6e8b715.png"
                            alt="Networking"
                            width={328}
                            height={328}
                            className="w-full h-auto"
                            style={{ aspectRatio: "328/328" }}
                          />
                        </figure>
                      </td>

                      <td className="py-2 md:py-0 px-4 md:px-0">
                        <span className="text-sm md:text-base lg:text-[19px]">
                          <strong>8+ hours of networking</strong> with
                          metrology professionals, OEMs, Tier 1 & Tier 2
                          suppliers, quality engineers, calibration laboratories,
                          automation solution providers, research institutions,
                          and procurement decision-makers.
                        </span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
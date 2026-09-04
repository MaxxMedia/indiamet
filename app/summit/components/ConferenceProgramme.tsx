"use client";

import React, { useState } from "react";
import SectionContainer from "@/components/UI/SectionContainer";

interface SessionTopic {
  id: number;
  title: string;
}

interface Speaker {
  name: string;
  position: string;
}

interface Session {
  time: string;
  title: string;
  description?: string;
  moderator?: Speaker;
  speakers?: Speaker[];
  topics?: SessionTopic[];
}

interface DayProgram {
  day: string;
  date: string;
  description: string;
  sessions: Session[];
}

const TransRussiaSummitProgram: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);
  const programData: DayProgram[] = [
    // {
    //   day: "VIP Reception",
    //   date: "April 22, 2027",
    //   description: "*Only for Exhibitors,Speakers,VIP's and Delegates",
    //   sessions: [
    //     {
    //       time: "18:00 – 21:00",
    //       title: "INDIAMET VIP RECEPTION",
    //       description: "A special event at the Auto Cluter Exhibition Centre, Pune"
    //     }
    //   ]
    // },
    {
      day: "Day 1 Theme : The Future of Industrial Metrology – Precision, Digitalization & Manufacturing Excellence",
      date: "April 22, 2027",
      description: "*For delegates",
      sessions: [
        {
          time: "09:00 – 09:35",
          title: "Registration & Hi Tea"
        },
        {
          time: "09:35 – 09:40",
          title: "Lamp Lighting"
        },
                {
                    time: "09:40 – 9:45",
          title: 'Welcome Address"',
                   
          speakers: [
        {
              name: "Mr. Padmanabham R",
              position: "MD Maxx Business Media Pvt.Ltd.,",
            },
              ],
        },
        {
                    time: "09:45 – 9:55",
          title: 'Chief Guest Address"',
                   
          speakers: [
        {
              name: "",
              position: "",
            },
              ],
        },
 {
                    time: "09:55 – 10:05",
          title: 'Guest of Honour Address"',
                   
          speakers: [
        {
              name: "",
              position: "",
            },
              ],
        },

         {
                    time: "10:05 – 10:15",
          title: 'Guest of Honour Address"',
                   
          speakers: [
        {
              name: "",
              position: "",
            },
              ],
        },
      
        {
          time: "10:15 – 10:25",
          title: "Inaugural Keynote - India's Vision for Precision Manufacturing & Metrology Leadership 2035",
          speakers: [
            { name: "", position: "" },
                 ],
        },

        {
          time: "10:25 – 10:30",
          title: 'Vote of Thanks"',
          speakers: [
            { name: "Director", position: "Maxx Business Media Pvt.Ltd.," },
                 ],
        },
            {
          time: "10:30 – 11:30",
          title: 'Panel Discussion : Metrology 4.0 – Enabling Smart Manufacturing & Digital Quality',
          description: "Session Topics:",
          topics: [
            { id: 1, title: "AI-powered inspection and intelligent quality control" },
            { id: 2, title: "Digital metrology for Industry 4.0" },
            { id: 3, title: "Connected manufacturing using IoT-enabled measurement systems" },
            { id: 4, title: "Digital twins and closed-loop manufacturing" },
            { id: 5, title: "Digital twins and closed-loop manufacturingConnected manufacturing using IoT-enabled measurement systems" },
            { id: 6, title: "Smart factories powered by precision measurement" },

                     ],
          moderator: {
            name: "",
            position: "",
          },
          speakers: [
            { name: "", position: "" },
            { name: "", position: "" },
            { name: "", position: "" },
            { name: "", position: "" },
       
          ],
        },
               {
          time: "11:30 – 12:00",
          title: 'Technical Session 1 : Advances in Coordinate Measuring Machines (CMMs) & Precision Measurement',
          description: "Session Topics:",
          topics: [
            { id: 1, title: "Latest developments in bridge, gantry and horizontal arm CMMs" },
            { id: 2, title: "Multi-sensor measurement technologies" },
            { id: 3, title: "Increasing inspection speed without compromising accuracy" },
            { id: 4, title: "Automation-ready CMM solutions" },
                       ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
        {
          time: "12:00 – 12:30",
          title: "Technical Session 2 : 3D Optical Metrology, Laser Scanning & Machine Vision",
            description: "Session Topics:",
          topics: [
            { id: 1, title: "Non-contact measurement technologies" },
            { id: 2, title: "Non-contact measurement technologies" },
            { id: 3, title: "Optical measurement for complex geometries" },
            { id: 4, title: "Automated vision inspection systems" },
            { id: 5, title: "Reverse engineering applications" },
                       ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
        {
          time: "12:30 – 13:00",
          title: "Fireside Chat : Precision Manufacturing in the EV & Aerospace Era",
         description: "Discussion Points:",
          topics: [
            { id: 1, title: "Tight tolerance requirements" },
            { id: 2, title: "Lightweight component inspection" },
            { id: 3, title: "Battery manufacturing quality" },
            { id: 4, title: "Aerospace certification challenges" },
            { id: 5, title: "Future inspection technologies" },
                       ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
  {
          time: "13:00 – 14:00",
          title: "Networking Lunch"
        },
{
          time: "14:00 – 14:30",
          title: 'Technical Session 3 : Calibration, Traceability & Quality Standards"',
       description: "Session Topics:",
          topics: [
            { id: 1, title: "ISO 17025" },
            { id: 2, title: "Calibration best practices" },
            { id: 3, title: "Measurement uncertainty" },
            { id: 4, title: "International traceability" },
            { id: 5, title: "NABL ecosystem" },
                       ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },

        {
          time: "14:30 – 15:30",
          title: 'Panel Discussion : Quality 4.0 – The Future of Digital Inspection & Manufacturing Excellence',
          description: "Discussion Topics:",
          topics: [
            { id: 1, title: "AI in dimensional inspection" },
            { id: 2, title: "Digital quality management" },
            { id: 3, title: "Predictive quality analytics" },
            { id: 4, title: "Automated inspection cells" },
            { id: 5, title: "Zero-defect manufacturing" },
            { id: 6, title: "Smart production lines" },
                     ],
          moderator: {
            name: "",
            position: "",
          },
          speakers: [
            { name: "", position: "" },
            { name: "", position: "" },
            { name: "", position: "" },
            { name: "", position: "" },
       
          ],
        },
        {
          time: "15:30 – 16:00",
          title: "Networking Hi Tea"
        },
{
          time: "16:30 – 16:30",
          title: "Fireside Chat : The Future of AI, Digital Twins & Smart Metrology",
          description: "Discussion Points:",
          topics: [
            { id: 1, title: "AI-assisted inspection" },
            { id: 2, title: "Digital twins for manufacturing" },
            { id: 3, title: "Predictive quality control" },
            { id: 4, title: "Cloud-connected metrology" },
            { id: 5, title: "Autonomous inspection systems" },
             { id: 6, title: "Next-generation manufacturing intelligence" },
                       ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
{
          time: "16:30 – 17:00",
          title: 'Technical Session 4 : Industrial Metrology for Automotive, Medical Devices & Semiconductor Manufacturing',
          description: "Session Topics:",
          topics: [
            { id: 1, title: "Precision measurement for EV components" },
            { id: 2, title: "Medical implant inspection" },
            { id: 3, title: "Semiconductor metrology" },
            { id: 4, title: "Micro-measurement technologies" },
            { id: 5, title: "High-precision manufacturing" },
                       ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
{
          time: "17:00 – 17:10",
          title: 'Closing Remarks"',
          speakers: [
            { name: "", position: "" },
                 ],
        },



      ],
    },
    {

      day: "Day 2 Theme : Innovation, Sustainability & Next-Generation Measurement Technologies",
      date: "April 23, 2027",
      description: "*For delegates of all categories",
      sessions: [
        {
          time: "09:30 – 10:00",
          title: "Registration & Hi Tea"
        },
                    {
          time: "10:00 – 11:00",
          title: 'Panel Discussion : Future of Precision Manufacturing: Emerging Trends in Industrial Metrology',
          description: "Discussion Topics:",
          topics: [
            { id: 1, title: "Sustainability in precision manufacturing" },
            { id: 2, title: "Green metrology and energy-efficient inspection" },
            { id: 3, title: "Digital quality ecosystems" },
            { id: 4, title: "Global metrology standards" },
            { id: 5, title: "Future manufacturing technologies" },
             { id: 6, title: "Building globally competitive factories" },
                     ],
          moderator: {
            name: "",
            position: "",
          },
          speakers: [
            { name: "", position: "" },
            { name: "", position: "" },
            { name: "", position: "" },
            { name: "", position: "" },
       
          ],
        },
               {
          time: "11:00 – 11:30",
          title: 'Technical Session 5 : Portable Metrology & On-Machine Measurement Technologies',
             description: "Session Topics:",
          topics: [
            { id: 1, title: "Portable CMMs and articulated arms" },
            { id: 2, title: "Laser trackers for large-volume inspection" },
            { id: 3, title: "In-process measurement" },
            { id: 4, title: "Shop-floor metrology" },
            { id: 5, title: "Real-time dimensional verification" },
                       ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
        {
          time: "11:30 – 12:00",
          title: "Fireside Chat : Metrology for the Semiconductor & Electronics Revolution",
              description: "Discussion Points:",
          topics: [
            { id: 1, title: "Semiconductor inspection challenges" },
            { id: 2, title: "Wafer and micro-component measurement" },
            { id: 3, title: "PCB and electronics quality" },
            { id: 4, title: "Ultra-precision manufacturing" },
            { id: 5, title: "Future opportunities in India's semiconductor ecosystem" },
            ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
         {
          time: "12:00 – 12:30",
          title: 'Technical Session 6 : Surface Metrology & Form Measurement',
             description: "Session Topics:",
          topics: [
            { id: 1, title: "Surface roughness evaluation" },
            { id: 2, title: "Roundness and cylindricity" },
            { id: 3, title: "Profile and contour measurement" },
            { id: 4, title: "Form accuracy analysis" },
            { id: 5, title: "Precision finishing verification" },
            ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
           {
          time: "12:30 – 13:00",
          title: 'Technical Session 7 : Industrial CT Scanning & Non-Destructive Testing (NDT)',
                  description: "Session Topics:",
          topics: [
            { id: 1, title: "Industrial CT inspection" },
            { id: 2, title: "Internal defect detection" },
            { id: 3, title: "X-ray measurement systems" },
            { id: 4, title: "Digital radiography" },
            { id: 5, title: "Advanced NDT for critical components" },
            ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
        
        {
          time: "13:00 – 14:00",
          title: "Networking Lunch"
        },


        {
          time: "14:00 – 15:00",
          title: 'Panel Discussion : Global Metrology Trends & India"s Manufacturing Competitiveness',
          description: "Discussion Topics:",
          topics: [
            { id: 1, title: "International quality regulations" },
            { id: 2, title: "Export readiness through precision" },
            { id: 3, title: "Global supply chain requirements" },
            { id: 4, title: "Smart manufacturing benchmarks" },
            { id: 5, title: "Workforce development" },
             { id: 6, title: "India's roadmap to becoming a global metrology hub" },
                     ],
          moderator: {
            name: "",
            position: "",
          },
          speakers: [
            { name: "", position: "" },
            { name: "", position: "" },
            { name: "", position: "" },
            { name: "", position: "" },
       
          ],
        },
        {
          time: "15:00 – 15:30",
          title: "Networking Hi Tea"
        },
{
          time: "15:30 – 16:00",
          title: "Fireside Chat : Precision Without Limits – The Next Generation of Industrial Metrology",
                    description: "Discussion Topics:",
          topics: [
            { id: 1, title: "AI-enabled measurement systems" },
            { id: 2, title: "Portable metrology and in-line inspection" },
            { id: 3, title: "Digital twins and predictive quality" },
            { id: 4, title: "Cloud-connected manufacturing" },
            { id: 5, title: "Future of autonomous inspection" },
            ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
{
          time: "16:00 – 16:30",
          title: 'Technical Session 8 : Calibration Laboratories, Accreditation & Compliance',
                  description: "Session Topics:",
          topics: [
            { id: 1, title: "NABL accreditation best practices" },
            { id: 2, title: "Laboratory automation" },
            { id: 3, title: "Digital calibration certificates" },
            { id: 4, title: "Traceability chains management" },
            { id: 5, title: "International compliance" },
            ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },


        {
          time: "16:30 – 17:00",
          title: 'Technical Session 9 : Additive Manufacturing Inspection & Reverse Engineering',
        description: "Session Topics:",
          topics: [
            { id: 1, title: "Inspection of 3D printed components" },
            { id: 2, title: "Reverse engineering workflows" },
            { id: 3, title: "GD&T validation" },
            { id: 4, title: "Digital manufacturing verification" },
            { id: 5, title: "Hybrid manufacturing inspection" },
            ],
          speakers: [
            {
              name: "",
              position: ""
            }
          ],
        },
{
          time: "17:00 – 17:10",
          title: 'Closing Remarks"',
          speakers: [
            { name: "", position: "" },
                 ],
        },
      ],
    },
  ];

const selectedDay = programData[activeDay];

  return (
    <SectionContainer bgColor="bg-white">
      <div className="w-full">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-black mb-10">
          Driving Precision, Quality & Smart Manufacturing through Advanced Metrology
        </h1>

        {/* Day Toggle Buttons */}
        <div className="flex gap-6 mb-16">
          {programData.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300
                ${
                  activeDay === index
                    ? "bg-[#8F071D] text-white"
                    : "bg-[#00857C] text-white hover:opacity-90"
                }
              `}
            >
              {day.date.replace("Thursday, ", "").replace("Friday, ", "")}
            </button>
          ))}
        </div>

        {/* Selected Day Content */}
        <div className="border-t border-gray-300 pt-10">

          {/* Day Header */}
          <div className="mb-12">
            <p className="text-[#4D4D4D] font-semibold text-2xl mb-3">
              {selectedDay.day} • {selectedDay.date}
            </p>
          </div>

          {/* Sessions */}
          <div className="space-y-14">
            {selectedDay.sessions.map((session, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8"
              >
                {/* Time */}
                <div className="text-[#4D4D4D] text-lg font-medium">
                  {session.time}
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">
                    {session.title}
                  </h2>

                  {session.description && (
                    <p className="text-[#4D4D4D] text-lg mb-4">
                      {session.description}
                    </p>
                  )}

                  {session.topics && (
                    <ul className="list-disc pl-6 space-y-2 text-[#4D4D4D] text-lg mb-4">
                      {session.topics.map((topic) => (
                        <li key={topic.id}>{topic.title}</li>
                      ))}
                    </ul>
                  )}

                  {session.speakers && (
                    <div className="space-y-2">
                      {session.speakers.map((speaker, i) => (
                        <div key={i}>
                          <p className="text-[#4D4D4D] text-base">
                            {speaker.position}
                          </p>
                          <p className="text-[#4D4D4D] text-lg">{speaker.name}</p>
                          
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </SectionContainer>
  );
};

export default TransRussiaSummitProgram;

import React from "react";

interface CompanyData {
  description: string;
  employees: number;
  listDate: string;
  headquarters: string;
}

const companyData: CompanyData = {
  description: `Meta Platforms, Inc. engages in the development of social media applications. It builds technology that helps people connect and share, find communities, and grow businesses. It operates through the Family of Apps (FoA) and Reality Labs (RL) segments. The FoA segment consists of Facebook, Instagram, Messenger, WhatsApp, and other services. The RL segment includes augmented, mixed and virtual reality related consumer hardware, software, and content. The company was founded by Mark Elliot Zuckerberg, Dustin Moskovitz, Chris R. Hughes, Andrew McCollum, and Eduardo P. Saverin on February 4, 2004, and is headquartered in Menlo Park, CA. The listed name for META is Meta Platforms, Inc. Class A Common Stock.`,
  employees: 450,
  listDate: "March 15, 2000",
  headquarters: "South San Francisco, CA",
};

const CompanyProfile = () => {
  return (
    <div className="bg-white  ">
      <h2 className="text-2xl font-semibold text-[#090A0B] ">
        Company Profile
      </h2>
      <hr className="my-3.5 text-[#E9EAEB]" />
      <div className="space-y-5 lg:space-y-4">
        {/* Description */}
        <div>
          <p className="text-[#383D41] leading-[24px] whitespace-normal lg:whitespace-break-spaces text-sm">
            {companyData.description}
          </p>
        </div>

        {/* Company Details */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 ">
          <div>
            <p className="text-[#383D41] text-sm mb-2">Employees</p>
            <p className="text-sm font-bold text-[#211B1B]">
              {companyData.employees}
            </p>
          </div>

          <div>
            <p className="text-[#383D41] text-sm mb-2">List Date</p>
            <p className="text-sm font-bold text-[#211B1B]">
              {companyData.listDate}
            </p>
          </div>

          <div>
            <p className="text-[#383D41] text-sm mb-2">Headquarters</p>
            <p className="text-sm font-bold text-[#211B1B]">
              {companyData.headquarters}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;

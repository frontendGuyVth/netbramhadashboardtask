export const FooterComponent = () => {
  const policies = [
    "FAQs",
    "Terms and Conditions",
    "Privacy Policy",
    "Raise a Dispute",
  ];
  return (
    <div className="flex flex-col justify-between items-center bg-white font-normal text-[#262626] text-[14px] py-6 px-[20px]">
      <>
        <p>© Copyright 2025 NetBramha Studio LLP. All Rights Reserved.</p>
      </>
      <section className="flex space-x-4 mt-2">
        {policies.map((policy) => (
          <a href="#" key={policy} className="px-2 font-normal text-[14px] underline text-[#262626]">
            {policy}
          </a>
        ))}
      </section>
    </div>
  );
};

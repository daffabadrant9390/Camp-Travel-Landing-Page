import React from 'react';

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="whitespace-nowrap bold-18">{title}</h4>
      {children}
    </div>
  );
};

export default FooterColumn;

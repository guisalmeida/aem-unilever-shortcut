import React, { AnchorHTMLAttributes } from 'react';

interface SpectrumAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: string;
}

const AnchorListItem: React.FC<SpectrumAnchorProps> = ({ icon, children, ...props }) => (
  <a {...props} data-icon={icon}>
    {children}
  </a>
);

export default AnchorListItem;


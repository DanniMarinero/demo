import { memo, SVGProps } from 'react';

const ListItemLinkSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.70833 1.91667H4.79167C3.7375 1.91667 2.875 2.77917 2.875 3.83333V5.75C2.875 6.80417 3.7375 7.66667 4.79167 7.66667H6.70833C7.7625 7.66667 8.625 6.80417 8.625 5.75V3.83333C8.625 2.77917 7.7625 1.91667 6.70833 1.91667ZM4.79167 5.75V3.83333H6.70833V5.75H4.79167Z'
      fill='white'
    />
    <path
      d='M6.70833 8.625H4.79167C3.7375 8.625 2.875 9.4875 2.875 10.5417V12.4583C2.875 13.5125 3.7375 14.375 4.79167 14.375H6.70833C7.7625 14.375 8.625 13.5125 8.625 12.4583V10.5417C8.625 9.4875 7.7625 8.625 6.70833 8.625ZM4.79167 12.4583V10.5417H6.70833V12.4583H4.79167Z'
      fill='white'
    />
    <path
      d='M6.70833 15.3333H4.79167C3.7375 15.3333 2.875 16.1958 2.875 17.25V19.1667C2.875 20.2208 3.7375 21.0833 4.79167 21.0833H6.70833C7.7625 21.0833 8.625 20.2208 8.625 19.1667V17.25C8.625 16.1958 7.7625 15.3333 6.70833 15.3333ZM4.79167 19.1667V17.25H6.70833V19.1667H4.79167Z'
      fill='white'
    />
    <path
      d='M11.5 5.75H20.125C20.7 5.75 21.0833 5.36667 21.0833 4.79167C21.0833 4.21667 20.7 3.83333 20.125 3.83333H11.5C10.925 3.83333 10.5417 4.21667 10.5417 4.79167C10.5417 5.36667 10.925 5.75 11.5 5.75Z'
      fill='white'
    />
    <path
      d='M20.125 10.5417H11.5C10.925 10.5417 10.5417 10.925 10.5417 11.5C10.5417 12.075 10.925 12.4583 11.5 12.4583H20.125C20.7 12.4583 21.0833 12.075 21.0833 11.5C21.0833 10.925 20.7 10.5417 20.125 10.5417Z'
      fill='white'
    />
    <path
      d='M20.125 17.25H11.5C10.925 17.25 10.5417 17.6333 10.5417 18.2083C10.5417 18.7833 10.925 19.1667 11.5 19.1667H20.125C20.7 19.1667 21.0833 18.7833 21.0833 18.2083C21.0833 17.6333 20.7 17.25 20.125 17.25Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(ListItemLinkSvgIcon);
export { Memo as ListItemLinkSvgIcon };
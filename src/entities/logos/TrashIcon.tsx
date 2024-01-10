interface IProps {
  className?: string;
}

const TrashIcon = (props: IProps) => {
  return (
    <div
      className={props.className}
      style={{
        width: '16px',
        height: '16px',

        border: 'none',
      }}
    >
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="16px"
        height="16px"
        viewBox="0 0 485 485"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <rect x="67.224" width="350.535" height="71.81" />
            <path
              d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447
        h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default TrashIcon;

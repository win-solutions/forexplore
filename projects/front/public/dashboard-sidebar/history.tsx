interface HistoryIconType {
  fill?: string;
}

export const History = ({ fill = 'black' }: HistoryIconType) => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.88 0.860352C6.31638 0.867171 3.85349 1.79196 2 3.4437V1.79297C2 1.54562 1.89464 1.30841 1.70711 1.13351C1.51957 0.958609 1.26522 0.860352 1 0.860352C0.734784 0.860352 0.48043 0.958609 0.292893 1.13351C0.105357 1.30841 0 1.54562 0 1.79297V5.98975C0 6.23709 0.105357 6.47431 0.292893 6.64921C0.48043 6.82411 0.734784 6.92236 1 6.92236H5.5C5.76522 6.92236 6.01957 6.82411 6.20711 6.64921C6.39464 6.47431 6.5 6.23709 6.5 5.98975C6.5 5.7424 6.39464 5.50519 6.20711 5.33029C6.01957 5.15539 5.76522 5.05713 5.5 5.05713H3.1C4.01171 4.15903 5.1485 3.48638 6.40813 3.09969C7.66775 2.71301 9.01069 2.62442 10.3161 2.84189C11.6216 3.05935 12.8486 3.57606 13.8868 4.34553C14.925 5.115 15.7418 6.11309 16.2637 7.25002C16.7857 8.38695 16.9964 9.62705 16.8769 10.8588C16.7574 12.0905 16.3115 13.2752 15.5793 14.3063C14.847 15.3374 13.8514 16.1826 12.682 16.7658C11.5126 17.349 10.2061 17.652 8.88 17.6475C8.61478 17.6475 8.36043 17.7457 8.17289 17.9206C7.98536 18.0955 7.88 18.3327 7.88 18.5801C7.88 18.8274 7.98536 19.0646 8.17289 19.2395C8.36043 19.4144 8.61478 19.5127 8.88 19.5127C11.5322 19.5127 14.0757 18.5301 15.9511 16.7811C17.8264 15.0321 18.88 12.66 18.88 10.1865C18.88 7.71307 17.8264 5.34092 15.9511 3.59192C14.0757 1.84293 11.5322 0.860352 8.88 0.860352ZM8.88 6.45605C8.61478 6.45605 8.36043 6.55431 8.17289 6.72921C7.98536 6.90411 7.88 7.14133 7.88 7.38867V10.1865C7.88 10.4339 7.98536 10.6711 8.17289 10.846C8.36043 11.0209 8.61478 11.1191 8.88 11.1191H10.88C11.1452 11.1191 11.3996 11.0209 11.5871 10.846C11.7746 10.6711 11.88 10.4339 11.88 10.1865C11.88 9.93918 11.7746 9.70196 11.5871 9.52706C11.3996 9.35216 11.1452 9.25391 10.88 9.25391H9.88V7.38867C9.88 7.14133 9.77464 6.90411 9.58711 6.72921C9.39957 6.55431 9.14522 6.45605 8.88 6.45605Z"
        fill={fill}
      />
    </svg>
  );
};
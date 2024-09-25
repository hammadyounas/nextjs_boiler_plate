interface ListItemUIProps {
  label: string;
}

export const ListItemUI = ({ label }: ListItemUIProps) => {
  return <li>{label}</li>;
};

type personListProps = {
  personList: {
    firstName: string;
    lastName: string;
  }[];
};

export default function Person({ personList }: personListProps) {
  return (
    <div>
      {personList.map((data, index) => {
        return (
          <h5 key={index}>
            {data.firstName} {data.lastName}
          </h5>
        );
      })}
    </div>
  );
}

const page = ({ params }) => {
  return (
    <div>
      <h1>Dinamic routings</h1>
      <h2>{params.id}</h2>
      {console.log(params)}
    </div>
  );
};

export default page;

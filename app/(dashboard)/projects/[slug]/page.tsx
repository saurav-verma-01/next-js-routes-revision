// import React from 'react'

const page = ({ params }) => {
  return (
    <main>
      <h1>Project Name : {params.slug}</h1>
    </main>
  );
};

export default page;

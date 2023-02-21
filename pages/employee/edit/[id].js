import React from 'react';

function Edit({employee}) {
  return <div>{employee.first_name}</div>;
}

export default Edit;

export async function getStaticPaths() {
  const response = await import('/data/employees.json');
  const employees = await JSON.parse(JSON.stringify(response.default ?? []));
  const allPaths = employees.map((employee) => ({
    params: {
      id: employee.id,
    },
  }));

  return { paths: allPaths, fallback: false };
}

export async function getStaticProps(context) {
  console.log('context', context);
  const response = await import('/data/employees.json');
  const employees = await JSON.parse(JSON.stringify(response.default ?? []));
  const employee = employees.find(
    (employee) => employee.id === context?.params.id,
  );

  return { props: { employee } };
}

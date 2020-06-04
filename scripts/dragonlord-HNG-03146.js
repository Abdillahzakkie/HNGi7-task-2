const data = {
    message: 'Hello world',
    name: 'abdullah zakariyya opeyemi',
    id: 'HNG-03146',
    language: 'JavaScript',
    email: 'zakariyyaopeyemi@gmail.com',
  };
  
  const { message, name, id, language, email } = data;
  const output = `${message}, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task.`;
  
  console.log(output);
  return output;
  
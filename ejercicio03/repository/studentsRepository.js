let students = [
    { 
      id: 1, 
      name: "Ana", 
      grade: 18, 
      age: 20, 
      email: "ana@example.com", 
      phone: "987654321", 
      enrollmentNumber: "ENR001", 
      course: "Ingeniería de Sistemas", 
      year: 3, 
      subjects: ["Matemáticas", "Programación", "Bases de Datos"], 
      gpa: 3.8, 
      status: "Activo", 
      admissionDate: "2022-03-15" 
    },
    { 
      id: 2, 
      name: "Luis", 
      grade: 14, 
      age: 22, 
      email: "luis@example.com", 
      phone: "987654322", 
      enrollmentNumber: "ENR002", 
      course: "Administración", 
      year: 4, 
      subjects: ["Economía", "Marketing", "Contabilidad"], 
      gpa: 2.9, 
      status: "Activo", 
      admissionDate: "2021-08-10" 
    },
    { 
      id: 3, 
      name: "Pedro", 
      grade: 16, 
      age: 21, 
      email: "pedro@example.com", 
      phone: "987654323", 
      enrollmentNumber: "ENR003", 
      course: "Derecho", 
      year: 2, 
      subjects: ["Derecho Civil", "Derecho Penal", "Derecho Laboral"], 
      gpa: 3.2, 
      status: "Inactivo", 
      admissionDate: "2023-01-20" 
    }
  ];
  
  function getAll() {
    return students;
  }
  
  function getById(id) {
    return students.find(s => s.id === id);
  }
  
  function create(student) {
    if (!student.name || !student.email || !student.course || !student.phone) {
      return { error: "Faltan campos obligatorios: name, email, course, phone" };
    }
  
    student.id = students.length + 1;
    students.push(student);
    return student;
  }
  
  function update(id, updateData) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
      students[index] = { ...students[index], ...updateData };
      return students[index];
    }
    return null;
  }
  
  function remove(id) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
      return students.splice(index, 1)[0];
    }
    return null;
  }
  
  module.exports = { getAll, getById, create, update, remove };
  
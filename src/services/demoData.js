// Demo data for standalone todo app

// Initial demo todos
let demoTodos = [
  {
    id: '1',
    title: 'Learn React',
    description: 'Study React fundamentals and build projects',
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Build Todo App',
    description: 'Create a fully functional todo application',
    completed: true,
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: '3',
    title: 'Deploy to GitHub',
    description: 'Push code to repository and deploy',
    completed: false,
    createdAt: new Date(Date.now() - 172800000).toISOString()
  }
];

// Demo user
const demoUser = {
  _id: 'demo-user-1',
  name: 'Demo User',
  email: 'demo@example.com'
};

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Auth API (demo)
export const login = async (email, password) => {
  await delay(500);
  // Accept any credentials for demo
  return {
    token: 'demo-token-' + Date.now(),
    user: demoUser
  };
};

export const register = async (email, password, name) => {
  await delay(500);
  return {
    token: 'demo-token-' + Date.now(),
    user: {
      _id: 'user-' + Date.now(),
      name: name || 'New User',
      email: email
    }
  };
};

export const getProfile = async () => {
  await delay(300);
  return { user: demoUser };
};

// Todo API (demo)
export const getTodos = async () => {
  await delay(300);
  return demoTodos;
};

export const createTodo = async (todo) => {
  await delay(400);
  const newTodo = {
    id: String(Date.now()),
    ...todo,
    completed: false,
    createdAt: new Date().toISOString()
  };
  demoTodos.unshift(newTodo);
  return newTodo;
};

export const updateTodo = async (id, todo) => {
  await delay(400);
  const index = demoTodos.findIndex(t => t.id === id);
  if (index !== -1) {
    demoTodos[index] = { ...demoTodos[index], ...todo };
    return demoTodos[index];
  }
  throw new Error('Todo not found');
};

export const deleteTodo = async (id) => {
  await delay(300);
  demoTodos = demoTodos.filter(t => t.id !== id);
  return { message: 'Todo deleted successfully' };
};

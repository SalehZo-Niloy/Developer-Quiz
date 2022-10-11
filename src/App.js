import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import QuizPractice from './components/QuizPractice/QuizPractice';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/statistics', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics></Statistics>
        },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/about', element: <About></About> },
        {
          path: '/topic/:id', loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizPractice></QuizPractice>
        }
      ]
    },
    { path: '*', element: <PageNotFound></PageNotFound> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

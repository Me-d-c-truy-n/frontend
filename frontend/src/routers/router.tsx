import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NovelPreview from "../pages/NovelPreview";
import ScrollToTop from "../hooks/useScrollToTop";
import NovelChapter from "../pages/NovelChapter";
import AuthorPage from "../pages/AuthorPage";
import FilterPage from "../pages/FilterPage";
import Notfound from "../pages/error/Notfound";
import Bookcase from "../pages/Bookcase";

const router = createBrowserRouter(
  [
    {
      element: <ScrollToTop/>,
      children: [
        {
          element: <Layout/>,
          children: [
            {
              path:'/',
              element:<Home/>
            },
            {
              path:'/tu-truyen',
              element: <Bookcase/>
            },
            {
              path: '/truyen/:novelId',
              children:[
                {
                  path:'',
                  element: <NovelPreview/>
                },
                {
                  path: ':chapterId',
                  element: <NovelChapter/>
                }
              ]
            },
            {
              path: '/tac-gia/:authorId',
              element: <AuthorPage/>
            },
            {
              path: '/tim-kiem',
              element: <FilterPage/>
            }
          ]
        },
        {
          path: '/notfound',
          element: <Notfound/>
        },
        {
          path: '*',
          element: <Notfound/>
        }
      ]
    },
  ]
)

export default router;
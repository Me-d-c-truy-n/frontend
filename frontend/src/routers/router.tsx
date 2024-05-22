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
import CheckNewServer from "./CheckNewServer";
import TermOfService from "../pages/Information/TermOfService";
import PrivacyPolicy from "../pages/Information/PrivacyPolicy";
import AboutLicense from "../pages/Information/AboutLicense";
import AboutUs from "../pages/Information/AboutUs";

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
                  element: <CheckNewServer/>,
                  children: [
                    {
                      path: ':chapterId',
                      element: <NovelChapter/>
                    }
                  ]
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
            },
            {
              path: '/thong-tin',
              children: [
                {
                  path: 'dieu-khoan-dich-vu',
                  element: <TermOfService/>
                },
                {
                  path: 'chinh-sach-bao-mat',
                  element: <PrivacyPolicy/>
                },
                {
                  path: 've-ban-quyen',
                  element: <AboutLicense/>
                },
                {
                  path: 'nhom-phat-trien',
                  element: <AboutUs/>
                }
              ]
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